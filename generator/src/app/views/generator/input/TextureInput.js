define(["jquery", "underscore", "backbone", "text!./TextureInput.html", "modules/generator/GeneratorTextureV2"], function(e, t, i, r, n) {
  "use strict";
  var a = i.View.extend({
    template: t.template(r),
    tagName: "tr",
    events: {
      "change .texture-choice": "changeTextureChoice",
      "change .input-texture": "changeFile"
    },
    initialize: function(e) {
      this.inputDef = e.inputDef, this.texture = e.texture, this.choices = e.choices, this.initializeChoices(), this.render()
    },
    initializeChoices: function() {
      var e = this;
      this.choicesMap = {}, this.choices && t.each(this.choices, function(t) {
        var i = t.getProperty("id");
        t.setProperty("name", i), e.choicesMap[i] = t
      })
    },
    render: function() {
      var e = this.template({
        inputDef: this.inputDef,
        choices: this.choices
      });
      this.$el.html(e), this.renderTextureName()
    },
    renderTextureName: function() {
      if (this.texture) {
        var e = this.texture.getProperty("name");
        e && this.$(".texture-name").show().text(e)
      }
    },
    setTexture: function(e) {
      this.texture = e, this.renderTextureName()
    },
    changeTextureChoice: function() {
      var e = this.$(".texture-choice").val(),
        t = this.choicesMap[e];
      t && (this.setTexture(t), this.trigger("select", t))
    },
    changeFile: function(e) {
      var t = this;
      e.preventDefault();
      var i = e.target.files,
        r = i[0];
      if (!r || !r.type || !r.type.match("image.*")) return void alert("Sorry, that is not an image file. Please select a different file.");
      var a = new FileReader;
      a.onload = function(e) {
        var i = e.target.result,
          a = new n(i);
        a.$deferred.done(function() {
          a.setProperty("id", t.inputDef.id), a.setProperty("name", r.name), t.setTexture(a), t.trigger("select", a)
        })
      }, a.readAsDataURL(r)
    }
  });
  return a
});

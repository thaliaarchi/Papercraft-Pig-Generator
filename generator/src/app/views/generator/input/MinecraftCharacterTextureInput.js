define(["jquery", "underscore", "backbone", "text!./MinecraftCharacterTextureInput.html", "./MinecraftCharacterTextureInputDialog"], function(e, t, i, r, c) {
  "use strict";
  return i.View.extend({
    template: t.template(r),
    tagName: "tr",
    events: {
      "change .texture-choice": "changeTextureChoice",
      "click .choose-button": "clickChooseButton"
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
        var e = this.texture.getProperty("name") || this.texture.getProperty("id");
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
    clickChooseButton: function() {
      var e = this;
      this.dialog = new c({
        inputDef: this.inputDef
      }), this.dialog.on("select", function(t) {
        e.setTexture(t), e.trigger("select", t)
      })
    }
  })
});

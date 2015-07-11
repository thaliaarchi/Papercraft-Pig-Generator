define(["jquery", "underscore", "backbone", "modules/generator/GeneratorResourceCollection", "./TextureInput", "./MinecraftCharacterTextureInput", "./TextInput"], function(e, t, r, n, o, a) {
  "use strict";
  var c = r.View.extend({
    tagName: "table",
    className: "table",
    initialize: function(e) {
      this.generatorModel = e.generatorModel, this.render()
    },
    render: function() {
      var e = this;
      this.$el.css("margin-bottom", "0px");
      var r, n = 0,
        c = this.generatorModel.getInputDefs();
      t.each(c, function(c) {
        var i = e.generatorModel.getImage(c.id),
          u = [];
        c.choices && t.each(c.choices, function(t) {
          var r = e.generatorModel.getImage(t);
          r && u.push(r)
        }), "texture" === c.type ? (r = new o({
          inputDef: c,
          texture: i,
          choices: u
        }), r.on("select", function(t) {
          e.generatorModel.setInput(c.id, t), e.trigger("change")
        })) : "minecraft-character-texture" === c.type && (r = new a({
          inputDef: c,
          texture: i,
          choices: u
        }), r.on("select", function(t) {
          e.generatorModel.setInput(c.id, t), e.trigger("change")
        })), e.$el.append(r.$el), 0 === n && r.$("td").css("border-top", "none"), n++
      })
    }
  });
  return c
});

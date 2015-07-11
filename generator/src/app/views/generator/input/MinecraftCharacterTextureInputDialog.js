define(["jquery", "underscore", "backbone", "skinConverter", "text!./MinecraftCharacterTextureInputDialog.html", "modules/image/Img", "modules/generator/GeneratorTextureV2"], function(e, t, i, n, a, r, l) {
  "use strict";
  return i.View.extend({
    template: t.template(a),
    className: "modal",
    events: {
      "click .btn-username": "clickUsername",
      "click .btn-username-go": "clickUsernameGo",
      "click .btn-file": "clickFile",
      "click .btn-url": "clickURL",
      "click .btn-url-go": "clickURLGo",
      "change .input-minecraft-character-file": "changeFile"
    },
    initialize: function(e) {
      this.inputDef = e.inputDef, this.render()
    },
    render: function() {
      var e = this,
        t = this.template();
      this.$el.html(t), this.$el.modal(), this.$el.on("hidden", function() {
        e.close()
      })
    },
    makeSquare: function(e, t) {
      var i = this;
      n.convert(e, function(e, n) {
        return e ? console.log(e) : void i.imageLoaded(n, t)
      })
    },
    imageLoaded: function(e, t) {
      if (e.height === e.width / 2) return this.makeSquare(e, t);
      var i = new l(e);
      i.setProperty("id", this.inputDef.id), i.setProperty("name", t), this.trigger("select", i), this.$el.modal("hide")
    },
    clickUsername: function(e) {
      e.preventDefault(), this.$(".input-panel-username").show(), this.$(".input-panel-file").hide(), this.$(".input-panel-url").hide()
    },
    clickUsernameGo: function(t) {
      var i = this;
      t.preventDefault();
      var n = this.$(".input-panel-username input").val(),
        a = this.$(".indicator-username");
      if (n = e.trim(n), n.length) {
        a.show();
        var l = r.getMinecraftSkinImage(n);
        l.done(function(e) {
          i.imageLoaded(e, n)
        }).fail(function() {
          alert("Sorry, there was a problem finding a skin for the username '" + n + "'")
        }).always(function() {
          a.hide()
        })
      }
    },
    clickFile: function(e) {
      e.preventDefault(), this.$(".input-panel-username").hide(), this.$(".input-panel-file").show(), this.$(".input-panel-url").hide()
    },
    changeFile: function(e) {
      var t = this;
      e.preventDefault();
      var i = e.target.files,
        n = i[0];
      if (!n || !n.type || !n.type.match("image.*")) return void alert("Sorry, that is not an image file. Please select a different file.");
      var a = new FileReader;
      a.onload = function(e) {
        var i = e.target.result,
          a = r.getImageByURL(i);
        a.done(function(e) {
          t.imageLoaded(e, n.name)
        })
      }, a.readAsDataURL(n)
    },
    clickURL: function(e) {
      e.preventDefault(), this.$(".input-panel-username").hide(), this.$(".input-panel-file").hide(), this.$(".input-panel-url").show()
    },
    clickURLGo: function(t) {
      var i = this;
      t.preventDefault();
      var n = this.$(".input-panel-url input").val(),
        a = this.$(".indicator-url");
      if (n = e.trim(n), n.length) {
        a.show();
        var l = r.getImageByURL(n);
        l.done(function(e) {
          i.imageLoaded(e, n)
        }).fail(function() {
          alert("Sorry, there was a problem finding a skin at that URL")
        }).always(function() {
          a.hide()
        })
      }
    }
  })
});

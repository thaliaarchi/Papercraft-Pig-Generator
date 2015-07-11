define(["jquery", "underscore", "backbone", "ace", "bootstrap", "modules/generator/GeneratorImageV2", "modules/generator/GeneratorResourceCollection", "modules/generator/GeneratorModel", "./ThumbnailPanel", "views/generator/render/GeneratorRenderer"], function(e, t, i, r, a, n, s, o, l, c) {
  "use strict";
  var g = i.View.extend({
    events: {
      "change .input-image-files": "imageFilesSelect",
      "click .save-script-button": "clickSaveScript",
      "click .run-script-button": "clickRunScript"
    },
    options: {
      localStoragePrefix: "pixelpapercraft.generator.builder."
    },
    initialize: function() {
      var t = this;
      this.initializeEditor();
      var i = this.initializeImages();
      e.when(i.promise()).then(function() {
        t.images = i.arr, t.render()
      })
    },
    initializeImages: function() {
      var e = new s,
        i = this.loadItem("images") || [];
      return t.each(i, function(t) {
        if (t.dataURL) {
          var i = new n(t.dataURL);
          delete t.dataURL, i.setProperties(t), e.add(t.id, i)
        }
      }), e
    },
    initializeEditor: function() {
      this.generatorScript = this.loadItem("script") || "", this.editor = r.edit("editor"), this.editor.setTheme("ace/theme/monokai"), this.editor.getSession().setMode("ace/mode/javascript"), this.editor.setValue(this.generatorScript), this.editor.clearSelection(), setInterval(e.proxy(this.saveScript, this), 3e4)
    },
    render: function() {
      this.renderImages(), this.runScript()
    },
    renderImages: function() {
      var e = this;
      this.closeImageThumbnailPanel(), this.imageThumbnailPanel = new l(this.images), this.imageThumbnailPanel.on("remove", function(t) {
        e.removeImage(t)
      }), this.imageThumbnailPanel.on("rename", function() {
        e.saveImages()
      }), this.$(".input-image-previews").empty().append(this.imageThumbnailPanel.$el)
    },
    clickSaveScript: function() {
      this.saveScript(!0)
    },
    clickRunScript: function() {
      this.runScript()
    },
    saveItem: function(e, t) {
      var i = this.options.localStoragePrefix + e,
        r = JSON.stringify(t);
      localStorage[i] = r
    },
    loadItem: function(e) {
      var t = this.options.localStoragePrefix + e,
        i = localStorage[t];
      if (!i) return null;
      var r = JSON.parse(i);
      return r
    },
    runScript: function() {
      this.closeGeneratorRenderer();
      var e = this.generatorModel ? this.generatorModel.getImages() : {},
        i = this.generatorModel ? this.generatorModel.getVariables() : {},
        r = this.generatorModel ? this.generatorModel.getInputs() : {};
      t.each(this.images, function(t) {
        var i = t.getProperty("id");
        e[i] || (e[i] = t)
      }), this.generatorModel = new o({
        images: e,
        variables: i,
        inputs: r
      });
      var a = this.editor.getValue();
      this.generatorRenderer = new c({
        script: a,
        generatorModel: this.generatorModel,
        showErrors: !0
      }), this.$(".generator-output").empty().append(this.generatorRenderer.$el)
    },
    saveScript: function(e) {
      var t = this.$(".save-script-button"),
        i = this.generatorScript,
        r = this.editor.getValue();
      (e || i !== r) && (this.generatorScript = r, this.saveItem("script", this.generatorScript), t.prop("disabled", !0).text("Saving ..."), setTimeout(function() {
        t.prop("disabled", !1).text("Save")
      }, 1e3))
    },
    addImage: function(e) {
      this.images.push(e), this.saveImages(), this.renderImages()
    },
    saveImages: function() {
      var e = [];
      t.each(this.images, function(t) {
        e.push(t.serialize())
      }), this.saveItem("images", e)
    },
    removeImage: function(e) {
      var i = e.getProperty("id");
      this.generatorModel.removeImage(i), this.images = t.reject(this.images, function(t) {
        return t === e
      }), this.saveImages()
    },
    isValidImageFile: function(e) {
      return e.type.match("image/jpeg") || e.type.match("image/png")
    },
    makeIdFromFileName: function(e) {
      var i = e;
      i = i.replace(/[^a-zA-Z0-9]/g, "."), i = i.replace(/([a-z])([A-Z])/g, "$1.$2"), i = i.replace(/([a-zA-Z])([0-9])/g, "$1.$2"), i = i.replace(/([0-9])([a-zA-Z])/g, "$1.$2");
      var r = i.split(".");
      r = t.map(r, function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }), r.pop();
      var a = r.join(" ");
      return a
    },
    addImageFile: function(e, t) {
      var i = this,
        r = new n(t);
      r.$deferred.done(function() {
        var t = i.makeIdFromFileName(e.name);
        r.setProperty("id", t), r.setProperty("fileName", e.name), r.setProperty("size", e.size), r.setProperty("type", e.type), i.addImage(r)
      })
    },
    imageFilesSelect: function(e) {
      var i = this,
        r = e.target.files;
      t.each(r, function(e) {
        if (i.isValidImageFile(e)) {
          var t = new FileReader;
          t.onload = function(t) {
            var r = t.target.result;
            i.addImageFile(e, r)
          }, t.readAsDataURL(e)
        }
      })
    },
    closeImageThumbnailPanel: function() {
      this.imageThumbnailPanel && this.imageThumbnailPanel.close()
    },
    closeGeneratorRenderer: function() {
      this.generatorRenderer && this.generatorRenderer.close()
    },
    onClose: function() {
      this.closeImageThumbnailPanel(), this.closeTextureThumbnailPanel(), this.closeGeneratorRenderer()
    }
  });
  return g
});

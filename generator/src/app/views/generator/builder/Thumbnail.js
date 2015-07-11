define(["jquery", "underscore", "backbone", "text!./Thumbnail.html"], function(e, t, i, n) {
  "use strict";
  var a = i.View.extend({
    className: "thumbnail",
    template: t.template(n),
    events: {
      "click .remove-image": "onClickRemove",
      "keyup input": "onKeyUpInput"
    },
    initialize: function() {
      this.image = this.options.image, this.render()
    },
    render: function() {
      var t = this,
        i = this.image,
        n = t.template({
          image: i
        });
      this.$el.html(n);
      var a = this.$(".image-container"),
        r = this.$("input");
      a.css({
        width: "150px",
        height: "150px"
      }), r.css({
        width: "135px",
        fontWeight: "bold"
      }), i.$deferred.done(function() {
        var t = e(i.image);
        t.css({
          maxWidth: "150px",
          maxHeight: "150px"
        }), a.empty().append(i.image)
      })
    },
    onClickRemove: function(e) {
      e.preventDefault(), this.trigger("remove", this.image)
    },
    onKeyUpInput: function() {
      var t = this.$("input").val();
      t = e.trim(t), this.image.setProperty("id", t), this.trigger("rename", this.image)
    }
  });
  return a
});

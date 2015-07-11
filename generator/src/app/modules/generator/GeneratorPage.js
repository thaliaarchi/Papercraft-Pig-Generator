define([], function() {
  "use strict";
  var t = function(t, e) {
    this.width = t, this.height = e, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = this.width, this.canvas.height = this.height, this.properties = {}
  };
  return t.prototype = {
    constructor: t,
    setProperty: function(t, e) {
      this.properties[t] = e
    },
    setProperties: function(t) {
      _.extend(this.properties, t)
    },
    getProperty: function(t) {
      return this.properties[t]
    },
    getProperties: function() {
      return this.properties
    },
    toImage: function() {
      var t = this.canvas.toDataURL(),
        e = new Image;
      return e.src = t, e
    },
    toImageAsync: function(t) {
      var e = this.canvas.toDataURL(),
        i = new Image;
      i.onload = function() {
        t(i)
      }, i.src = e
    }
  }, t
});

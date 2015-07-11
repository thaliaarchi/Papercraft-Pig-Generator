define(["jquery", "underscore"], function(r, e) {
  var t = function() {
    this.arr = [], this.map = {}
  };
  return t.prototype = {
    constructor: t,
    ready: function() {
      return this.promise()
    },
    promise: function() {
      var t = this.arr,
        n = r.Deferred();
      if (0 === t.length) n.resolve();
      else {
        var i = [];
        e.each(t, function(r) {
          i.push(r.$deferred)
        }), r.when.apply(r, i).then(function() {
          n.resolve()
        })
      }
      return n.promise()
    },
    add: function(r, t) {
      var n = this.map[r];
      n && (this.arr = e.reject(this.arr, function(r) {
        return r === n
      }), delete this.map[r]), this.arr.push(t), this.map[r] = t
    },
    get: function(r) {
      return this.map[r]
    }
  }, t
});

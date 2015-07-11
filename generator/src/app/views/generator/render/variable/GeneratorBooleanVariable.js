define(["jquery", "underscore", "backbone", "text!./GeneratorBooleanVariable.html"], function(e, t, n, i) {
  return n.View.extend({
    template: t.template(i),
    className: "control-group",
    events: {
      "change input": "onChangeInput"
    },
    initialize: function(e) {
      this.variableDef = e.variableDef, this.render()
    },
    render: function() {
      var e = this.template({
        variableDef: this.variableDef
      });
      this.$el.html(e), this.$input = this.$("input")
    },
    setValue: function(e) {
      this.$input.prop("checked", !!e)
    },
    onChangeInput: function() {
      var e = this.$input.prop("checked");
      this.trigger("change", e)
    }
  })
});

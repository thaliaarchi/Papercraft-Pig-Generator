define(["jquery", "underscore", "backbone", "./variable/GeneratorBooleanVariable", "./variable/GeneratorRangeVariable", "./variable/GeneratorSelectVariable"], function(e, a, i, r, n, t) {
  "use strict";
  return i.View.extend({
    initialize: function(e) {
      this.generatorModel = e.generatorModel, this.variableViews = [], this.render()
    },
    render: function() {
      var e = this;
      this.closeVariableViews(), this.$container = this.$el;
      var i = this.generatorModel.getVariableDefs();
      a.each(i, function(a) {
        "boolean" === a.type ? e.renderBooleanVariable(a) : "range" === a.type ? e.renderRangeVariable(a) : "select" === a.type && e.renderSelectVariable(a)
      })
    },
    renderBooleanVariable: function(e) {
      var a = this,
        i = this.generatorModel,
        n = new r({
          variableDef: e
        });
      n.on("change", function(r) {
        i.setVariable(e.id, r), a.trigger("change")
      });
      var t = i.getVariable(e.id);
      n.setValue(t), this.$container.append(n.$el), this.variableViews.push(n)
    },
    renderRangeVariable: function(e) {
      var a = this,
        i = this.generatorModel,
        r = new n({
          variableDef: e
        });
      r.on("change", function(r) {
        i.setVariable(e.id, r), a.trigger("change")
      });
      var t = i.getVariable(e.id);
      r.setValue(t), this.$container.append(r.$el), this.variableViews.push(r)
    },
    renderSelectVariable: function(e) {
      var a = this,
        i = this.generatorModel,
        r = new t({
          variableDef: e
        });
      r.on("change", function(r) {
        i.setVariable(e.id, r), a.trigger("change")
      });
      var n = i.getVariable(e.id);
      r.setValue(n), this.$container.append(r.$el), this.variableViews.push(r)
    },
    closeVariableViews: function() {
      for (var e = 0; e < this.variableViews.length; e++) this.variableViews[e].close()
    },
    onClose: function() {
      this.closeVariableViews()
    }
  })
});

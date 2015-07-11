define(["modules/generator/builder/GeneratorProxy"], function(GeneratorProxy) {
  "use strict";
  var ScriptRunner = {};
  return ScriptRunner.run = function(script, generatorModel) {
    generatorModel.resetInputDefs(), generatorModel.resetVariableDefs(), generatorModel.resetImageOptions(), generatorModel.resetErrors(), generatorModel.resetPages();
    var Generator = GeneratorProxy(generatorModel);
    return eval(script), Generator
  }, ScriptRunner
});

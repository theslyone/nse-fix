var invert = require('invert-obj');

function LegBenchmarkCurveName (legBenchmarkCurveName) {
  this.message = legBenchmarkCurveName;
}

LegBenchmarkCurveName.prototype.value = function () {
  return this.message;
};

LegBenchmarkCurveName.Tag = '677';

LegBenchmarkCurveName.Type = 'STRING';

module.exports = LegBenchmarkCurveName;
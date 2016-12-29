var invert = require('invert-obj');

function LegBenchmarkCurvePoint (legBenchmarkCurvePoint) {
  this.message = legBenchmarkCurvePoint;
}

LegBenchmarkCurvePoint.prototype.value = function () {
  return this.message;
};

LegBenchmarkCurvePoint.Tag = '678';

LegBenchmarkCurvePoint.Type = 'STRING';

module.exports = LegBenchmarkCurvePoint;
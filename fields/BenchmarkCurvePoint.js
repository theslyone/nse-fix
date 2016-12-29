var invert = require('invert-obj');

function BenchmarkCurvePoint (benchmarkCurvePoint) {
  this.message = benchmarkCurvePoint;
}

BenchmarkCurvePoint.prototype.value = function () {
  return this.message;
};

BenchmarkCurvePoint.Tag = '222';

BenchmarkCurvePoint.Type = 'STRING';

module.exports = BenchmarkCurvePoint;
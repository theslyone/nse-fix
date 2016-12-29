var invert = require('invert-obj');

function BenchmarkCurveCurrency (benchmarkCurveCurrency) {
  this.message = benchmarkCurveCurrency;
}

BenchmarkCurveCurrency.prototype.value = function () {
  return this.message;
};

BenchmarkCurveCurrency.Tag = '220';

BenchmarkCurveCurrency.Type = 'CURRENCY';

module.exports = BenchmarkCurveCurrency;
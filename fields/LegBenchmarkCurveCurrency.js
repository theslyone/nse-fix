var invert = require('invert-obj');

function LegBenchmarkCurveCurrency (legBenchmarkCurveCurrency) {
  this.message = legBenchmarkCurveCurrency;
}

LegBenchmarkCurveCurrency.prototype.value = function () {
  return this.message;
};

LegBenchmarkCurveCurrency.Tag = '676';

LegBenchmarkCurveCurrency.Type = 'CURRENCY';

module.exports = LegBenchmarkCurveCurrency;
var invert = require('invert-obj');

function LegBenchmarkPrice (legBenchmarkPrice) {
  this.message = legBenchmarkPrice;
}

LegBenchmarkPrice.prototype.value = function () {
  return this.message;
};

LegBenchmarkPrice.Tag = '679';

LegBenchmarkPrice.Type = 'PRICE';

module.exports = LegBenchmarkPrice;
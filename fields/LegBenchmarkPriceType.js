var invert = require('invert-obj');

function LegBenchmarkPriceType (legBenchmarkPriceType) {
  this.message = legBenchmarkPriceType;
}

LegBenchmarkPriceType.prototype.value = function () {
  return this.message;
};

LegBenchmarkPriceType.Tag = '680';

LegBenchmarkPriceType.Type = 'INT';

module.exports = LegBenchmarkPriceType;
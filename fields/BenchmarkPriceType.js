var invert = require('invert-obj');

function BenchmarkPriceType (benchmarkPriceType) {
  this.message = benchmarkPriceType;
}

BenchmarkPriceType.prototype.value = function () {
  return this.message;
};

BenchmarkPriceType.Tag = '663';

BenchmarkPriceType.Type = 'INT';

module.exports = BenchmarkPriceType;
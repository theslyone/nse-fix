var invert = require('invert-obj');

function BenchmarkPrice (benchmarkPrice) {
  this.message = benchmarkPrice;
}

BenchmarkPrice.prototype.value = function () {
  return this.message;
};

BenchmarkPrice.Tag = '662';

BenchmarkPrice.Type = 'PRICE';

module.exports = BenchmarkPrice;
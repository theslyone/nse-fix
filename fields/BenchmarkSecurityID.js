var invert = require('invert-obj');

function BenchmarkSecurityID (benchmarkSecurityId) {
  this.message = benchmarkSecurityId;
}

BenchmarkSecurityID.prototype.value = function () {
  return this.message;
};

BenchmarkSecurityID.Tag = '699';

BenchmarkSecurityID.Type = 'STRING';

module.exports = BenchmarkSecurityID;
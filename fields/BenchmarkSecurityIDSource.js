var invert = require('invert-obj');

function BenchmarkSecurityIDSource (benchmarkSecurityIdsource) {
  this.message = benchmarkSecurityIdsource;
}

BenchmarkSecurityIDSource.prototype.value = function () {
  return this.message;
};

BenchmarkSecurityIDSource.Tag = '761';

BenchmarkSecurityIDSource.Type = 'STRING';

module.exports = BenchmarkSecurityIDSource;
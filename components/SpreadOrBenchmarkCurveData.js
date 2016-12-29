var Spread = require('../fields/Spread');
var BenchmarkCurveCurrency = require('../fields/BenchmarkCurveCurrency');
var BenchmarkCurveName = require('../fields/BenchmarkCurveName');
var BenchmarkCurvePoint = require('../fields/BenchmarkCurvePoint');
var BenchmarkPrice = require('../fields/BenchmarkPrice');
var BenchmarkPriceType = require('../fields/BenchmarkPriceType');
var BenchmarkSecurityID = require('../fields/BenchmarkSecurityID');
var BenchmarkSecurityIDSource = require('../fields/BenchmarkSecurityIDSource');

function SpreadOrBenchmarkCurveData (spreadOrBenchmarkCurveData) {
  this.message = spreadOrBenchmarkCurveData;
}
/* field */
SpreadOrBenchmarkCurveData.prototype.spread = function () {
  return new Spread(this.message.tags[Spread.Tag]);
};

/* field */
SpreadOrBenchmarkCurveData.prototype.benchmarkCurveCurrency = function () {
  return new BenchmarkCurveCurrency(this.message.tags[BenchmarkCurveCurrency.Tag]);
};

/* field */
SpreadOrBenchmarkCurveData.prototype.benchmarkCurveName = function () {
  return new BenchmarkCurveName(this.message.tags[BenchmarkCurveName.Tag]);
};

/* field */
SpreadOrBenchmarkCurveData.prototype.benchmarkCurvePoint = function () {
  return new BenchmarkCurvePoint(this.message.tags[BenchmarkCurvePoint.Tag]);
};

/* field */
SpreadOrBenchmarkCurveData.prototype.benchmarkPrice = function () {
  return new BenchmarkPrice(this.message.tags[BenchmarkPrice.Tag]);
};

/* field */
SpreadOrBenchmarkCurveData.prototype.benchmarkPriceType = function () {
  return new BenchmarkPriceType(this.message.tags[BenchmarkPriceType.Tag]);
};

/* field */
SpreadOrBenchmarkCurveData.prototype.benchmarkSecurityId = function () {
  return new BenchmarkSecurityID(this.message.tags[BenchmarkSecurityID.Tag]);
};

/* field */
SpreadOrBenchmarkCurveData.prototype.benchmarkSecurityIdsource = function () {
  return new BenchmarkSecurityIDSource(this.message.tags[BenchmarkSecurityIDSource.Tag]);
};



SpreadOrBenchmarkCurveData.Tag = '218';

module.exports = SpreadOrBenchmarkCurveData;
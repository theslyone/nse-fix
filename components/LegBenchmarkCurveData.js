var LegBenchmarkCurveCurrency = require('../fields/LegBenchmarkCurveCurrency');
var LegBenchmarkCurveName = require('../fields/LegBenchmarkCurveName');
var LegBenchmarkCurvePoint = require('../fields/LegBenchmarkCurvePoint');
var LegBenchmarkPrice = require('../fields/LegBenchmarkPrice');
var LegBenchmarkPriceType = require('../fields/LegBenchmarkPriceType');

function LegBenchmarkCurveData (legBenchmarkCurveData) {
  this.message = legBenchmarkCurveData;
}
/* field */
LegBenchmarkCurveData.prototype.legBenchmarkCurveCurrency = function () {
  return new LegBenchmarkCurveCurrency(this.message.tags[LegBenchmarkCurveCurrency.Tag]);
};

/* field */
LegBenchmarkCurveData.prototype.legBenchmarkCurveName = function () {
  return new LegBenchmarkCurveName(this.message.tags[LegBenchmarkCurveName.Tag]);
};

/* field */
LegBenchmarkCurveData.prototype.legBenchmarkCurvePoint = function () {
  return new LegBenchmarkCurvePoint(this.message.tags[LegBenchmarkCurvePoint.Tag]);
};

/* field */
LegBenchmarkCurveData.prototype.legBenchmarkPrice = function () {
  return new LegBenchmarkPrice(this.message.tags[LegBenchmarkPrice.Tag]);
};

/* field */
LegBenchmarkCurveData.prototype.legBenchmarkPriceType = function () {
  return new LegBenchmarkPriceType(this.message.tags[LegBenchmarkPriceType.Tag]);
};



LegBenchmarkCurveData.Tag = '676';

module.exports = LegBenchmarkCurveData;
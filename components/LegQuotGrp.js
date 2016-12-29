var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var NestedParties = require('../components/NestedParties');
var LegBenchmarkCurveData = require('../components/LegBenchmarkCurveData');
var LegQty = require('../fields/LegQty');
var LegSwapType = require('../fields/LegSwapType');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegPriceType = require('../fields/LegPriceType');
var LegBidPx = require('../fields/LegBidPx');
var LegOfferPx = require('../fields/LegOfferPx');
var LegOrderQty = require('../fields/LegOrderQty');
var LegRefID = require('../fields/LegRefID');
var LegBidForwardPoints = require('../fields/LegBidForwardPoints');
var LegOfferForwardPoints = require('../fields/LegOfferForwardPoints');

function LegQuotGrp (legQuotGrp) {
  this.message = legQuotGrp;
}

/* group */

/* component */
LegQuotGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
LegQuotGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
LegQuotGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* component */
LegQuotGrp.prototype.legBenchmarkCurveData = function () {
  return this.message.groups[LegBenchmarkCurveData.Tag]
    .map(function (legBenchmarkCurveData) {
      return new LegBenchmarkCurveData(legBenchmarkCurveData);
  });
};

/* field */
LegQuotGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
LegQuotGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
LegQuotGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
LegQuotGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
LegQuotGrp.prototype.legPriceType = function () {
  return new LegPriceType(this.message.tags[LegPriceType.Tag]);
};

/* field */
LegQuotGrp.prototype.legBidPx = function () {
  return new LegBidPx(this.message.tags[LegBidPx.Tag]);
};

/* field */
LegQuotGrp.prototype.legOfferPx = function () {
  return new LegOfferPx(this.message.tags[LegOfferPx.Tag]);
};

/* field */
LegQuotGrp.prototype.legOrderQty = function () {
  return new LegOrderQty(this.message.tags[LegOrderQty.Tag]);
};

/* field */
LegQuotGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
LegQuotGrp.prototype.legBidForwardPoints = function () {
  return new LegBidForwardPoints(this.message.tags[LegBidForwardPoints.Tag]);
};

/* field */
LegQuotGrp.prototype.legOfferForwardPoints = function () {
  return new LegOfferForwardPoints(this.message.tags[LegOfferForwardPoints.Tag]);
};

/* end group */

LegQuotGrp.Tag = '555';

module.exports = LegQuotGrp;
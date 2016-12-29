var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var NestedParties = require('../components/NestedParties');
var TradeCapLegUnderlyingsGrp = require('../components/TradeCapLegUnderlyingsGrp');
var LegQty = require('../fields/LegQty');
var LegSwapType = require('../fields/LegSwapType');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegRefID = require('../fields/LegRefID');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegLastPx = require('../fields/LegLastPx');
var LegReportID = require('../fields/LegReportID');
var LegSettlCurrency = require('../fields/LegSettlCurrency');
var LegLastForwardPoints = require('../fields/LegLastForwardPoints');
var LegCalculatedCcyLastQty = require('../fields/LegCalculatedCcyLastQty');
var LegGrossTradeAmt = require('../fields/LegGrossTradeAmt');
var LegNumber = require('../fields/LegNumber');
var LegVolatility = require('../fields/LegVolatility');
var LegDividendYield = require('../fields/LegDividendYield');
var LegCurrencyRatio = require('../fields/LegCurrencyRatio');
var LegExecInst = require('../fields/LegExecInst');
var LegLastQty = require('../fields/LegLastQty');

function TrdInstrmtLegGrp (trdInstrmtLegGrp) {
  this.message = trdInstrmtLegGrp;
}

/* group */

/* component */
TrdInstrmtLegGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* component */
TrdInstrmtLegGrp.prototype.tradeCapLegUnderlyingsGrp = function () {
  return this.message.groups[TradeCapLegUnderlyingsGrp.Tag]
    .map(function (tradeCapLegUnderlyingsGrp) {
      return new TradeCapLegUnderlyingsGrp(tradeCapLegUnderlyingsGrp);
  });
};

/* field */
TrdInstrmtLegGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastPx = function () {
  return new LegLastPx(this.message.tags[LegLastPx.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legReportId = function () {
  return new LegReportID(this.message.tags[LegReportID.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legSettlCurrency = function () {
  return new LegSettlCurrency(this.message.tags[LegSettlCurrency.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastForwardPoints = function () {
  return new LegLastForwardPoints(this.message.tags[LegLastForwardPoints.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legCalculatedCcyLastQty = function () {
  return new LegCalculatedCcyLastQty(this.message.tags[LegCalculatedCcyLastQty.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legGrossTradeAmt = function () {
  return new LegGrossTradeAmt(this.message.tags[LegGrossTradeAmt.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legNumber = function () {
  return new LegNumber(this.message.tags[LegNumber.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legVolatility = function () {
  return new LegVolatility(this.message.tags[LegVolatility.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legDividendYield = function () {
  return new LegDividendYield(this.message.tags[LegDividendYield.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legCurrencyRatio = function () {
  return new LegCurrencyRatio(this.message.tags[LegCurrencyRatio.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legExecInst = function () {
  return new LegExecInst(this.message.tags[LegExecInst.Tag]);
};

/* field */
TrdInstrmtLegGrp.prototype.legLastQty = function () {
  return new LegLastQty(this.message.tags[LegLastQty.Tag]);
};

/* end group */

TrdInstrmtLegGrp.Tag = '555';

module.exports = TrdInstrmtLegGrp;
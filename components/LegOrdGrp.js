var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var LegPreAllocGrp = require('../components/LegPreAllocGrp');
var NestedParties = require('../components/NestedParties');
var LegQty = require('../fields/LegQty');
var LegSwapType = require('../fields/LegSwapType');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegRefID = require('../fields/LegRefID');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegOrderQty = require('../fields/LegOrderQty');
var LegAllocID = require('../fields/LegAllocID');
var LegVolatility = require('../fields/LegVolatility');
var LegDividendYield = require('../fields/LegDividendYield');
var LegCurrencyRatio = require('../fields/LegCurrencyRatio');
var LegExecInst = require('../fields/LegExecInst');
var LegSettlCurrency = require('../fields/LegSettlCurrency');

function LegOrdGrp (legOrdGrp) {
  this.message = legOrdGrp;
}

/* group */

/* component */
LegOrdGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
LegOrdGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
LegOrdGrp.prototype.legPreAllocGrp = function () {
  return this.message.groups[LegPreAllocGrp.Tag]
    .map(function (legPreAllocGrp) {
      return new LegPreAllocGrp(legPreAllocGrp);
  });
};

/* component */
LegOrdGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
LegOrdGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
LegOrdGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
LegOrdGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
LegOrdGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
LegOrdGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
LegOrdGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
LegOrdGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
LegOrdGrp.prototype.legOrderQty = function () {
  return new LegOrderQty(this.message.tags[LegOrderQty.Tag]);
};

/* field */
LegOrdGrp.prototype.legAllocId = function () {
  return new LegAllocID(this.message.tags[LegAllocID.Tag]);
};

/* field */
LegOrdGrp.prototype.legVolatility = function () {
  return new LegVolatility(this.message.tags[LegVolatility.Tag]);
};

/* field */
LegOrdGrp.prototype.legDividendYield = function () {
  return new LegDividendYield(this.message.tags[LegDividendYield.Tag]);
};

/* field */
LegOrdGrp.prototype.legCurrencyRatio = function () {
  return new LegCurrencyRatio(this.message.tags[LegCurrencyRatio.Tag]);
};

/* field */
LegOrdGrp.prototype.legExecInst = function () {
  return new LegExecInst(this.message.tags[LegExecInst.Tag]);
};

/* field */
LegOrdGrp.prototype.legSettlCurrency = function () {
  return new LegSettlCurrency(this.message.tags[LegSettlCurrency.Tag]);
};

/* end group */

LegOrdGrp.Tag = '555';

module.exports = LegOrdGrp;
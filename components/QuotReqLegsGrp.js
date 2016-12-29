var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var NestedParties = require('../components/NestedParties');
var LegBenchmarkCurveData = require('../components/LegBenchmarkCurveData');
var LegQty = require('../fields/LegQty');
var LegSwapType = require('../fields/LegSwapType');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegOrderQty = require('../fields/LegOrderQty');
var LegRefID = require('../fields/LegRefID');

function QuotReqLegsGrp (quotReqLegsGrp) {
  this.message = quotReqLegsGrp;
}

/* group */

/* component */
QuotReqLegsGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
QuotReqLegsGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
QuotReqLegsGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* component */
QuotReqLegsGrp.prototype.legBenchmarkCurveData = function () {
  return this.message.groups[LegBenchmarkCurveData.Tag]
    .map(function (legBenchmarkCurveData) {
      return new LegBenchmarkCurveData(legBenchmarkCurveData);
  });
};

/* field */
QuotReqLegsGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
QuotReqLegsGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
QuotReqLegsGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
QuotReqLegsGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
QuotReqLegsGrp.prototype.legOrderQty = function () {
  return new LegOrderQty(this.message.tags[LegOrderQty.Tag]);
};

/* field */
QuotReqLegsGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* end group */

QuotReqLegsGrp.Tag = '555';

module.exports = QuotReqLegsGrp;
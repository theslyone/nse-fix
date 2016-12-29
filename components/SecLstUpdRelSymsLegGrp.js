var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var LegBenchmarkCurveData = require('../components/LegBenchmarkCurveData');
var LegSwapType = require('../fields/LegSwapType');
var LegSettlType = require('../fields/LegSettlType');

function SecLstUpdRelSymsLegGrp (secLstUpdRelSymsLegGrp) {
  this.message = secLstUpdRelSymsLegGrp;
}

/* group */

/* component */
SecLstUpdRelSymsLegGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
SecLstUpdRelSymsLegGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
SecLstUpdRelSymsLegGrp.prototype.legBenchmarkCurveData = function () {
  return this.message.groups[LegBenchmarkCurveData.Tag]
    .map(function (legBenchmarkCurveData) {
      return new LegBenchmarkCurveData(legBenchmarkCurveData);
  });
};

/* field */
SecLstUpdRelSymsLegGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
SecLstUpdRelSymsLegGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* end group */

SecLstUpdRelSymsLegGrp.Tag = '555';

module.exports = SecLstUpdRelSymsLegGrp;
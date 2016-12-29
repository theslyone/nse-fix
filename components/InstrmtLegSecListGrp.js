var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var LegBenchmarkCurveData = require('../components/LegBenchmarkCurveData');
var LegSwapType = require('../fields/LegSwapType');
var LegSettlType = require('../fields/LegSettlType');

function InstrmtLegSecListGrp (instrmtLegSecListGrp) {
  this.message = instrmtLegSecListGrp;
}

/* group */

/* component */
InstrmtLegSecListGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
InstrmtLegSecListGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
InstrmtLegSecListGrp.prototype.legBenchmarkCurveData = function () {
  return this.message.groups[LegBenchmarkCurveData.Tag]
    .map(function (legBenchmarkCurveData) {
      return new LegBenchmarkCurveData(legBenchmarkCurveData);
  });
};

/* field */
InstrmtLegSecListGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
InstrmtLegSecListGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* end group */

InstrmtLegSecListGrp.Tag = '555';

module.exports = InstrmtLegSecListGrp;
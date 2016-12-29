var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var LegIOIQty = require('../fields/LegIOIQty');

function InstrmtLegIOIGrp (instrmtLegIoigrp) {
  this.message = instrmtLegIoigrp;
}

/* group */

/* component */
InstrmtLegIOIGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
InstrmtLegIOIGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* field */
InstrmtLegIOIGrp.prototype.legIoiqty = function () {
  return new LegIOIQty(this.message.tags[LegIOIQty.Tag]);
};

/* end group */

InstrmtLegIOIGrp.Tag = '555';

module.exports = InstrmtLegIOIGrp;
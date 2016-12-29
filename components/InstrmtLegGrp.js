var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');

function InstrmtLegGrp (instrmtLegGrp) {
  this.message = instrmtLegGrp;
}

/* group */

/* component */
InstrmtLegGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* end group */

InstrmtLegGrp.Tag = '555';

module.exports = InstrmtLegGrp;
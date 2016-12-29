var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');

function InstrmtGrp (instrmtGrp) {
  this.message = instrmtGrp;
}

/* group */

/* component */
InstrmtGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* end group */

InstrmtGrp.Tag = '146';

module.exports = InstrmtGrp;
var NoUnderlyings = require('../fields/NoUnderlyings');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');

function UndInstrmtGrp (undInstrmtGrp) {
  this.message = undInstrmtGrp;
}

/* group */

/* component */
UndInstrmtGrp.prototype.underlyingInstrument = function () {
  return this.message.groups[UnderlyingInstrument.Tag]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

/* end group */

UndInstrmtGrp.Tag = '711';

module.exports = UndInstrmtGrp;
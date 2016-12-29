var NoUnderlyings = require('../fields/NoUnderlyings');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var CollAction = require('../fields/CollAction');

function UndInstrmtCollGrp (undInstrmtCollGrp) {
  this.message = undInstrmtCollGrp;
}

/* group */

/* component */
UndInstrmtCollGrp.prototype.underlyingInstrument = function () {
  return this.message.groups[UnderlyingInstrument.Tag]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

/* field */
UndInstrmtCollGrp.prototype.collAction = function () {
  return new CollAction(this.message.tags[CollAction.Tag]);
};

/* end group */

UndInstrmtCollGrp.Tag = '711';

module.exports = UndInstrmtCollGrp;
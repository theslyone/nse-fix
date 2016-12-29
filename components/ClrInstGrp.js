var NoClearingInstructions = require('../fields/NoClearingInstructions');
var ClearingInstruction = require('../fields/ClearingInstruction');

function ClrInstGrp (clrInstGrp) {
  this.message = clrInstGrp;
}

/* group */

/* field */
ClrInstGrp.prototype.clearingInstruction = function () {
  return new ClearingInstruction(this.message.tags[ClearingInstruction.Tag]);
};

/* end group */

ClrInstGrp.Tag = '576';

module.exports = ClrInstGrp;
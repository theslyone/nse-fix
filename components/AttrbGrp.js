var NoInstrAttrib = require('../fields/NoInstrAttrib');
var InstrAttribType = require('../fields/InstrAttribType');
var InstrAttribValue = require('../fields/InstrAttribValue');

function AttrbGrp (attrbGrp) {
  this.message = attrbGrp;
}

/* group */

/* field */
AttrbGrp.prototype.instrAttribType = function () {
  return new InstrAttribType(this.message.tags[InstrAttribType.Tag]);
};

/* field */
AttrbGrp.prototype.instrAttribValue = function () {
  return new InstrAttribValue(this.message.tags[InstrAttribValue.Tag]);
};

/* end group */

AttrbGrp.Tag = '870';

module.exports = AttrbGrp;
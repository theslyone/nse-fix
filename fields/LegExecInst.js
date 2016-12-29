var invert = require('invert-obj');

function LegExecInst (legExecInst) {
  this.message = legExecInst;
}

LegExecInst.prototype.value = function () {
  return this.message;
};

LegExecInst.Tag = '1384';

LegExecInst.Type = 'MULTIPLECHARVALUE';

module.exports = LegExecInst;
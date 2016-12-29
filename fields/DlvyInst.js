var invert = require('invert-obj');

function DlvyInst (dlvyInst) {
  this.message = dlvyInst;
}

DlvyInst.prototype.value = function () {
  return this.message;
};

DlvyInst.Tag = '86';

DlvyInst.Type = 'STRING';

module.exports = DlvyInst;
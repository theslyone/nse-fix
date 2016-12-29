var invert = require('invert-obj');

function NoDlvyInst (noDlvyInst) {
  this.message = noDlvyInst;
}

NoDlvyInst.prototype.value = function () {
  return this.message;
};

NoDlvyInst.Tag = '85';

NoDlvyInst.Type = 'NUMINGROUP';

module.exports = NoDlvyInst;
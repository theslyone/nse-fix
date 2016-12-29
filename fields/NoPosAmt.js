var invert = require('invert-obj');

function NoPosAmt (noPosAmt) {
  this.message = noPosAmt;
}

NoPosAmt.prototype.value = function () {
  return this.message;
};

NoPosAmt.Tag = '753';

NoPosAmt.Type = 'NUMINGROUP';

module.exports = NoPosAmt;
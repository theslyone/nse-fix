var invert = require('invert-obj');

function PosAmt (posAmt) {
  this.message = posAmt;
}

PosAmt.prototype.value = function () {
  return this.message;
};

PosAmt.Tag = '708';

PosAmt.Type = 'AMT';

module.exports = PosAmt;
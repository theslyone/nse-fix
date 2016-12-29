var invert = require('invert-obj');

function CcyAmt (ccyAmt) {
  this.message = ccyAmt;
}

CcyAmt.prototype.value = function () {
  return this.message;
};

CcyAmt.Tag = '1157';

CcyAmt.Type = 'AMT';

module.exports = CcyAmt;
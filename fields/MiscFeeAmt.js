var invert = require('invert-obj');

function MiscFeeAmt (miscFeeAmt) {
  this.message = miscFeeAmt;
}

MiscFeeAmt.prototype.value = function () {
  return this.message;
};

MiscFeeAmt.Tag = '137';

MiscFeeAmt.Type = 'AMT';

module.exports = MiscFeeAmt;
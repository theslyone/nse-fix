var invert = require('invert-obj');

function ContAmtValue (contAmtValue) {
  this.message = contAmtValue;
}

ContAmtValue.prototype.value = function () {
  return this.message;
};

ContAmtValue.Tag = '520';

ContAmtValue.Type = 'FLOAT';

module.exports = ContAmtValue;
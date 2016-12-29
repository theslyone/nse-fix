var invert = require('invert-obj');

function UnderlyingCashType (underlyingCashType) {
  this.message = underlyingCashType;
}

UnderlyingCashType.prototype.value = function () {
  return this.message;
};


UnderlyingCashType.Keys = {
  'FIXED': 'FIXED',
  'DIFF': 'DIFF',
};

UnderlyingCashType.Tag = '974';

UnderlyingCashType.Type = 'STRING';

UnderlyingCashType.Values = invert(UnderlyingCashType.Keys);

module.exports = UnderlyingCashType;
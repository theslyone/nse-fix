var invert = require('invert-obj');

function FuturesValuationMethod (futuresValuationMethod) {
  this.message = futuresValuationMethod;
}

FuturesValuationMethod.prototype.value = function () {
  return this.message;
};


FuturesValuationMethod.Keys = {
  'PREMIUM_STYLE': 'EQTY',
  'FUTURES_STYLE_MARK_TO_MARKET': 'FUT',
  'FUTURES_STYLE_WITH_AN_ATTACHED_CASH_ADJUSTMENT': 'FUTDA',
};

FuturesValuationMethod.Tag = '1197';

FuturesValuationMethod.Type = 'STRING';

FuturesValuationMethod.Values = invert(FuturesValuationMethod.Keys);

module.exports = FuturesValuationMethod;
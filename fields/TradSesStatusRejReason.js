var invert = require('invert-obj');

function TradSesStatusRejReason (tradSesStatusRejReason) {
  this.message = tradSesStatusRejReason;
}

TradSesStatusRejReason.prototype.value = function () {
  return this.message;
};


TradSesStatusRejReason.Keys = {
  'UNKNOWN_OR_INVALID_TRADINGSESSIONID': '1',
  'OTHER': '99',
};

TradSesStatusRejReason.Tag = '567';

TradSesStatusRejReason.Type = 'INT';

TradSesStatusRejReason.Values = invert(TradSesStatusRejReason.Keys);

module.exports = TradSesStatusRejReason;
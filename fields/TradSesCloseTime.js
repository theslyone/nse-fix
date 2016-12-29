var invert = require('invert-obj');

function TradSesCloseTime (tradSesCloseTime) {
  this.message = tradSesCloseTime;
}

TradSesCloseTime.prototype.value = function () {
  return this.message;
};

TradSesCloseTime.Tag = '344';

TradSesCloseTime.Type = 'UTCTIMESTAMP';

module.exports = TradSesCloseTime;
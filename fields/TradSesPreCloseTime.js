var invert = require('invert-obj');

function TradSesPreCloseTime (tradSesPreCloseTime) {
  this.message = tradSesPreCloseTime;
}

TradSesPreCloseTime.prototype.value = function () {
  return this.message;
};

TradSesPreCloseTime.Tag = '343';

TradSesPreCloseTime.Type = 'UTCTIMESTAMP';

module.exports = TradSesPreCloseTime;
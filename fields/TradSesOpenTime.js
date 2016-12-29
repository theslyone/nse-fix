var invert = require('invert-obj');

function TradSesOpenTime (tradSesOpenTime) {
  this.message = tradSesOpenTime;
}

TradSesOpenTime.prototype.value = function () {
  return this.message;
};

TradSesOpenTime.Tag = '342';

TradSesOpenTime.Type = 'UTCTIMESTAMP';

module.exports = TradSesOpenTime;
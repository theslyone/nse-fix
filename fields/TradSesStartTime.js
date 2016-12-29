var invert = require('invert-obj');

function TradSesStartTime (tradSesStartTime) {
  this.message = tradSesStartTime;
}

TradSesStartTime.prototype.value = function () {
  return this.message;
};

TradSesStartTime.Tag = '341';

TradSesStartTime.Type = 'UTCTIMESTAMP';

module.exports = TradSesStartTime;
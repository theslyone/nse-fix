var invert = require('invert-obj');

function TradSesEndTime (tradSesEndTime) {
  this.message = tradSesEndTime;
}

TradSesEndTime.prototype.value = function () {
  return this.message;
};

TradSesEndTime.Tag = '345';

TradSesEndTime.Type = 'UTCTIMESTAMP';

module.exports = TradSesEndTime;
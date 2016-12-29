var invert = require('invert-obj');

function TradSesMode (tradSesMode) {
  this.message = tradSesMode;
}

TradSesMode.prototype.value = function () {
  return this.message;
};


TradSesMode.Keys = {
  'TESTING': '1',
  'SIMULATED': '2',
  'PRODUCTION': '3',
};

TradSesMode.Tag = '339';

TradSesMode.Type = 'INT';

TradSesMode.Values = invert(TradSesMode.Keys);

module.exports = TradSesMode;
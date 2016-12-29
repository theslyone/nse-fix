var invert = require('invert-obj');

function TradSesMethod (tradSesMethod) {
  this.message = tradSesMethod;
}

TradSesMethod.prototype.value = function () {
  return this.message;
};


TradSesMethod.Keys = {
  'ELECTRONIC': '1',
  'OPEN_OUTCRY': '2',
  'TWO_PARTY': '3',
};

TradSesMethod.Tag = '338';

TradSesMethod.Type = 'INT';

TradSesMethod.Values = invert(TradSesMethod.Keys);

module.exports = TradSesMethod;
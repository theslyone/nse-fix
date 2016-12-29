var invert = require('invert-obj');

function TradSesStatus (tradSesStatus) {
  this.message = tradSesStatus;
}

TradSesStatus.prototype.value = function () {
  return this.message;
};


TradSesStatus.Keys = {
  'UNKNOWN': '0',
  'HALTED': '1',
  'OPEN': '2',
  'CLOSED': '3',
  'PRE_OPEN': '4',
  'PRE_CLOSE': '5',
  'REQUEST_REJECTED': '6',
};

TradSesStatus.Tag = '340';

TradSesStatus.Type = 'INT';

TradSesStatus.Values = invert(TradSesStatus.Keys);

module.exports = TradSesStatus;
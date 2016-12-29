var invert = require('invert-obj');

function TradSesEvent (tradSesEvent) {
  this.message = tradSesEvent;
}

TradSesEvent.prototype.value = function () {
  return this.message;
};


TradSesEvent.Keys = {
  'TRADING_RESUMES': '0',
  'CHANGE_OF_TRADING_SESSION': '1',
  'CHANGE_OF_TRADING_SUBSESSION': '2',
  'CHANGE_OF_TRADING_STATUS': '3',
};

TradSesEvent.Tag = '1368';

TradSesEvent.Type = 'INT';

TradSesEvent.Values = invert(TradSesEvent.Keys);

module.exports = TradSesEvent;
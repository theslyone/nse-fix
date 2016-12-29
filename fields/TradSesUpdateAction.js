var invert = require('invert-obj');

function TradSesUpdateAction (tradSesUpdateAction) {
  this.message = tradSesUpdateAction;
}

TradSesUpdateAction.prototype.value = function () {
  return this.message;
};

TradSesUpdateAction.Tag = '1327';

TradSesUpdateAction.Type = 'CHAR';

module.exports = TradSesUpdateAction;
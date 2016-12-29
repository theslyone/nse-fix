var invert = require('invert-obj');

function TriggerSymbol (triggerSymbol) {
  this.message = triggerSymbol;
}

TriggerSymbol.prototype.value = function () {
  return this.message;
};

TriggerSymbol.Tag = '1103';

TriggerSymbol.Type = 'STRING';

module.exports = TriggerSymbol;
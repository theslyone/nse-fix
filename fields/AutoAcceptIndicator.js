var invert = require('invert-obj');

function AutoAcceptIndicator (autoAcceptIndicator) {
  this.message = autoAcceptIndicator;
}

AutoAcceptIndicator.prototype.value = function () {
  return this.message;
};

AutoAcceptIndicator.Tag = '754';

AutoAcceptIndicator.Type = 'BOOLEAN';

module.exports = AutoAcceptIndicator;
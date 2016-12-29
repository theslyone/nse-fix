var invert = require('invert-obj');

function DefaultVerIndicator (defaultVerIndicator) {
  this.message = defaultVerIndicator;
}

DefaultVerIndicator.prototype.value = function () {
  return this.message;
};

DefaultVerIndicator.Tag = '1410';

DefaultVerIndicator.Type = 'BOOLEAN';

module.exports = DefaultVerIndicator;
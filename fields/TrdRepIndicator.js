var invert = require('invert-obj');

function TrdRepIndicator (trdRepIndicator) {
  this.message = trdRepIndicator;
}

TrdRepIndicator.prototype.value = function () {
  return this.message;
};

TrdRepIndicator.Tag = '1389';

TrdRepIndicator.Type = 'BOOLEAN';

module.exports = TrdRepIndicator;
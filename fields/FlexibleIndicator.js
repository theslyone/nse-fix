var invert = require('invert-obj');

function FlexibleIndicator (flexibleIndicator) {
  this.message = flexibleIndicator;
}

FlexibleIndicator.prototype.value = function () {
  return this.message;
};

FlexibleIndicator.Tag = '1244';

FlexibleIndicator.Type = 'BOOLEAN';

module.exports = FlexibleIndicator;
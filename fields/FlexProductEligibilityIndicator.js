var invert = require('invert-obj');

function FlexProductEligibilityIndicator (flexProductEligibilityIndicator) {
  this.message = flexProductEligibilityIndicator;
}

FlexProductEligibilityIndicator.prototype.value = function () {
  return this.message;
};

FlexProductEligibilityIndicator.Tag = '1242';

FlexProductEligibilityIndicator.Type = 'BOOLEAN';

module.exports = FlexProductEligibilityIndicator;
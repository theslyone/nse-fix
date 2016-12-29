var invert = require('invert-obj');

function DerivFlexProductEligibilityIndicator (derivFlexProductEligibilityIndicator) {
  this.message = derivFlexProductEligibilityIndicator;
}

DerivFlexProductEligibilityIndicator.prototype.value = function () {
  return this.message;
};

DerivFlexProductEligibilityIndicator.Tag = '1243';

DerivFlexProductEligibilityIndicator.Type = 'BOOLEAN';

module.exports = DerivFlexProductEligibilityIndicator;
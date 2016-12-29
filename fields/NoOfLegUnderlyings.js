var invert = require('invert-obj');

function NoOfLegUnderlyings (noOfLegUnderlyings) {
  this.message = noOfLegUnderlyings;
}

NoOfLegUnderlyings.prototype.value = function () {
  return this.message;
};

NoOfLegUnderlyings.Tag = '1342';

NoOfLegUnderlyings.Type = 'NUMINGROUP';

module.exports = NoOfLegUnderlyings;
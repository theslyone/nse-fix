var invert = require('invert-obj');

function NoOfSecSizes (noOfSecSizes) {
  this.message = noOfSecSizes;
}

NoOfSecSizes.prototype.value = function () {
  return this.message;
};

NoOfSecSizes.Tag = '1177';

NoOfSecSizes.Type = 'NUMINGROUP';

module.exports = NoOfSecSizes;
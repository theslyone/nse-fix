var invert = require('invert-obj');

function AllocCustomerCapacity (allocCustomerCapacity) {
  this.message = allocCustomerCapacity;
}

AllocCustomerCapacity.prototype.value = function () {
  return this.message;
};

AllocCustomerCapacity.Tag = '993';

AllocCustomerCapacity.Type = 'STRING';

module.exports = AllocCustomerCapacity;
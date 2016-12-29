var invert = require('invert-obj');

function OrderInputDevice (orderInputDevice) {
  this.message = orderInputDevice;
}

OrderInputDevice.prototype.value = function () {
  return this.message;
};

OrderInputDevice.Tag = '821';

OrderInputDevice.Type = 'STRING';

module.exports = OrderInputDevice;
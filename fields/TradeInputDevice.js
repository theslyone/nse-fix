var invert = require('invert-obj');

function TradeInputDevice (tradeInputDevice) {
  this.message = tradeInputDevice;
}

TradeInputDevice.prototype.value = function () {
  return this.message;
};

TradeInputDevice.Tag = '579';

TradeInputDevice.Type = 'STRING';

module.exports = TradeInputDevice;
var invert = require('invert-obj');

function NoTrades (noTrades) {
  this.message = noTrades;
}

NoTrades.prototype.value = function () {
  return this.message;
};

NoTrades.Tag = '897';

NoTrades.Type = 'NUMINGROUP';

module.exports = NoTrades;
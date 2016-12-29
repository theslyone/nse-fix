var invert = require('invert-obj');

function NoTradingSessions (noTradingSessions) {
  this.message = noTradingSessions;
}

NoTradingSessions.prototype.value = function () {
  return this.message;
};

NoTradingSessions.Tag = '386';

NoTradingSessions.Type = 'NUMINGROUP';

module.exports = NoTradingSessions;
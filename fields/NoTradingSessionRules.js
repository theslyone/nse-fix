var invert = require('invert-obj');

function NoTradingSessionRules (noTradingSessionRules) {
  this.message = noTradingSessionRules;
}

NoTradingSessionRules.prototype.value = function () {
  return this.message;
};

NoTradingSessionRules.Tag = '1309';

NoTradingSessionRules.Type = 'NUMINGROUP';

module.exports = NoTradingSessionRules;
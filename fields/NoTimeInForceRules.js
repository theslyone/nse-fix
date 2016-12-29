var invert = require('invert-obj');

function NoTimeInForceRules (noTimeInForceRules) {
  this.message = noTimeInForceRules;
}

NoTimeInForceRules.prototype.value = function () {
  return this.message;
};

NoTimeInForceRules.Tag = '1239';

NoTimeInForceRules.Type = 'NUMINGROUP';

module.exports = NoTimeInForceRules;
var invert = require('invert-obj');

function NoMaturityRules (noMaturityRules) {
  this.message = noMaturityRules;
}

NoMaturityRules.prototype.value = function () {
  return this.message;
};

NoMaturityRules.Tag = '1236';

NoMaturityRules.Type = 'NUMINGROUP';

module.exports = NoMaturityRules;
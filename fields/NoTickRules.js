var invert = require('invert-obj');

function NoTickRules (noTickRules) {
  this.message = noTickRules;
}

NoTickRules.prototype.value = function () {
  return this.message;
};

NoTickRules.Tag = '1205';

NoTickRules.Type = 'NUMINGROUP';

module.exports = NoTickRules;
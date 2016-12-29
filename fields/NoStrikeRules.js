var invert = require('invert-obj');

function NoStrikeRules (noStrikeRules) {
  this.message = noStrikeRules;
}

NoStrikeRules.prototype.value = function () {
  return this.message;
};

NoStrikeRules.Tag = '1201';

NoStrikeRules.Type = 'NUMINGROUP';

module.exports = NoStrikeRules;
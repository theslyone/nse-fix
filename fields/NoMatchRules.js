var invert = require('invert-obj');

function NoMatchRules (noMatchRules) {
  this.message = noMatchRules;
}

NoMatchRules.prototype.value = function () {
  return this.message;
};

NoMatchRules.Tag = '1235';

NoMatchRules.Type = 'NUMINGROUP';

module.exports = NoMatchRules;
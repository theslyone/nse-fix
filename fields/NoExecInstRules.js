var invert = require('invert-obj');

function NoExecInstRules (noExecInstRules) {
  this.message = noExecInstRules;
}

NoExecInstRules.prototype.value = function () {
  return this.message;
};

NoExecInstRules.Tag = '1232';

NoExecInstRules.Type = 'NUMINGROUP';

module.exports = NoExecInstRules;
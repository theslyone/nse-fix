var invert = require('invert-obj');

function RepurchaseTerm (repurchaseTerm) {
  this.message = repurchaseTerm;
}

RepurchaseTerm.prototype.value = function () {
  return this.message;
};

RepurchaseTerm.Tag = '226';

RepurchaseTerm.Type = 'INT';

module.exports = RepurchaseTerm;
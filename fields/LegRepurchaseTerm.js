var invert = require('invert-obj');

function LegRepurchaseTerm (legRepurchaseTerm) {
  this.message = legRepurchaseTerm;
}

LegRepurchaseTerm.prototype.value = function () {
  return this.message;
};

LegRepurchaseTerm.Tag = '251';

LegRepurchaseTerm.Type = 'INT';

module.exports = LegRepurchaseTerm;
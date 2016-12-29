var invert = require('invert-obj');

function NoOrdTypeRules (noOrdTypeRules) {
  this.message = noOrdTypeRules;
}

NoOrdTypeRules.prototype.value = function () {
  return this.message;
};

NoOrdTypeRules.Tag = '1237';

NoOrdTypeRules.Type = 'NUMINGROUP';

module.exports = NoOrdTypeRules;
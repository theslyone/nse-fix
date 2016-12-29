var invert = require('invert-obj');

function NoLotTypeRules (noLotTypeRules) {
  this.message = noLotTypeRules;
}

NoLotTypeRules.prototype.value = function () {
  return this.message;
};

NoLotTypeRules.Tag = '1234';

NoLotTypeRules.Type = 'NUMINGROUP';

module.exports = NoLotTypeRules;
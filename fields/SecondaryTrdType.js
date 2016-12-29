var invert = require('invert-obj');

function SecondaryTrdType (secondaryTrdType) {
  this.message = secondaryTrdType;
}

SecondaryTrdType.prototype.value = function () {
  return this.message;
};

SecondaryTrdType.Tag = '855';

SecondaryTrdType.Type = 'INT';

module.exports = SecondaryTrdType;
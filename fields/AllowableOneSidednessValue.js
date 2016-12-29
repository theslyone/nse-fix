var invert = require('invert-obj');

function AllowableOneSidednessValue (allowableOneSidednessValue) {
  this.message = allowableOneSidednessValue;
}

AllowableOneSidednessValue.prototype.value = function () {
  return this.message;
};

AllowableOneSidednessValue.Tag = '766';

AllowableOneSidednessValue.Type = 'AMT';

module.exports = AllowableOneSidednessValue;
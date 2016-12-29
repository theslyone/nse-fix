var invert = require('invert-obj');

function AllowableOneSidednessPct (allowableOneSidednessPct) {
  this.message = allowableOneSidednessPct;
}

AllowableOneSidednessPct.prototype.value = function () {
  return this.message;
};

AllowableOneSidednessPct.Tag = '765';

AllowableOneSidednessPct.Type = 'PERCENTAGE';

module.exports = AllowableOneSidednessPct;
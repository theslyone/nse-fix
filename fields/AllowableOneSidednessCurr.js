var invert = require('invert-obj');

function AllowableOneSidednessCurr (allowableOneSidednessCurr) {
  this.message = allowableOneSidednessCurr;
}

AllowableOneSidednessCurr.prototype.value = function () {
  return this.message;
};

AllowableOneSidednessCurr.Tag = '767';

AllowableOneSidednessCurr.Type = 'CURRENCY';

module.exports = AllowableOneSidednessCurr;
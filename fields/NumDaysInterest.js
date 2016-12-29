var invert = require('invert-obj');

function NumDaysInterest (numDaysInterest) {
  this.message = numDaysInterest;
}

NumDaysInterest.prototype.value = function () {
  return this.message;
};

NumDaysInterest.Tag = '157';

NumDaysInterest.Type = 'INT';

module.exports = NumDaysInterest;
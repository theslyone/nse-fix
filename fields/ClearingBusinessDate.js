var invert = require('invert-obj');

function ClearingBusinessDate (clearingBusinessDate) {
  this.message = clearingBusinessDate;
}

ClearingBusinessDate.prototype.value = function () {
  return this.message;
};

ClearingBusinessDate.Tag = '715';

ClearingBusinessDate.Type = 'LOCALMKTDATE';

module.exports = ClearingBusinessDate;
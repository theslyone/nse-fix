var invert = require('invert-obj');

function StartDate (startDate) {
  this.message = startDate;
}

StartDate.prototype.value = function () {
  return this.message;
};

StartDate.Tag = '916';

StartDate.Type = 'LOCALMKTDATE';

module.exports = StartDate;
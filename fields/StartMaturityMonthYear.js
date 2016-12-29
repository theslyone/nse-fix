var invert = require('invert-obj');

function StartMaturityMonthYear (startMaturityMonthYear) {
  this.message = startMaturityMonthYear;
}

StartMaturityMonthYear.prototype.value = function () {
  return this.message;
};

StartMaturityMonthYear.Tag = '1241';

StartMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = StartMaturityMonthYear;
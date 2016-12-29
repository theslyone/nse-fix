var invert = require('invert-obj');

function EndMaturityMonthYear (endMaturityMonthYear) {
  this.message = endMaturityMonthYear;
}

EndMaturityMonthYear.prototype.value = function () {
  return this.message;
};

EndMaturityMonthYear.Tag = '1226';

EndMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = EndMaturityMonthYear;
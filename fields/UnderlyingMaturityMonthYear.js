var invert = require('invert-obj');

function UnderlyingMaturityMonthYear (underlyingMaturityMonthYear) {
  this.message = underlyingMaturityMonthYear;
}

UnderlyingMaturityMonthYear.prototype.value = function () {
  return this.message;
};

UnderlyingMaturityMonthYear.Tag = '313';

UnderlyingMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = UnderlyingMaturityMonthYear;
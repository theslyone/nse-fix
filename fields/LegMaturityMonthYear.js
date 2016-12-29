var invert = require('invert-obj');

function LegMaturityMonthYear (legMaturityMonthYear) {
  this.message = legMaturityMonthYear;
}

LegMaturityMonthYear.prototype.value = function () {
  return this.message;
};

LegMaturityMonthYear.Tag = '610';

LegMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = LegMaturityMonthYear;
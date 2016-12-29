var invert = require('invert-obj');

function UnderlyingLegMaturityMonthYear (underlyingLegMaturityMonthYear) {
  this.message = underlyingLegMaturityMonthYear;
}

UnderlyingLegMaturityMonthYear.prototype.value = function () {
  return this.message;
};

UnderlyingLegMaturityMonthYear.Tag = '1339';

UnderlyingLegMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = UnderlyingLegMaturityMonthYear;
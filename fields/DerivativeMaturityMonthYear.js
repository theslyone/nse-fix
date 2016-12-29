var invert = require('invert-obj');

function DerivativeMaturityMonthYear (derivativeMaturityMonthYear) {
  this.message = derivativeMaturityMonthYear;
}

DerivativeMaturityMonthYear.prototype.value = function () {
  return this.message;
};

DerivativeMaturityMonthYear.Tag = '1251';

DerivativeMaturityMonthYear.Type = 'MONTHYEAR';

module.exports = DerivativeMaturityMonthYear;
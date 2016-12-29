var invert = require('invert-obj');

function MaturityMonthYear (maturityMonthYear) {
  this.message = maturityMonthYear;
}

MaturityMonthYear.prototype.value = function () {
  return this.message;
};

MaturityMonthYear.Tag = '200';

MaturityMonthYear.Type = 'MONTHYEAR';

module.exports = MaturityMonthYear;
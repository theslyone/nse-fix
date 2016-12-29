var invert = require('invert-obj');

function MaturityMonthYearIncrement (maturityMonthYearIncrement) {
  this.message = maturityMonthYearIncrement;
}

MaturityMonthYearIncrement.prototype.value = function () {
  return this.message;
};

MaturityMonthYearIncrement.Tag = '1229';

MaturityMonthYearIncrement.Type = 'INT';

module.exports = MaturityMonthYearIncrement;
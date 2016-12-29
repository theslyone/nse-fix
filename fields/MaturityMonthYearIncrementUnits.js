var invert = require('invert-obj');

function MaturityMonthYearIncrementUnits (maturityMonthYearIncrementUnits) {
  this.message = maturityMonthYearIncrementUnits;
}

MaturityMonthYearIncrementUnits.prototype.value = function () {
  return this.message;
};


MaturityMonthYearIncrementUnits.Keys = {
  'MONTHS': '0',
  'DAYS': '1',
  'WEEKS': '2',
  'YEARS': '3',
};

MaturityMonthYearIncrementUnits.Tag = '1302';

MaturityMonthYearIncrementUnits.Type = 'INT';

MaturityMonthYearIncrementUnits.Values = invert(MaturityMonthYearIncrementUnits.Keys);

module.exports = MaturityMonthYearIncrementUnits;
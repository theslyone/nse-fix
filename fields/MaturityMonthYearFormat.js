var invert = require('invert-obj');

function MaturityMonthYearFormat (maturityMonthYearFormat) {
  this.message = maturityMonthYearFormat;
}

MaturityMonthYearFormat.prototype.value = function () {
  return this.message;
};


MaturityMonthYearFormat.Keys = {
  'YEARMONTH_ONLY': '0',
  'YEARMONTHDAY': '1',
  'YEARMONTHWEEK': '2',
};

MaturityMonthYearFormat.Tag = '1303';

MaturityMonthYearFormat.Type = 'INT';

MaturityMonthYearFormat.Values = invert(MaturityMonthYearFormat.Keys);

module.exports = MaturityMonthYearFormat;
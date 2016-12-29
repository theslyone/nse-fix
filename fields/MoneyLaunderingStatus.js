var invert = require('invert-obj');

function MoneyLaunderingStatus (moneyLaunderingStatus) {
  this.message = moneyLaunderingStatus;
}

MoneyLaunderingStatus.prototype.value = function () {
  return this.message;
};


MoneyLaunderingStatus.Keys = {
  'EXEMPT_1': '1',
  'EXEMPT_2': '2',
  'EXEMPT_3': '3',
  'NOT_CHECKED': 'N',
  'PASSED': 'Y',
};

MoneyLaunderingStatus.Tag = '481';

MoneyLaunderingStatus.Type = 'CHAR';

MoneyLaunderingStatus.Values = invert(MoneyLaunderingStatus.Keys);

module.exports = MoneyLaunderingStatus;
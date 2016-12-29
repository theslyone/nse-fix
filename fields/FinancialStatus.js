var invert = require('invert-obj');

function FinancialStatus (financialStatus) {
  this.message = financialStatus;
}

FinancialStatus.prototype.value = function () {
  return this.message;
};


FinancialStatus.Keys = {
  'BANKRUPT': '1',
  'PENDING_DELISTING': '2',
  'RESTRICTED': '3',
};

FinancialStatus.Tag = '291';

FinancialStatus.Type = 'MULTIPLECHARVALUE';

FinancialStatus.Values = invert(FinancialStatus.Keys);

module.exports = FinancialStatus;
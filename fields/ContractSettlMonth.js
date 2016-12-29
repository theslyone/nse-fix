var invert = require('invert-obj');

function ContractSettlMonth (contractSettlMonth) {
  this.message = contractSettlMonth;
}

ContractSettlMonth.prototype.value = function () {
  return this.message;
};

ContractSettlMonth.Tag = '667';

ContractSettlMonth.Type = 'MONTHYEAR';

module.exports = ContractSettlMonth;
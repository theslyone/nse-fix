var invert = require('invert-obj');

function DerivativeContractSettlMonth (derivativeContractSettlMonth) {
  this.message = derivativeContractSettlMonth;
}

DerivativeContractSettlMonth.prototype.value = function () {
  return this.message;
};

DerivativeContractSettlMonth.Tag = '1285';

DerivativeContractSettlMonth.Type = 'MONTHYEAR';

module.exports = DerivativeContractSettlMonth;
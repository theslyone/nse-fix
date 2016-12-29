var invert = require('invert-obj');

function LegContractSettlMonth (legContractSettlMonth) {
  this.message = legContractSettlMonth;
}

LegContractSettlMonth.prototype.value = function () {
  return this.message;
};

LegContractSettlMonth.Tag = '955';

LegContractSettlMonth.Type = 'MONTHYEAR';

module.exports = LegContractSettlMonth;
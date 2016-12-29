var invert = require('invert-obj');

function SymbolSfx (symbolSfx) {
  this.message = symbolSfx;
}

SymbolSfx.prototype.value = function () {
  return this.message;
};


SymbolSfx.Keys = {
  'EUCP_WITH_LUMP_SUM_INTEREST_RATHER_THAN_DISCOUNT_PRICE': 'CD',
  'WHEN_ISSUED_FOR_A_SECURITY_TO_BE_REISSUED_UNDER_AN_OLD_CUSIP_OR_ISIN': 'WI',
};

SymbolSfx.Tag = '65';

SymbolSfx.Type = 'STRING';

SymbolSfx.Values = invert(SymbolSfx.Keys);

module.exports = SymbolSfx;
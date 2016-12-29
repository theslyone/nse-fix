var invert = require('invert-obj');

function PosAmtType (posAmtType) {
  this.message = posAmtType;
}

PosAmtType.prototype.value = function () {
  return this.message;
};


PosAmtType.Keys = {
  'CASH_AMOUNT': 'CASH',
  'CASH_RESIDUAL_AMOUNT': 'CRES',
  'FINAL_MARK_TO_MARKET_AMOUNT': 'FMTM',
  'INCREMENTAL_MARK_TO_MARKET_AMOUNT': 'IMTM',
  'PREMIUM_AMOUNT': 'PREM',
  'START_OF_DAY_MARK_TO_MARKET_AMOUNT': 'SMTM',
  'TRADE_VARIATION_AMOUNT': 'TVAR',
  'VALUE_ADJUSTED_AMOUNT': 'VADJ',
  'SETTLEMENT_VALUE': 'SETL',
};

PosAmtType.Tag = '707';

PosAmtType.Type = 'STRING';

PosAmtType.Values = invert(PosAmtType.Keys);

module.exports = PosAmtType;
var invert = require('invert-obj');

function CorporateAction (corporateAction) {
  this.message = corporateAction;
}

CorporateAction.prototype.value = function () {
  return this.message;
};


CorporateAction.Keys = {
  'EX_DIVIDEND': 'A',
  'EX_DISTRIBUTION': 'B',
  'EX_RIGHTS': 'C',
  'NEW': 'D',
  'EX_INTEREST': 'E',
  'CASH_DIVIDEND': 'F',
  'STOCK_DIVIDEND': 'G',
  'NON_INTEGER_STOCK_SPLIT': 'H',
  'REVERSE_STOCK_SPLIT': 'I',
  'STANDARD_INTEGER_STOCK_SPLIT': 'J',
  'POSITION_CONSOLIDATION': 'K',
  'LIQUIDATION_REORGANIZATION': 'L',
  'MERGER_REORGANIZATION': 'M',
  'RIGHTS_OFFERING': 'N',
  'SHAREHOLDER_MEETING': 'O',
  'SPINOFF': 'P',
  'TENDER_OFFER': 'Q',
  'WARRANT': 'R',
  'SPECIAL_ACTION': 'S',
  'SYMBOL_CONVERSION': 'T',
  'CUSIP': 'U',
  'LEAP_ROLLOVER': 'V',
  'SUCCESSION_EVENT': 'W',
};

CorporateAction.Tag = '292';

CorporateAction.Type = 'MULTIPLECHARVALUE';

CorporateAction.Values = invert(CorporateAction.Keys);

module.exports = CorporateAction;
var invert = require('invert-obj');

function BasisPxType (basisPxType) {
  this.message = basisPxType;
}

BasisPxType.prototype.value = function () {
  return this.message;
};


BasisPxType.Keys = {
  'CLOSING_PRICE_AT_MORNINGN_SESSION': '2',
  'CLOSING_PRICE': '3',
  'CURRENT_PRICE': '4',
  'SQ': '5',
  'VWAP_THROUGH_A_DAY': '6',
  'VWAP_THROUGH_A_MORNING_SESSION': '7',
  'VWAP_THROUGH_AN_AFTERNOON_SESSION': '8',
  'VWAP_THROUGH_A_DAY_EXCEPT_YORI': '9',
  'VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI': 'A',
  'VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI': 'B',
  'STRIKE': 'C',
  'OPEN': 'D',
  'OTHERS': 'Z',
};

BasisPxType.Tag = '419';

BasisPxType.Type = 'CHAR';

BasisPxType.Values = invert(BasisPxType.Keys);

module.exports = BasisPxType;
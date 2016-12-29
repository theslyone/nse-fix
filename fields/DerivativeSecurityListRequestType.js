var invert = require('invert-obj');

function DerivativeSecurityListRequestType (derivativeSecurityListRequestType) {
  this.message = derivativeSecurityListRequestType;
}

DerivativeSecurityListRequestType.prototype.value = function () {
  return this.message;
};


DerivativeSecurityListRequestType.Keys = {
  'SYMBOL': '0',
  'SECURITYTYPE_AND_OR_CFICODE': '1',
  'PRODUCT': '2',
  'TRADINGSESSIONID': '3',
  'ALL_SECURITIES': '4',
  'UNDELYINGSYMBOL': '5',
  'UNDERLYING_SECURITYTYPE_AND_OR_CFICODE': '6',
  'UNDERLYING_PRODUCT': '7',
  'MARKETID_OR_MARKETID_PLUS_MARKETSEGMENTID': '8',
};

DerivativeSecurityListRequestType.Tag = '1307';

DerivativeSecurityListRequestType.Type = 'INT';

DerivativeSecurityListRequestType.Values = invert(DerivativeSecurityListRequestType.Keys);

module.exports = DerivativeSecurityListRequestType;
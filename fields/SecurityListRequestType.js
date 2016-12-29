var invert = require('invert-obj');

function SecurityListRequestType (securityListRequestType) {
  this.message = securityListRequestType;
}

SecurityListRequestType.prototype.value = function () {
  return this.message;
};


SecurityListRequestType.Keys = {
  'SYMBOL': '0',
  'SECURITYTYPE_AND_OR_CFICODE': '1',
  'PRODUCT': '2',
  'TRADINGSESSIONID': '3',
  'ALL_SECURITIES': '4',
  'MARKETID_OR_MARKETID_PLUS_MARKETSEGMENTID': '5',
};

SecurityListRequestType.Tag = '559';

SecurityListRequestType.Type = 'INT';

SecurityListRequestType.Values = invert(SecurityListRequestType.Keys);

module.exports = SecurityListRequestType;
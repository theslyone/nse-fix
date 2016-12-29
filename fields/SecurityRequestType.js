var invert = require('invert-obj');

function SecurityRequestType (securityRequestType) {
  this.message = securityRequestType;
}

SecurityRequestType.prototype.value = function () {
  return this.message;
};


SecurityRequestType.Keys = {
  'REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS': '0',
  'REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED': '1',
  'REQUEST_LIST_SECURITY_TYPES': '2',
  'REQUEST_LIST_SECURITIES': '3',
  'SYMBOL': '4',
  'SECURITYTYPE_AND_OR_CFICODE': '5',
  'PRODUCT': '6',
  'TRADINGSESSIONID': '7',
  'ALL_SECURITIES': '8',
  'MARKETID_OR_MARKETID_PLUS_MARKETSEGMENTID': '9',
};

SecurityRequestType.Tag = '321';

SecurityRequestType.Type = 'INT';

SecurityRequestType.Values = invert(SecurityRequestType.Keys);

module.exports = SecurityRequestType;
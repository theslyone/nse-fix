var invert = require('invert-obj');

function SecurityIDSource (securityIdsource) {
  this.message = securityIdsource;
}

SecurityIDSource.prototype.value = function () {
  return this.message;
};


SecurityIDSource.Keys = {
  'CUSIP': '1',
  'SEDOL': '2',
  'QUIK': '3',
  'ISIN_NUMBER': '4',
  'RIC_CODE': '5',
  'ISO_CURRENCY_CODE': '6',
  'ISO_COUNTRY_CODE': '7',
  'EXCHANGE_SYMBOL': '8',
  'CONSOLIDATED_TAPE_ASSOCIATION': '9',
  'BLOOMBERG_SYMBOL': 'A',
  'WERTPAPIER': 'B',
  'DUTCH': 'C',
  'VALOREN': 'D',
  'SICOVAM': 'E',
  'BELGIAN': 'F',
  'COMMON': 'G',
  'CLEARING_HOUSE': 'H',
  'ISDA_FPML_PRODUCT_SPECIFICATION': 'I',
  'OPTION_PRICE_REPORTING_AUTHORITY': 'J',
  'LETTER_OF_CREDIT': 'L',
  'ISDA_FPML_PRODUCT_URL': 'K',
  'MARKETPLACE_ASSIGNED_IDENTIFIER': 'M',
  'MARKETPLACE_ASSIGNED_IDENTIFIER': '99',
};

SecurityIDSource.Tag = '22';

SecurityIDSource.Type = 'STRING';

SecurityIDSource.Values = invert(SecurityIDSource.Keys);

module.exports = SecurityIDSource;
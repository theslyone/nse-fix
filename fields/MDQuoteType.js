var invert = require('invert-obj');

function MDQuoteType (mdquoteType) {
  this.message = mdquoteType;
}

MDQuoteType.prototype.value = function () {
  return this.message;
};


MDQuoteType.Keys = {
  'INDICATIVE': '0',
  'TRADEABLE': '1',
  'RESTRICTED_TRADEABLE': '2',
  'COUNTER': '3',
  'INDICATIVE_AND_TRADEABLE': '4',
};

MDQuoteType.Tag = '1070';

MDQuoteType.Type = 'INT';

MDQuoteType.Values = invert(MDQuoteType.Keys);

module.exports = MDQuoteType;
var invert = require('invert-obj');

function CollInquiryQualifier (collInquiryQualifier) {
  this.message = collInquiryQualifier;
}

CollInquiryQualifier.prototype.value = function () {
  return this.message;
};


CollInquiryQualifier.Keys = {
  'TRADE_DATE': '0',
  'GC_INSTRUMENT': '1',
  'COLLATERAL_INSTRUMENT': '2',
  'SUBSTITUTION_ELIGIBLE': '3',
  'NOT_ASSIGNED': '4',
  'PARTIALLY_ASSIGNED': '5',
  'FULLY_ASSIGNED': '6',
  'OUTSTANDING_TRADES': '7',
};

CollInquiryQualifier.Tag = '896';

CollInquiryQualifier.Type = 'INT';

CollInquiryQualifier.Values = invert(CollInquiryQualifier.Keys);

module.exports = CollInquiryQualifier;
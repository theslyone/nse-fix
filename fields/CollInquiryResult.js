var invert = require('invert-obj');

function CollInquiryResult (collInquiryResult) {
  this.message = collInquiryResult;
}

CollInquiryResult.prototype.value = function () {
  return this.message;
};


CollInquiryResult.Keys = {
  'SUCCESSFUL': '0',
  'INVALID_OR_UNKNOWN_INSTRUMENT': '1',
  'INVALID_OR_UNKNOWN_COLLATERAL_TYPE': '2',
  'INVALID_PARTIES': '3',
  'INVALID_TRANSPORT_TYPE_REQUESTED': '4',
  'INVALID_DESTINATION_REQUESTED': '5',
  'NO_COLLATERAL_FOUND_FOR_THE_TRADE_SPECIFIED': '6',
  'NO_COLLATERAL_FOUND_FOR_THE_ORDER_SPECIFIED': '7',
  'COLLATERAL_INQUIRY_TYPE_NOT_SUPPORTED': '8',
  'UNAUTHORIZED_FOR_COLLATERAL_INQUIRY': '9',
  'OTHER': '99',
};

CollInquiryResult.Tag = '946';

CollInquiryResult.Type = 'INT';

CollInquiryResult.Values = invert(CollInquiryResult.Keys);

module.exports = CollInquiryResult;
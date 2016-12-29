var invert = require('invert-obj');

function CollInquiryStatus (collInquiryStatus) {
  this.message = collInquiryStatus;
}

CollInquiryStatus.prototype.value = function () {
  return this.message;
};


CollInquiryStatus.Keys = {
  'ACCEPTED': '0',
  'ACCEPTED_WITH_WARNINGS': '1',
  'COMPLETED': '2',
  'COMPLETED_WITH_WARNINGS': '3',
  'REJECTED': '4',
};

CollInquiryStatus.Tag = '945';

CollInquiryStatus.Type = 'INT';

CollInquiryStatus.Values = invert(CollInquiryStatus.Keys);

module.exports = CollInquiryStatus;
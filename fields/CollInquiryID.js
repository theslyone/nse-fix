var invert = require('invert-obj');

function CollInquiryID (collInquiryId) {
  this.message = collInquiryId;
}

CollInquiryID.prototype.value = function () {
  return this.message;
};

CollInquiryID.Tag = '909';

CollInquiryID.Type = 'STRING';

module.exports = CollInquiryID;
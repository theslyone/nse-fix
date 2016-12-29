var invert = require('invert-obj');

function NoCollInquiryQualifier (noCollInquiryQualifier) {
  this.message = noCollInquiryQualifier;
}

NoCollInquiryQualifier.prototype.value = function () {
  return this.message;
};

NoCollInquiryQualifier.Tag = '938';

NoCollInquiryQualifier.Type = 'NUMINGROUP';

module.exports = NoCollInquiryQualifier;
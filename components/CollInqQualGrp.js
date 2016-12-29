var NoCollInquiryQualifier = require('../fields/NoCollInquiryQualifier');
var CollInquiryQualifier = require('../fields/CollInquiryQualifier');

function CollInqQualGrp (collInqQualGrp) {
  this.message = collInqQualGrp;
}

/* group */

/* field */
CollInqQualGrp.prototype.collInquiryQualifier = function () {
  return new CollInquiryQualifier(this.message.tags[CollInquiryQualifier.Tag]);
};

/* end group */

CollInqQualGrp.Tag = '938';

module.exports = CollInqQualGrp;
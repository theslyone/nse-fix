var invert = require('invert-obj');

function AllocReportRefID (allocReportRefId) {
  this.message = allocReportRefId;
}

AllocReportRefID.prototype.value = function () {
  return this.message;
};

AllocReportRefID.Tag = '795';

AllocReportRefID.Type = 'STRING';

module.exports = AllocReportRefID;
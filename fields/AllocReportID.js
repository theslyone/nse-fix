var invert = require('invert-obj');

function AllocReportID (allocReportId) {
  this.message = allocReportId;
}

AllocReportID.prototype.value = function () {
  return this.message;
};

AllocReportID.Tag = '755';

AllocReportID.Type = 'STRING';

module.exports = AllocReportID;
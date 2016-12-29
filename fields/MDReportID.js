var invert = require('invert-obj');

function MDReportID (mdreportId) {
  this.message = mdreportId;
}

MDReportID.prototype.value = function () {
  return this.message;
};

MDReportID.Tag = '963';

MDReportID.Type = 'INT';

module.exports = MDReportID;
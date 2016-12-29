var invert = require('invert-obj');

function TotalNumPosReports (totalNumPosReports) {
  this.message = totalNumPosReports;
}

TotalNumPosReports.prototype.value = function () {
  return this.message;
};

TotalNumPosReports.Tag = '727';

TotalNumPosReports.Type = 'INT';

module.exports = TotalNumPosReports;
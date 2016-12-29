var invert = require('invert-obj');

function ContIntRptID (contIntRptId) {
  this.message = contIntRptId;
}

ContIntRptID.prototype.value = function () {
  return this.message;
};

ContIntRptID.Tag = '977';

ContIntRptID.Type = 'STRING';

module.exports = ContIntRptID;
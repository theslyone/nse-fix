var invert = require('invert-obj');

function CollRptID (collRptId) {
  this.message = collRptId;
}

CollRptID.prototype.value = function () {
  return this.message;
};

CollRptID.Tag = '908';

CollRptID.Type = 'STRING';

module.exports = CollRptID;
var invert = require('invert-obj');

function ReceivedDeptID (receivedDeptId) {
  this.message = receivedDeptId;
}

ReceivedDeptID.prototype.value = function () {
  return this.message;
};

ReceivedDeptID.Tag = '1030';

ReceivedDeptID.Type = 'STRING';

module.exports = ReceivedDeptID;
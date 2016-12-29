var invert = require('invert-obj');

function PosMaintRptID (posMaintRptId) {
  this.message = posMaintRptId;
}

PosMaintRptID.prototype.value = function () {
  return this.message;
};

PosMaintRptID.Tag = '721';

PosMaintRptID.Type = 'STRING';

module.exports = PosMaintRptID;
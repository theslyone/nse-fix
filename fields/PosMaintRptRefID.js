var invert = require('invert-obj');

function PosMaintRptRefID (posMaintRptRefId) {
  this.message = posMaintRptRefId;
}

PosMaintRptRefID.prototype.value = function () {
  return this.message;
};

PosMaintRptRefID.Tag = '714';

PosMaintRptRefID.Type = 'STRING';

module.exports = PosMaintRptRefID;
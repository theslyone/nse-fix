var invert = require('invert-obj');

function NoSettlInst (noSettlInst) {
  this.message = noSettlInst;
}

NoSettlInst.prototype.value = function () {
  return this.message;
};

NoSettlInst.Tag = '778';

NoSettlInst.Type = 'NUMINGROUP';

module.exports = NoSettlInst;
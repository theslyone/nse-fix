var invert = require('invert-obj');

function PegSecurityID (pegSecurityId) {
  this.message = pegSecurityId;
}

PegSecurityID.prototype.value = function () {
  return this.message;
};

PegSecurityID.Tag = '1097';

PegSecurityID.Type = 'STRING';

module.exports = PegSecurityID;
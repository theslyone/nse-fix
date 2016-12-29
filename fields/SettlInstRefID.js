var invert = require('invert-obj');

function SettlInstRefID (settlInstRefId) {
  this.message = settlInstRefId;
}

SettlInstRefID.prototype.value = function () {
  return this.message;
};

SettlInstRefID.Tag = '214';

SettlInstRefID.Type = 'STRING';

module.exports = SettlInstRefID;
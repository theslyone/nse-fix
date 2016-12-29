var invert = require('invert-obj');

function SettlInstID (settlInstId) {
  this.message = settlInstId;
}

SettlInstID.prototype.value = function () {
  return this.message;
};

SettlInstID.Tag = '162';

SettlInstID.Type = 'STRING';

module.exports = SettlInstID;
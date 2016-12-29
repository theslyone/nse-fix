var invert = require('invert-obj');

function SettlObligID (settlObligId) {
  this.message = settlObligId;
}

SettlObligID.prototype.value = function () {
  return this.message;
};

SettlObligID.Tag = '1161';

SettlObligID.Type = 'STRING';

module.exports = SettlObligID;
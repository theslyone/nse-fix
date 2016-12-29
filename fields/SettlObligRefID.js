var invert = require('invert-obj');

function SettlObligRefID (settlObligRefId) {
  this.message = settlObligRefId;
}

SettlObligRefID.prototype.value = function () {
  return this.message;
};

SettlObligRefID.Tag = '1163';

SettlObligRefID.Type = 'STRING';

module.exports = SettlObligRefID;
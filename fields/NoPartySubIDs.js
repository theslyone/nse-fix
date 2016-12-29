var invert = require('invert-obj');

function NoPartySubIDs (noPartySubIds) {
  this.message = noPartySubIds;
}

NoPartySubIDs.prototype.value = function () {
  return this.message;
};

NoPartySubIDs.Tag = '802';

NoPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoPartySubIDs;
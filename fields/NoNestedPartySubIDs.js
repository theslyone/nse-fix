var invert = require('invert-obj');

function NoNestedPartySubIDs (noNestedPartySubIds) {
  this.message = noNestedPartySubIds;
}

NoNestedPartySubIDs.prototype.value = function () {
  return this.message;
};

NoNestedPartySubIDs.Tag = '804';

NoNestedPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoNestedPartySubIDs;
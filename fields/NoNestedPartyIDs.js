var invert = require('invert-obj');

function NoNestedPartyIDs (noNestedPartyIds) {
  this.message = noNestedPartyIds;
}

NoNestedPartyIDs.prototype.value = function () {
  return this.message;
};

NoNestedPartyIDs.Tag = '539';

NoNestedPartyIDs.Type = 'NUMINGROUP';

module.exports = NoNestedPartyIDs;
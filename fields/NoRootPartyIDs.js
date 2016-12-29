var invert = require('invert-obj');

function NoRootPartyIDs (noRootPartyIds) {
  this.message = noRootPartyIds;
}

NoRootPartyIDs.prototype.value = function () {
  return this.message;
};

NoRootPartyIDs.Tag = '1116';

NoRootPartyIDs.Type = 'NUMINGROUP';

module.exports = NoRootPartyIDs;
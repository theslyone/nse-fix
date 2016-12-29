var invert = require('invert-obj');

function NoNested3PartyIDs (noNested3PartyIds) {
  this.message = noNested3PartyIds;
}

NoNested3PartyIDs.prototype.value = function () {
  return this.message;
};

NoNested3PartyIDs.Tag = '948';

NoNested3PartyIDs.Type = 'NUMINGROUP';

module.exports = NoNested3PartyIDs;
var invert = require('invert-obj');

function NoPartyIDs (noPartyIds) {
  this.message = noPartyIds;
}

NoPartyIDs.prototype.value = function () {
  return this.message;
};

NoPartyIDs.Tag = '453';

NoPartyIDs.Type = 'NUMINGROUP';

module.exports = NoPartyIDs;
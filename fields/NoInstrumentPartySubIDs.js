var invert = require('invert-obj');

function NoInstrumentPartySubIDs (noInstrumentPartySubIds) {
  this.message = noInstrumentPartySubIds;
}

NoInstrumentPartySubIDs.prototype.value = function () {
  return this.message;
};

NoInstrumentPartySubIDs.Tag = '1052';

NoInstrumentPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoInstrumentPartySubIDs;
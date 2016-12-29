var invert = require('invert-obj');

function NoUndlyInstrumentPartySubIDs (noUndlyInstrumentPartySubIds) {
  this.message = noUndlyInstrumentPartySubIds;
}

NoUndlyInstrumentPartySubIDs.prototype.value = function () {
  return this.message;
};

NoUndlyInstrumentPartySubIDs.Tag = '1062';

NoUndlyInstrumentPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoUndlyInstrumentPartySubIDs;
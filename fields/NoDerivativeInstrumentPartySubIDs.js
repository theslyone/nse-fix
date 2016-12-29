var invert = require('invert-obj');

function NoDerivativeInstrumentPartySubIDs (noDerivativeInstrumentPartySubIds) {
  this.message = noDerivativeInstrumentPartySubIds;
}

NoDerivativeInstrumentPartySubIDs.prototype.value = function () {
  return this.message;
};

NoDerivativeInstrumentPartySubIDs.Tag = '1296';

NoDerivativeInstrumentPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoDerivativeInstrumentPartySubIDs;
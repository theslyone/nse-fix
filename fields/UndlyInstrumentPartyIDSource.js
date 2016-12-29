var invert = require('invert-obj');

function UndlyInstrumentPartyIDSource (undlyInstrumentPartyIdsource) {
  this.message = undlyInstrumentPartyIdsource;
}

UndlyInstrumentPartyIDSource.prototype.value = function () {
  return this.message;
};

UndlyInstrumentPartyIDSource.Tag = '1060';

UndlyInstrumentPartyIDSource.Type = 'CHAR';

module.exports = UndlyInstrumentPartyIDSource;
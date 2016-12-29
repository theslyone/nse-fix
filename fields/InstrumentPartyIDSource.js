var invert = require('invert-obj');

function InstrumentPartyIDSource (instrumentPartyIdsource) {
  this.message = instrumentPartyIdsource;
}

InstrumentPartyIDSource.prototype.value = function () {
  return this.message;
};

InstrumentPartyIDSource.Tag = '1050';

InstrumentPartyIDSource.Type = 'CHAR';

module.exports = InstrumentPartyIDSource;
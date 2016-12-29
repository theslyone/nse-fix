var invert = require('invert-obj');

function InstrumentPartySubIDType (instrumentPartySubIdtype) {
  this.message = instrumentPartySubIdtype;
}

InstrumentPartySubIDType.prototype.value = function () {
  return this.message;
};

InstrumentPartySubIDType.Tag = '1054';

InstrumentPartySubIDType.Type = 'INT';

module.exports = InstrumentPartySubIDType;
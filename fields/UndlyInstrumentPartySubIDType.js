var invert = require('invert-obj');

function UndlyInstrumentPartySubIDType (undlyInstrumentPartySubIdtype) {
  this.message = undlyInstrumentPartySubIdtype;
}

UndlyInstrumentPartySubIDType.prototype.value = function () {
  return this.message;
};

UndlyInstrumentPartySubIDType.Tag = '1064';

UndlyInstrumentPartySubIDType.Type = 'INT';

module.exports = UndlyInstrumentPartySubIDType;
var invert = require('invert-obj');

function UndlyInstrumentPartyRole (undlyInstrumentPartyRole) {
  this.message = undlyInstrumentPartyRole;
}

UndlyInstrumentPartyRole.prototype.value = function () {
  return this.message;
};

UndlyInstrumentPartyRole.Tag = '1061';

UndlyInstrumentPartyRole.Type = 'INT';

module.exports = UndlyInstrumentPartyRole;
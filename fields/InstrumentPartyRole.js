var invert = require('invert-obj');

function InstrumentPartyRole (instrumentPartyRole) {
  this.message = instrumentPartyRole;
}

InstrumentPartyRole.prototype.value = function () {
  return this.message;
};

InstrumentPartyRole.Tag = '1051';

InstrumentPartyRole.Type = 'INT';

module.exports = InstrumentPartyRole;
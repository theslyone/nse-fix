var invert = require('invert-obj');

function RootPartySubIDType (rootPartySubIdtype) {
  this.message = rootPartySubIdtype;
}

RootPartySubIDType.prototype.value = function () {
  return this.message;
};

RootPartySubIDType.Tag = '1122';

RootPartySubIDType.Type = 'INT';

module.exports = RootPartySubIDType;
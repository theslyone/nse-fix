var invert = require('invert-obj');

function RootPartyRole (rootPartyRole) {
  this.message = rootPartyRole;
}

RootPartyRole.prototype.value = function () {
  return this.message;
};

RootPartyRole.Tag = '1119';

RootPartyRole.Type = 'INT';

module.exports = RootPartyRole;
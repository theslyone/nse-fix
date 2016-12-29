var invert = require('invert-obj');

function TrdRepPartyRole (trdRepPartyRole) {
  this.message = trdRepPartyRole;
}

TrdRepPartyRole.prototype.value = function () {
  return this.message;
};

TrdRepPartyRole.Tag = '1388';

TrdRepPartyRole.Type = 'INT';

module.exports = TrdRepPartyRole;
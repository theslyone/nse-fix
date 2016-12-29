var invert = require('invert-obj');

function PartySubID (partySubId) {
  this.message = partySubId;
}

PartySubID.prototype.value = function () {
  return this.message;
};

PartySubID.Tag = '523';

PartySubID.Type = 'STRING';

module.exports = PartySubID;
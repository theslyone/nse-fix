var invert = require('invert-obj');

function Nested3PartySubID (nested3PartySubId) {
  this.message = nested3PartySubId;
}

Nested3PartySubID.prototype.value = function () {
  return this.message;
};

Nested3PartySubID.Tag = '953';

Nested3PartySubID.Type = 'STRING';

module.exports = Nested3PartySubID;
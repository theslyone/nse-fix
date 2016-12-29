var invert = require('invert-obj');

function Nested2PartySubID (nested2PartySubId) {
  this.message = nested2PartySubId;
}

Nested2PartySubID.prototype.value = function () {
  return this.message;
};

Nested2PartySubID.Tag = '760';

Nested2PartySubID.Type = 'STRING';

module.exports = Nested2PartySubID;
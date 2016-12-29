var invert = require('invert-obj');

function Nested4PartySubID (nested4PartySubId) {
  this.message = nested4PartySubId;
}

Nested4PartySubID.prototype.value = function () {
  return this.message;
};

Nested4PartySubID.Tag = '1412';

Nested4PartySubID.Type = 'STRING';

module.exports = Nested4PartySubID;
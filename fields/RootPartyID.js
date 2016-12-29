var invert = require('invert-obj');

function RootPartyID (rootPartyId) {
  this.message = rootPartyId;
}

RootPartyID.prototype.value = function () {
  return this.message;
};

RootPartyID.Tag = '1117';

RootPartyID.Type = 'STRING';

module.exports = RootPartyID;
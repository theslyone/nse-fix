var invert = require('invert-obj');

function RootPartySubID (rootPartySubId) {
  this.message = rootPartySubId;
}

RootPartySubID.prototype.value = function () {
  return this.message;
};

RootPartySubID.Tag = '1121';

RootPartySubID.Type = 'STRING';

module.exports = RootPartySubID;
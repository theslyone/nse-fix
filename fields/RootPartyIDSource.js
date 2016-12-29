var invert = require('invert-obj');

function RootPartyIDSource (rootPartyIdsource) {
  this.message = rootPartyIdsource;
}

RootPartyIDSource.prototype.value = function () {
  return this.message;
};

RootPartyIDSource.Tag = '1118';

RootPartyIDSource.Type = 'CHAR';

module.exports = RootPartyIDSource;
var invert = require('invert-obj');

function Nested3PartyIDSource (nested3PartyIdsource) {
  this.message = nested3PartyIdsource;
}

Nested3PartyIDSource.prototype.value = function () {
  return this.message;
};

Nested3PartyIDSource.Tag = '950';

Nested3PartyIDSource.Type = 'CHAR';

module.exports = Nested3PartyIDSource;
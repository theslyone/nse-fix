var invert = require('invert-obj');

function Nested4PartyIDSource (nested4PartyIdsource) {
  this.message = nested4PartyIdsource;
}

Nested4PartyIDSource.prototype.value = function () {
  return this.message;
};

Nested4PartyIDSource.Tag = '1416';

Nested4PartyIDSource.Type = 'CHAR';

module.exports = Nested4PartyIDSource;
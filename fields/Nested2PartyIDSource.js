var invert = require('invert-obj');

function Nested2PartyIDSource (nested2PartyIdsource) {
  this.message = nested2PartyIdsource;
}

Nested2PartyIDSource.prototype.value = function () {
  return this.message;
};

Nested2PartyIDSource.Tag = '758';

Nested2PartyIDSource.Type = 'CHAR';

module.exports = Nested2PartyIDSource;
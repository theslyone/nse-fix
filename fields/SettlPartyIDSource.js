var invert = require('invert-obj');

function SettlPartyIDSource (settlPartyIdsource) {
  this.message = settlPartyIdsource;
}

SettlPartyIDSource.prototype.value = function () {
  return this.message;
};

SettlPartyIDSource.Tag = '783';

SettlPartyIDSource.Type = 'CHAR';

module.exports = SettlPartyIDSource;
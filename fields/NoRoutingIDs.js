var invert = require('invert-obj');

function NoRoutingIDs (noRoutingIds) {
  this.message = noRoutingIds;
}

NoRoutingIDs.prototype.value = function () {
  return this.message;
};

NoRoutingIDs.Tag = '215';

NoRoutingIDs.Type = 'NUMINGROUP';

module.exports = NoRoutingIDs;
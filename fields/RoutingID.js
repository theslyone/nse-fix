var invert = require('invert-obj');

function RoutingID (routingId) {
  this.message = routingId;
}

RoutingID.prototype.value = function () {
  return this.message;
};

RoutingID.Tag = '217';

RoutingID.Type = 'STRING';

module.exports = RoutingID;
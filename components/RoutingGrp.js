var NoRoutingIDs = require('../fields/NoRoutingIDs');
var RoutingType = require('../fields/RoutingType');
var RoutingID = require('../fields/RoutingID');

function RoutingGrp (routingGrp) {
  this.message = routingGrp;
}

/* group */

/* field */
RoutingGrp.prototype.routingType = function () {
  return new RoutingType(this.message.tags[RoutingType.Tag]);
};

/* field */
RoutingGrp.prototype.routingId = function () {
  return new RoutingID(this.message.tags[RoutingID.Tag]);
};

/* end group */

RoutingGrp.Tag = '215';

module.exports = RoutingGrp;
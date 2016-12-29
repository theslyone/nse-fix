var NoCapacities = require('../fields/NoCapacities');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var OrderCapacityQty = require('../fields/OrderCapacityQty');

function CpctyConfGrp (cpctyConfGrp) {
  this.message = cpctyConfGrp;
}

/* group */

/* field */
CpctyConfGrp.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
CpctyConfGrp.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[OrderRestrictions.Tag]);
};

/* field */
CpctyConfGrp.prototype.orderCapacityQty = function () {
  return new OrderCapacityQty(this.message.tags[OrderCapacityQty.Tag]);
};

/* end group */

CpctyConfGrp.Tag = '862';

module.exports = CpctyConfGrp;
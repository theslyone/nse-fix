var OrderQty = require('../fields/OrderQty');
var CashOrderQty = require('../fields/CashOrderQty');
var OrderPercent = require('../fields/OrderPercent');
var RoundingDirection = require('../fields/RoundingDirection');
var RoundingModulus = require('../fields/RoundingModulus');

function OrderQtyData (orderQtyData) {
  this.message = orderQtyData;
}
/* field */
OrderQtyData.prototype.orderQty = function () {
  return new OrderQty(this.message.tags[OrderQty.Tag]);
};

/* field */
OrderQtyData.prototype.cashOrderQty = function () {
  return new CashOrderQty(this.message.tags[CashOrderQty.Tag]);
};

/* field */
OrderQtyData.prototype.orderPercent = function () {
  return new OrderPercent(this.message.tags[OrderPercent.Tag]);
};

/* field */
OrderQtyData.prototype.roundingDirection = function () {
  return new RoundingDirection(this.message.tags[RoundingDirection.Tag]);
};

/* field */
OrderQtyData.prototype.roundingModulus = function () {
  return new RoundingModulus(this.message.tags[RoundingModulus.Tag]);
};



OrderQtyData.Tag = '38';

module.exports = OrderQtyData;
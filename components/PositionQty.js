var NoPositions = require('../fields/NoPositions');
var NestedParties = require('../components/NestedParties');
var PosType = require('../fields/PosType');
var LongQty = require('../fields/LongQty');
var ShortQty = require('../fields/ShortQty');
var PosQtyStatus = require('../fields/PosQtyStatus');
var QuantityDate = require('../fields/QuantityDate');

function PositionQty (positionQty) {
  this.message = positionQty;
}

/* group */

/* component */
PositionQty.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
PositionQty.prototype.posType = function () {
  return new PosType(this.message.tags[PosType.Tag]);
};

/* field */
PositionQty.prototype.longQty = function () {
  return new LongQty(this.message.tags[LongQty.Tag]);
};

/* field */
PositionQty.prototype.shortQty = function () {
  return new ShortQty(this.message.tags[ShortQty.Tag]);
};

/* field */
PositionQty.prototype.posQtyStatus = function () {
  return new PosQtyStatus(this.message.tags[PosQtyStatus.Tag]);
};

/* field */
PositionQty.prototype.quantityDate = function () {
  return new QuantityDate(this.message.tags[QuantityDate.Tag]);
};

/* end group */

PositionQty.Tag = '702';

module.exports = PositionQty;
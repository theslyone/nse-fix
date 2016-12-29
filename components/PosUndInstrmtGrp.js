var NoUnderlyings = require('../fields/NoUnderlyings');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var UnderlyingAmount = require('../components/UnderlyingAmount');
var UnderlyingSettlPrice = require('../fields/UnderlyingSettlPrice');
var UnderlyingSettlPriceType = require('../fields/UnderlyingSettlPriceType');
var UnderlyingDeliveryAmount = require('../fields/UnderlyingDeliveryAmount');

function PosUndInstrmtGrp (posUndInstrmtGrp) {
  this.message = posUndInstrmtGrp;
}

/* group */

/* component */
PosUndInstrmtGrp.prototype.underlyingInstrument = function () {
  return this.message.groups[UnderlyingInstrument.Tag]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

/* component */
PosUndInstrmtGrp.prototype.underlyingAmount = function () {
  return this.message.groups[UnderlyingAmount.Tag]
    .map(function (underlyingAmount) {
      return new UnderlyingAmount(underlyingAmount);
  });
};

/* field */
PosUndInstrmtGrp.prototype.underlyingSettlPrice = function () {
  return new UnderlyingSettlPrice(this.message.tags[UnderlyingSettlPrice.Tag]);
};

/* field */
PosUndInstrmtGrp.prototype.underlyingSettlPriceType = function () {
  return new UnderlyingSettlPriceType(this.message.tags[UnderlyingSettlPriceType.Tag]);
};

/* field */
PosUndInstrmtGrp.prototype.underlyingDeliveryAmount = function () {
  return new UnderlyingDeliveryAmount(this.message.tags[UnderlyingDeliveryAmount.Tag]);
};

/* end group */

PosUndInstrmtGrp.Tag = '711';

module.exports = PosUndInstrmtGrp;
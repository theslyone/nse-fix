var NoBidDescriptors = require('../fields/NoBidDescriptors');
var BidDescriptorType = require('../fields/BidDescriptorType');
var BidDescriptor = require('../fields/BidDescriptor');
var SideValueInd = require('../fields/SideValueInd');
var LiquidityValue = require('../fields/LiquidityValue');
var LiquidityNumSecurities = require('../fields/LiquidityNumSecurities');
var LiquidityPctLow = require('../fields/LiquidityPctLow');
var LiquidityPctHigh = require('../fields/LiquidityPctHigh');
var EFPTrackingError = require('../fields/EFPTrackingError');
var FairValue = require('../fields/FairValue');
var OutsideIndexPct = require('../fields/OutsideIndexPct');
var ValueOfFutures = require('../fields/ValueOfFutures');

function BidDescReqGrp (bidDescReqGrp) {
  this.message = bidDescReqGrp;
}

/* group */

/* field */
BidDescReqGrp.prototype.bidDescriptorType = function () {
  return new BidDescriptorType(this.message.tags[BidDescriptorType.Tag]);
};

/* field */
BidDescReqGrp.prototype.bidDescriptor = function () {
  return new BidDescriptor(this.message.tags[BidDescriptor.Tag]);
};

/* field */
BidDescReqGrp.prototype.sideValueInd = function () {
  return new SideValueInd(this.message.tags[SideValueInd.Tag]);
};

/* field */
BidDescReqGrp.prototype.liquidityValue = function () {
  return new LiquidityValue(this.message.tags[LiquidityValue.Tag]);
};

/* field */
BidDescReqGrp.prototype.liquidityNumSecurities = function () {
  return new LiquidityNumSecurities(this.message.tags[LiquidityNumSecurities.Tag]);
};

/* field */
BidDescReqGrp.prototype.liquidityPctLow = function () {
  return new LiquidityPctLow(this.message.tags[LiquidityPctLow.Tag]);
};

/* field */
BidDescReqGrp.prototype.liquidityPctHigh = function () {
  return new LiquidityPctHigh(this.message.tags[LiquidityPctHigh.Tag]);
};

/* field */
BidDescReqGrp.prototype.efptrackingError = function () {
  return new EFPTrackingError(this.message.tags[EFPTrackingError.Tag]);
};

/* field */
BidDescReqGrp.prototype.fairValue = function () {
  return new FairValue(this.message.tags[FairValue.Tag]);
};

/* field */
BidDescReqGrp.prototype.outsideIndexPct = function () {
  return new OutsideIndexPct(this.message.tags[OutsideIndexPct.Tag]);
};

/* field */
BidDescReqGrp.prototype.valueOfFutures = function () {
  return new ValueOfFutures(this.message.tags[ValueOfFutures.Tag]);
};

/* end group */

BidDescReqGrp.Tag = '398';

module.exports = BidDescReqGrp;
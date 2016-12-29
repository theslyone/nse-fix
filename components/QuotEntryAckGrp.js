var NoQuoteEntries = require('../fields/NoQuoteEntries');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var QuoteEntryID = require('../fields/QuoteEntryID');
var BidPx = require('../fields/BidPx');
var OfferPx = require('../fields/OfferPx');
var BidSize = require('../fields/BidSize');
var OfferSize = require('../fields/OfferSize');
var ValidUntilTime = require('../fields/ValidUntilTime');
var BidSpotRate = require('../fields/BidSpotRate');
var OfferSpotRate = require('../fields/OfferSpotRate');
var BidForwardPoints = require('../fields/BidForwardPoints');
var OfferForwardPoints = require('../fields/OfferForwardPoints');
var MidPx = require('../fields/MidPx');
var BidYield = require('../fields/BidYield');
var MidYield = require('../fields/MidYield');
var OfferYield = require('../fields/OfferYield');
var TransactTime = require('../fields/TransactTime');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SettlDate = require('../fields/SettlDate');
var OrdType = require('../fields/OrdType');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var BidForwardPoints2 = require('../fields/BidForwardPoints2');
var OfferForwardPoints2 = require('../fields/OfferForwardPoints2');
var Currency = require('../fields/Currency');
var QuoteEntryRejectReason = require('../fields/QuoteEntryRejectReason');
var QuoteEntryStatus = require('../fields/QuoteEntryStatus');

function QuotEntryAckGrp (quotEntryAckGrp) {
  this.message = quotEntryAckGrp;
}

/* group */

/* component */
QuotEntryAckGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
QuotEntryAckGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* field */
QuotEntryAckGrp.prototype.quoteEntryId = function () {
  return new QuoteEntryID(this.message.tags[QuoteEntryID.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.bidPx = function () {
  return new BidPx(this.message.tags[BidPx.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.offerPx = function () {
  return new OfferPx(this.message.tags[OfferPx.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.bidSize = function () {
  return new BidSize(this.message.tags[BidSize.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.offerSize = function () {
  return new OfferSize(this.message.tags[OfferSize.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.validUntilTime = function () {
  return new ValidUntilTime(this.message.tags[ValidUntilTime.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.bidSpotRate = function () {
  return new BidSpotRate(this.message.tags[BidSpotRate.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.offerSpotRate = function () {
  return new OfferSpotRate(this.message.tags[OfferSpotRate.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.bidForwardPoints = function () {
  return new BidForwardPoints(this.message.tags[BidForwardPoints.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.offerForwardPoints = function () {
  return new OfferForwardPoints(this.message.tags[OfferForwardPoints.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.midPx = function () {
  return new MidPx(this.message.tags[MidPx.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.bidYield = function () {
  return new BidYield(this.message.tags[BidYield.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.midYield = function () {
  return new MidYield(this.message.tags[MidYield.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.offerYield = function () {
  return new OfferYield(this.message.tags[OfferYield.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TransactTime.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[SettlDate2.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[OrderQty2.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.bidForwardPoints2 = function () {
  return new BidForwardPoints2(this.message.tags[BidForwardPoints2.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.offerForwardPoints2 = function () {
  return new OfferForwardPoints2(this.message.tags[OfferForwardPoints2.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.quoteEntryRejectReason = function () {
  return new QuoteEntryRejectReason(this.message.tags[QuoteEntryRejectReason.Tag]);
};

/* field */
QuotEntryAckGrp.prototype.quoteEntryStatus = function () {
  return new QuoteEntryStatus(this.message.tags[QuoteEntryStatus.Tag]);
};

/* end group */

QuotEntryAckGrp.Tag = '295';

module.exports = QuotEntryAckGrp;
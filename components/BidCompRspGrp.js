var NoBidComponents = require('../fields/NoBidComponents');
var CommissionData = require('../components/CommissionData');
var ListID = require('../fields/ListID');
var Country = require('../fields/Country');
var Side = require('../fields/Side');
var Price = require('../fields/Price');
var PriceType = require('../fields/PriceType');
var FairValue = require('../fields/FairValue');
var NetGrossInd = require('../fields/NetGrossInd');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function BidCompRspGrp (bidCompRspGrp) {
  this.message = bidCompRspGrp;
}

/* group */

/* component */
BidCompRspGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* field */
BidCompRspGrp.prototype.listId = function () {
  return new ListID(this.message.tags[ListID.Tag]);
};

/* field */
BidCompRspGrp.prototype.country = function () {
  return new Country(this.message.tags[Country.Tag]);
};

/* field */
BidCompRspGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
BidCompRspGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
BidCompRspGrp.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};

/* field */
BidCompRspGrp.prototype.fairValue = function () {
  return new FairValue(this.message.tags[FairValue.Tag]);
};

/* field */
BidCompRspGrp.prototype.netGrossInd = function () {
  return new NetGrossInd(this.message.tags[NetGrossInd.Tag]);
};

/* field */
BidCompRspGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
BidCompRspGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
BidCompRspGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
BidCompRspGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
BidCompRspGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
BidCompRspGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
BidCompRspGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

BidCompRspGrp.Tag = '420';

module.exports = BidCompRspGrp;
var NoSides = require('../fields/NoSides');
var Parties = require('../components/Parties');
var OrderQtyData = require('../components/OrderQtyData');
var Side = require('../fields/Side');
var OrigClOrdID = require('../fields/OrigClOrdID');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var OrigOrdModTime = require('../fields/OrigOrdModTime');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var ComplianceID = require('../fields/ComplianceID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function SideCrossOrdCxlGrp (sideCrossOrdCxlGrp) {
  this.message = sideCrossOrdCxlGrp;
}

/* group */

/* component */
SideCrossOrdCxlGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
SideCrossOrdCxlGrp.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* field */
SideCrossOrdCxlGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrigClOrdID.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[ClOrdLinkID.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.origOrdModTime = function () {
  return new OrigOrdModTime(this.message.tags[OrigOrdModTime.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[TradeOriginationDate.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeDate.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[ComplianceID.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
SideCrossOrdCxlGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

SideCrossOrdCxlGrp.Tag = '552';

module.exports = SideCrossOrdCxlGrp;
var AffectedOrdGrp = require('../components/AffectedOrdGrp');
var Instrument = require('../components/Instrument');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var Parties = require('../components/Parties');
var NotAffectedOrdersGrp = require('../components/NotAffectedOrdersGrp');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var MassCancelRequestType = require('../fields/MassCancelRequestType');
var MassCancelResponse = require('../fields/MassCancelResponse');
var MassCancelRejectReason = require('../fields/MassCancelRejectReason');
var TotalAffectedOrders = require('../fields/TotalAffectedOrders');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MassActionReportID = require('../fields/MassActionReportID');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function OrderMassCancelReport (orderMassCancelReport) {
  this.message = orderMassCancelReport;
}

OrderMassCancelReport.prototype.affectedOrdGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelReport.Tags.AffectedOrdGrp] === undefined) return null;
  return this.message.groups[OrderMassCancelReport.Tags.AffectedOrdGrp]
    .map(function (affectedOrdGrp) {
      return new AffectedOrdGrp(affectedOrdGrp);
  });
};

OrderMassCancelReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderMassCancelReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderMassCancelReport.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelReport.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[OrderMassCancelReport.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

OrderMassCancelReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelReport.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderMassCancelReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderMassCancelReport.prototype.notAffectedOrdersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelReport.Tags.NotAffectedOrdersGrp] === undefined) return null;
  return this.message.groups[OrderMassCancelReport.Tags.NotAffectedOrdersGrp]
    .map(function (notAffectedOrdersGrp) {
      return new NotAffectedOrdersGrp(notAffectedOrdersGrp);
  });
};

OrderMassCancelReport.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderMassCancelReport.Tags.ClOrdID]);
};

OrderMassCancelReport.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderMassCancelReport.Tags.SecondaryClOrdID]);
};

OrderMassCancelReport.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderMassCancelReport.Tags.OrderID]);
};

OrderMassCancelReport.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[OrderMassCancelReport.Tags.SecondaryOrderID]);
};

OrderMassCancelReport.prototype.massCancelRequestType = function () {
  return new MassCancelRequestType(this.message.tags[OrderMassCancelReport.Tags.MassCancelRequestType]);
};

OrderMassCancelReport.prototype.massCancelResponse = function () {
  return new MassCancelResponse(this.message.tags[OrderMassCancelReport.Tags.MassCancelResponse]);
};

OrderMassCancelReport.prototype.massCancelRejectReason = function () {
  return new MassCancelRejectReason(this.message.tags[OrderMassCancelReport.Tags.MassCancelRejectReason]);
};

OrderMassCancelReport.prototype.totalAffectedOrders = function () {
  return new TotalAffectedOrders(this.message.tags[OrderMassCancelReport.Tags.TotalAffectedOrders]);
};

OrderMassCancelReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[OrderMassCancelReport.Tags.TradingSessionID]);
};

OrderMassCancelReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[OrderMassCancelReport.Tags.TradingSessionSubID]);
};

OrderMassCancelReport.prototype.side = function () {
  return new Side(this.message.tags[OrderMassCancelReport.Tags.Side]);
};

OrderMassCancelReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderMassCancelReport.Tags.TransactTime]);
};

OrderMassCancelReport.prototype.text = function () {
  return new Text(this.message.tags[OrderMassCancelReport.Tags.Text]);
};

OrderMassCancelReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderMassCancelReport.Tags.EncodedTextLen]);
};

OrderMassCancelReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderMassCancelReport.Tags.EncodedText]);
};

OrderMassCancelReport.prototype.massActionReportId = function () {
  return new MassActionReportID(this.message.tags[OrderMassCancelReport.Tags.MassActionReportID]);
};

OrderMassCancelReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[OrderMassCancelReport.Tags.MarketID]);
};

OrderMassCancelReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[OrderMassCancelReport.Tags.MarketSegmentID]);
};

OrderMassCancelReport.Tags = {
  AffectedOrdGrp: '534',
  Instrument: '55',
  UnderlyingInstrument: '311',
  Parties: '453',
  NotAffectedOrdersGrp: '1370',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  OrderID: '37',
  SecondaryOrderID: '198',
  MassCancelRequestType: '530',
  MassCancelResponse: '531',
  MassCancelRejectReason: '532',
  TotalAffectedOrders: '533',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Side: '54',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  MassActionReportID: '1369',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

OrderMassCancelReport.msgType = 'r';

module.exports = OrderMassCancelReport;
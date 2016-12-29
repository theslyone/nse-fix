var AffectedOrdGrp = require('../components/AffectedOrdGrp');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var NotAffectedOrdersGrp = require('../components/NotAffectedOrdersGrp');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var MassActionReportID = require('../fields/MassActionReportID');
var MassActionType = require('../fields/MassActionType');
var MassActionScope = require('../fields/MassActionScope');
var MassActionResponse = require('../fields/MassActionResponse');
var MassActionRejectReason = require('../fields/MassActionRejectReason');
var TotalAffectedOrders = require('../fields/TotalAffectedOrders');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function OrderMassActionReport (orderMassActionReport) {
  this.message = orderMassActionReport;
}

OrderMassActionReport.prototype.affectedOrdGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionReport.Tags.AffectedOrdGrp] === undefined) return null;
  return this.message.groups[OrderMassActionReport.Tags.AffectedOrdGrp]
    .map(function (affectedOrdGrp) {
      return new AffectedOrdGrp(affectedOrdGrp);
  });
};

OrderMassActionReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionReport.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderMassActionReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderMassActionReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderMassActionReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderMassActionReport.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionReport.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[OrderMassActionReport.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

OrderMassActionReport.prototype.notAffectedOrdersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionReport.Tags.NotAffectedOrdersGrp] === undefined) return null;
  return this.message.groups[OrderMassActionReport.Tags.NotAffectedOrdersGrp]
    .map(function (notAffectedOrdersGrp) {
      return new NotAffectedOrdersGrp(notAffectedOrdersGrp);
  });
};

OrderMassActionReport.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderMassActionReport.Tags.ClOrdID]);
};

OrderMassActionReport.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderMassActionReport.Tags.SecondaryClOrdID]);
};

OrderMassActionReport.prototype.massActionReportId = function () {
  return new MassActionReportID(this.message.tags[OrderMassActionReport.Tags.MassActionReportID]);
};

OrderMassActionReport.prototype.massActionType = function () {
  return new MassActionType(this.message.tags[OrderMassActionReport.Tags.MassActionType]);
};

OrderMassActionReport.prototype.massActionScope = function () {
  return new MassActionScope(this.message.tags[OrderMassActionReport.Tags.MassActionScope]);
};

OrderMassActionReport.prototype.massActionResponse = function () {
  return new MassActionResponse(this.message.tags[OrderMassActionReport.Tags.MassActionResponse]);
};

OrderMassActionReport.prototype.massActionRejectReason = function () {
  return new MassActionRejectReason(this.message.tags[OrderMassActionReport.Tags.MassActionRejectReason]);
};

OrderMassActionReport.prototype.totalAffectedOrders = function () {
  return new TotalAffectedOrders(this.message.tags[OrderMassActionReport.Tags.TotalAffectedOrders]);
};

OrderMassActionReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[OrderMassActionReport.Tags.MarketID]);
};

OrderMassActionReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[OrderMassActionReport.Tags.MarketSegmentID]);
};

OrderMassActionReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[OrderMassActionReport.Tags.TradingSessionID]);
};

OrderMassActionReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[OrderMassActionReport.Tags.TradingSessionSubID]);
};

OrderMassActionReport.prototype.side = function () {
  return new Side(this.message.tags[OrderMassActionReport.Tags.Side]);
};

OrderMassActionReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderMassActionReport.Tags.TransactTime]);
};

OrderMassActionReport.prototype.text = function () {
  return new Text(this.message.tags[OrderMassActionReport.Tags.Text]);
};

OrderMassActionReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderMassActionReport.Tags.EncodedTextLen]);
};

OrderMassActionReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderMassActionReport.Tags.EncodedText]);
};

OrderMassActionReport.Tags = {
  AffectedOrdGrp: '534',
  Parties: '453',
  Instrument: '55',
  UnderlyingInstrument: '311',
  NotAffectedOrdersGrp: '1370',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  MassActionReportID: '1369',
  MassActionType: '1373',
  MassActionScope: '1374',
  MassActionResponse: '1375',
  MassActionRejectReason: '1376',
  TotalAffectedOrders: '533',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Side: '54',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

OrderMassActionReport.msgType = 'BZ';

module.exports = OrderMassActionReport;
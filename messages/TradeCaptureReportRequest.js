var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var TrdCapDtGrp = require('../components/TrdCapDtGrp');
var TradeRequestID = require('../fields/TradeRequestID');
var TradeRequestType = require('../fields/TradeRequestType');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TradeReportID = require('../fields/TradeReportID');
var SecondaryTradeReportID = require('../fields/SecondaryTradeReportID');
var ExecID = require('../fields/ExecID');
var ExecType = require('../fields/ExecType');
var OrderID = require('../fields/OrderID');
var ClOrdID = require('../fields/ClOrdID');
var MatchStatus = require('../fields/MatchStatus');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var TransferReason = require('../fields/TransferReason');
var SecondaryTrdType = require('../fields/SecondaryTrdType');
var TradeLinkID = require('../fields/TradeLinkID');
var TrdMatchID = require('../fields/TrdMatchID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TimeBracket = require('../fields/TimeBracket');
var Side = require('../fields/Side');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var TradeInputSource = require('../fields/TradeInputSource');
var TradeInputDevice = require('../fields/TradeInputDevice');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MessageEventSource = require('../fields/MessageEventSource');
var TradeID = require('../fields/TradeID');
var SecondaryTradeID = require('../fields/SecondaryTradeID');
var FirmTradeID = require('../fields/FirmTradeID');
var SecondaryFirmTradeID = require('../fields/SecondaryFirmTradeID');
var TradeHandlingInstr = require('../fields/TradeHandlingInstr');

function TradeCaptureReportRequest (tradeCaptureReportRequest) {
  this.message = tradeCaptureReportRequest;
}

TradeCaptureReportRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[TradeCaptureReportRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

TradeCaptureReportRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[TradeCaptureReportRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradeCaptureReportRequest.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportRequest.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[TradeCaptureReportRequest.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

TradeCaptureReportRequest.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportRequest.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[TradeCaptureReportRequest.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

TradeCaptureReportRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

TradeCaptureReportRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

TradeCaptureReportRequest.prototype.trdCapDtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportRequest.Tags.TrdCapDtGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportRequest.Tags.TrdCapDtGrp]
    .map(function (trdCapDtGrp) {
      return new TrdCapDtGrp(trdCapDtGrp);
  });
};

TradeCaptureReportRequest.prototype.tradeRequestId = function () {
  return new TradeRequestID(this.message.tags[TradeCaptureReportRequest.Tags.TradeRequestID]);
};

TradeCaptureReportRequest.prototype.tradeRequestType = function () {
  return new TradeRequestType(this.message.tags[TradeCaptureReportRequest.Tags.TradeRequestType]);
};

TradeCaptureReportRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradeCaptureReportRequest.Tags.SubscriptionRequestType]);
};

TradeCaptureReportRequest.prototype.tradeReportId = function () {
  return new TradeReportID(this.message.tags[TradeCaptureReportRequest.Tags.TradeReportID]);
};

TradeCaptureReportRequest.prototype.secondaryTradeReportId = function () {
  return new SecondaryTradeReportID(this.message.tags[TradeCaptureReportRequest.Tags.SecondaryTradeReportID]);
};

TradeCaptureReportRequest.prototype.execId = function () {
  return new ExecID(this.message.tags[TradeCaptureReportRequest.Tags.ExecID]);
};

TradeCaptureReportRequest.prototype.execType = function () {
  return new ExecType(this.message.tags[TradeCaptureReportRequest.Tags.ExecType]);
};

TradeCaptureReportRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[TradeCaptureReportRequest.Tags.OrderID]);
};

TradeCaptureReportRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[TradeCaptureReportRequest.Tags.ClOrdID]);
};

TradeCaptureReportRequest.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[TradeCaptureReportRequest.Tags.MatchStatus]);
};

TradeCaptureReportRequest.prototype.trdType = function () {
  return new TrdType(this.message.tags[TradeCaptureReportRequest.Tags.TrdType]);
};

TradeCaptureReportRequest.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[TradeCaptureReportRequest.Tags.TrdSubType]);
};

TradeCaptureReportRequest.prototype.transferReason = function () {
  return new TransferReason(this.message.tags[TradeCaptureReportRequest.Tags.TransferReason]);
};

TradeCaptureReportRequest.prototype.secondaryTrdType = function () {
  return new SecondaryTrdType(this.message.tags[TradeCaptureReportRequest.Tags.SecondaryTrdType]);
};

TradeCaptureReportRequest.prototype.tradeLinkId = function () {
  return new TradeLinkID(this.message.tags[TradeCaptureReportRequest.Tags.TradeLinkID]);
};

TradeCaptureReportRequest.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[TradeCaptureReportRequest.Tags.TrdMatchID]);
};

TradeCaptureReportRequest.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[TradeCaptureReportRequest.Tags.ClearingBusinessDate]);
};

TradeCaptureReportRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradeCaptureReportRequest.Tags.TradingSessionID]);
};

TradeCaptureReportRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradeCaptureReportRequest.Tags.TradingSessionSubID]);
};

TradeCaptureReportRequest.prototype.timeBracket = function () {
  return new TimeBracket(this.message.tags[TradeCaptureReportRequest.Tags.TimeBracket]);
};

TradeCaptureReportRequest.prototype.side = function () {
  return new Side(this.message.tags[TradeCaptureReportRequest.Tags.Side]);
};

TradeCaptureReportRequest.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[TradeCaptureReportRequest.Tags.MultiLegReportingType]);
};

TradeCaptureReportRequest.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[TradeCaptureReportRequest.Tags.TradeInputSource]);
};

TradeCaptureReportRequest.prototype.tradeInputDevice = function () {
  return new TradeInputDevice(this.message.tags[TradeCaptureReportRequest.Tags.TradeInputDevice]);
};

TradeCaptureReportRequest.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[TradeCaptureReportRequest.Tags.ResponseTransportType]);
};

TradeCaptureReportRequest.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[TradeCaptureReportRequest.Tags.ResponseDestination]);
};

TradeCaptureReportRequest.prototype.text = function () {
  return new Text(this.message.tags[TradeCaptureReportRequest.Tags.Text]);
};

TradeCaptureReportRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[TradeCaptureReportRequest.Tags.EncodedTextLen]);
};

TradeCaptureReportRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[TradeCaptureReportRequest.Tags.EncodedText]);
};

TradeCaptureReportRequest.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[TradeCaptureReportRequest.Tags.MessageEventSource]);
};

TradeCaptureReportRequest.prototype.tradeId = function () {
  return new TradeID(this.message.tags[TradeCaptureReportRequest.Tags.TradeID]);
};

TradeCaptureReportRequest.prototype.secondaryTradeId = function () {
  return new SecondaryTradeID(this.message.tags[TradeCaptureReportRequest.Tags.SecondaryTradeID]);
};

TradeCaptureReportRequest.prototype.firmTradeId = function () {
  return new FirmTradeID(this.message.tags[TradeCaptureReportRequest.Tags.FirmTradeID]);
};

TradeCaptureReportRequest.prototype.secondaryFirmTradeId = function () {
  return new SecondaryFirmTradeID(this.message.tags[TradeCaptureReportRequest.Tags.SecondaryFirmTradeID]);
};

TradeCaptureReportRequest.prototype.tradeHandlingInstr = function () {
  return new TradeHandlingInstr(this.message.tags[TradeCaptureReportRequest.Tags.TradeHandlingInstr]);
};

TradeCaptureReportRequest.Tags = {
  Parties: '453',
  Instrument: '55',
  InstrumentExtension: '668',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  TrdCapDtGrp: '580',
  TradeRequestID: '568',
  TradeRequestType: '569',
  SubscriptionRequestType: '263',
  TradeReportID: '571',
  SecondaryTradeReportID: '818',
  ExecID: '17',
  ExecType: '150',
  OrderID: '37',
  ClOrdID: '11',
  MatchStatus: '573',
  TrdType: '828',
  TrdSubType: '829',
  TransferReason: '830',
  SecondaryTrdType: '855',
  TradeLinkID: '820',
  TrdMatchID: '880',
  ClearingBusinessDate: '715',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  TimeBracket: '943',
  Side: '54',
  MultiLegReportingType: '442',
  TradeInputSource: '578',
  TradeInputDevice: '579',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  MessageEventSource: '1011',
  TradeID: '1003',
  SecondaryTradeID: '1040',
  FirmTradeID: '1041',
  SecondaryFirmTradeID: '1042',
  TradeHandlingInstr: '1123',
};

TradeCaptureReportRequest.msgType = 'AD';

module.exports = TradeCaptureReportRequest;
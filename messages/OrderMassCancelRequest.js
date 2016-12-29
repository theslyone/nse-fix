var Instrument = require('../components/Instrument');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var Parties = require('../components/Parties');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var MassCancelRequestType = require('../fields/MassCancelRequestType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function OrderMassCancelRequest (orderMassCancelRequest) {
  this.message = orderMassCancelRequest;
}

OrderMassCancelRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderMassCancelRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderMassCancelRequest.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelRequest.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[OrderMassCancelRequest.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

OrderMassCancelRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassCancelRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderMassCancelRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderMassCancelRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderMassCancelRequest.Tags.ClOrdID]);
};

OrderMassCancelRequest.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderMassCancelRequest.Tags.SecondaryClOrdID]);
};

OrderMassCancelRequest.prototype.massCancelRequestType = function () {
  return new MassCancelRequestType(this.message.tags[OrderMassCancelRequest.Tags.MassCancelRequestType]);
};

OrderMassCancelRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[OrderMassCancelRequest.Tags.TradingSessionID]);
};

OrderMassCancelRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[OrderMassCancelRequest.Tags.TradingSessionSubID]);
};

OrderMassCancelRequest.prototype.side = function () {
  return new Side(this.message.tags[OrderMassCancelRequest.Tags.Side]);
};

OrderMassCancelRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderMassCancelRequest.Tags.TransactTime]);
};

OrderMassCancelRequest.prototype.text = function () {
  return new Text(this.message.tags[OrderMassCancelRequest.Tags.Text]);
};

OrderMassCancelRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderMassCancelRequest.Tags.EncodedTextLen]);
};

OrderMassCancelRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderMassCancelRequest.Tags.EncodedText]);
};

OrderMassCancelRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[OrderMassCancelRequest.Tags.MarketID]);
};

OrderMassCancelRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[OrderMassCancelRequest.Tags.MarketSegmentID]);
};

OrderMassCancelRequest.Tags = {
  Instrument: '55',
  UnderlyingInstrument: '311',
  Parties: '453',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  MassCancelRequestType: '530',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Side: '54',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

OrderMassCancelRequest.msgType = 'q';

module.exports = OrderMassCancelRequest;
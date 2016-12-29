var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var MassActionType = require('../fields/MassActionType');
var MassActionScope = require('../fields/MassActionScope');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function OrderMassActionRequest (orderMassActionRequest) {
  this.message = orderMassActionRequest;
}

OrderMassActionRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderMassActionRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderMassActionRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderMassActionRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderMassActionRequest.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassActionRequest.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[OrderMassActionRequest.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

OrderMassActionRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderMassActionRequest.Tags.ClOrdID]);
};

OrderMassActionRequest.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderMassActionRequest.Tags.SecondaryClOrdID]);
};

OrderMassActionRequest.prototype.massActionType = function () {
  return new MassActionType(this.message.tags[OrderMassActionRequest.Tags.MassActionType]);
};

OrderMassActionRequest.prototype.massActionScope = function () {
  return new MassActionScope(this.message.tags[OrderMassActionRequest.Tags.MassActionScope]);
};

OrderMassActionRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[OrderMassActionRequest.Tags.MarketID]);
};

OrderMassActionRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[OrderMassActionRequest.Tags.MarketSegmentID]);
};

OrderMassActionRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[OrderMassActionRequest.Tags.TradingSessionID]);
};

OrderMassActionRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[OrderMassActionRequest.Tags.TradingSessionSubID]);
};

OrderMassActionRequest.prototype.side = function () {
  return new Side(this.message.tags[OrderMassActionRequest.Tags.Side]);
};

OrderMassActionRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderMassActionRequest.Tags.TransactTime]);
};

OrderMassActionRequest.prototype.text = function () {
  return new Text(this.message.tags[OrderMassActionRequest.Tags.Text]);
};

OrderMassActionRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderMassActionRequest.Tags.EncodedTextLen]);
};

OrderMassActionRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderMassActionRequest.Tags.EncodedText]);
};

OrderMassActionRequest.Tags = {
  Parties: '453',
  Instrument: '55',
  UnderlyingInstrument: '311',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  MassActionType: '1373',
  MassActionScope: '1374',
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

OrderMassActionRequest.msgType = 'CA';

module.exports = OrderMassActionRequest;
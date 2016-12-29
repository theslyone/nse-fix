var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var AdvId = require('../fields/AdvId');
var AdvTransType = require('../fields/AdvTransType');
var AdvRefID = require('../fields/AdvRefID');
var AdvSide = require('../fields/AdvSide');
var Quantity = require('../fields/Quantity');
var QtyType = require('../fields/QtyType');
var Price = require('../fields/Price');
var Currency = require('../fields/Currency');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var URLLink = require('../fields/URLLink');
var LastMkt = require('../fields/LastMkt');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function Advertisement (advertisement) {
  this.message = advertisement;
}

Advertisement.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Advertisement.Tags.Instrument] === undefined) return null;
  return this.message.groups[Advertisement.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

Advertisement.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Advertisement.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[Advertisement.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

Advertisement.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Advertisement.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[Advertisement.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

Advertisement.prototype.advId = function () {
  return new AdvId(this.message.tags[Advertisement.Tags.AdvId]);
};

Advertisement.prototype.advTransType = function () {
  return new AdvTransType(this.message.tags[Advertisement.Tags.AdvTransType]);
};

Advertisement.prototype.advRefId = function () {
  return new AdvRefID(this.message.tags[Advertisement.Tags.AdvRefID]);
};

Advertisement.prototype.advSide = function () {
  return new AdvSide(this.message.tags[Advertisement.Tags.AdvSide]);
};

Advertisement.prototype.quantity = function () {
  return new Quantity(this.message.tags[Advertisement.Tags.Quantity]);
};

Advertisement.prototype.qtyType = function () {
  return new QtyType(this.message.tags[Advertisement.Tags.QtyType]);
};

Advertisement.prototype.price = function () {
  return new Price(this.message.tags[Advertisement.Tags.Price]);
};

Advertisement.prototype.currency = function () {
  return new Currency(this.message.tags[Advertisement.Tags.Currency]);
};

Advertisement.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[Advertisement.Tags.TradeDate]);
};

Advertisement.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[Advertisement.Tags.TransactTime]);
};

Advertisement.prototype.text = function () {
  return new Text(this.message.tags[Advertisement.Tags.Text]);
};

Advertisement.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[Advertisement.Tags.EncodedTextLen]);
};

Advertisement.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[Advertisement.Tags.EncodedText]);
};

Advertisement.prototype.urllink = function () {
  return new URLLink(this.message.tags[Advertisement.Tags.URLLink]);
};

Advertisement.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[Advertisement.Tags.LastMkt]);
};

Advertisement.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[Advertisement.Tags.TradingSessionID]);
};

Advertisement.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[Advertisement.Tags.TradingSessionSubID]);
};

Advertisement.Tags = {
  Instrument: '55',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  AdvId: '2',
  AdvTransType: '5',
  AdvRefID: '3',
  AdvSide: '4',
  Quantity: '53',
  QtyType: '854',
  Price: '44',
  Currency: '15',
  TradeDate: '75',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  URLLink: '149',
  LastMkt: '30',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
};

Advertisement.msgType = '7';

module.exports = Advertisement;
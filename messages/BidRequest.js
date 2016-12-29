var BidDescReqGrp = require('../components/BidDescReqGrp');
var BidCompReqGrp = require('../components/BidCompReqGrp');
var BidID = require('../fields/BidID');
var ClientBidID = require('../fields/ClientBidID');
var BidRequestTransType = require('../fields/BidRequestTransType');
var ListName = require('../fields/ListName');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var BidType = require('../fields/BidType');
var NumTickets = require('../fields/NumTickets');
var Currency = require('../fields/Currency');
var SideValue1 = require('../fields/SideValue1');
var SideValue2 = require('../fields/SideValue2');
var LiquidityIndType = require('../fields/LiquidityIndType');
var WtAverageLiquidity = require('../fields/WtAverageLiquidity');
var ExchangeForPhysical = require('../fields/ExchangeForPhysical');
var OutMainCntryUIndex = require('../fields/OutMainCntryUIndex');
var CrossPercent = require('../fields/CrossPercent');
var ProgRptReqs = require('../fields/ProgRptReqs');
var ProgPeriodInterval = require('../fields/ProgPeriodInterval');
var IncTaxInd = require('../fields/IncTaxInd');
var ForexReq = require('../fields/ForexReq');
var NumBidders = require('../fields/NumBidders');
var TradeDate = require('../fields/TradeDate');
var BidTradeType = require('../fields/BidTradeType');
var BasisPxType = require('../fields/BasisPxType');
var StrikeTime = require('../fields/StrikeTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function BidRequest (bidRequest) {
  this.message = bidRequest;
}

BidRequest.prototype.bidDescReqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[BidRequest.Tags.BidDescReqGrp] === undefined) return null;
  return this.message.groups[BidRequest.Tags.BidDescReqGrp]
    .map(function (bidDescReqGrp) {
      return new BidDescReqGrp(bidDescReqGrp);
  });
};

BidRequest.prototype.bidCompReqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[BidRequest.Tags.BidCompReqGrp] === undefined) return null;
  return this.message.groups[BidRequest.Tags.BidCompReqGrp]
    .map(function (bidCompReqGrp) {
      return new BidCompReqGrp(bidCompReqGrp);
  });
};

BidRequest.prototype.bidId = function () {
  return new BidID(this.message.tags[BidRequest.Tags.BidID]);
};

BidRequest.prototype.clientBidId = function () {
  return new ClientBidID(this.message.tags[BidRequest.Tags.ClientBidID]);
};

BidRequest.prototype.bidRequestTransType = function () {
  return new BidRequestTransType(this.message.tags[BidRequest.Tags.BidRequestTransType]);
};

BidRequest.prototype.listName = function () {
  return new ListName(this.message.tags[BidRequest.Tags.ListName]);
};

BidRequest.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[BidRequest.Tags.TotNoRelatedSym]);
};

BidRequest.prototype.bidType = function () {
  return new BidType(this.message.tags[BidRequest.Tags.BidType]);
};

BidRequest.prototype.numTickets = function () {
  return new NumTickets(this.message.tags[BidRequest.Tags.NumTickets]);
};

BidRequest.prototype.currency = function () {
  return new Currency(this.message.tags[BidRequest.Tags.Currency]);
};

BidRequest.prototype.sideValue1 = function () {
  return new SideValue1(this.message.tags[BidRequest.Tags.SideValue1]);
};

BidRequest.prototype.sideValue2 = function () {
  return new SideValue2(this.message.tags[BidRequest.Tags.SideValue2]);
};

BidRequest.prototype.liquidityIndType = function () {
  return new LiquidityIndType(this.message.tags[BidRequest.Tags.LiquidityIndType]);
};

BidRequest.prototype.wtAverageLiquidity = function () {
  return new WtAverageLiquidity(this.message.tags[BidRequest.Tags.WtAverageLiquidity]);
};

BidRequest.prototype.exchangeForPhysical = function () {
  return new ExchangeForPhysical(this.message.tags[BidRequest.Tags.ExchangeForPhysical]);
};

BidRequest.prototype.outMainCntryUindex = function () {
  return new OutMainCntryUIndex(this.message.tags[BidRequest.Tags.OutMainCntryUIndex]);
};

BidRequest.prototype.crossPercent = function () {
  return new CrossPercent(this.message.tags[BidRequest.Tags.CrossPercent]);
};

BidRequest.prototype.progRptReqs = function () {
  return new ProgRptReqs(this.message.tags[BidRequest.Tags.ProgRptReqs]);
};

BidRequest.prototype.progPeriodInterval = function () {
  return new ProgPeriodInterval(this.message.tags[BidRequest.Tags.ProgPeriodInterval]);
};

BidRequest.prototype.incTaxInd = function () {
  return new IncTaxInd(this.message.tags[BidRequest.Tags.IncTaxInd]);
};

BidRequest.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[BidRequest.Tags.ForexReq]);
};

BidRequest.prototype.numBidders = function () {
  return new NumBidders(this.message.tags[BidRequest.Tags.NumBidders]);
};

BidRequest.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[BidRequest.Tags.TradeDate]);
};

BidRequest.prototype.bidTradeType = function () {
  return new BidTradeType(this.message.tags[BidRequest.Tags.BidTradeType]);
};

BidRequest.prototype.basisPxType = function () {
  return new BasisPxType(this.message.tags[BidRequest.Tags.BasisPxType]);
};

BidRequest.prototype.strikeTime = function () {
  return new StrikeTime(this.message.tags[BidRequest.Tags.StrikeTime]);
};

BidRequest.prototype.text = function () {
  return new Text(this.message.tags[BidRequest.Tags.Text]);
};

BidRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[BidRequest.Tags.EncodedTextLen]);
};

BidRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[BidRequest.Tags.EncodedText]);
};

BidRequest.Tags = {
  BidDescReqGrp: '398',
  BidCompReqGrp: '420',
  BidID: '390',
  ClientBidID: '391',
  BidRequestTransType: '374',
  ListName: '392',
  TotNoRelatedSym: '393',
  BidType: '394',
  NumTickets: '395',
  Currency: '15',
  SideValue1: '396',
  SideValue2: '397',
  LiquidityIndType: '409',
  WtAverageLiquidity: '410',
  ExchangeForPhysical: '411',
  OutMainCntryUIndex: '412',
  CrossPercent: '413',
  ProgRptReqs: '414',
  ProgPeriodInterval: '415',
  IncTaxInd: '416',
  ForexReq: '121',
  NumBidders: '417',
  TradeDate: '75',
  BidTradeType: '418',
  BasisPxType: '419',
  StrikeTime: '443',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

BidRequest.msgType = 'k';

module.exports = BidRequest;
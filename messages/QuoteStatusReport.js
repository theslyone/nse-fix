var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var Stipulations = require('../components/Stipulations');
var LegQuotStatGrp = require('../components/LegQuotStatGrp');
var QuotQualGrp = require('../components/QuotQualGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var QuoteStatusReqID = require('../fields/QuoteStatusReqID');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var QuoteRespID = require('../fields/QuoteRespID');
var QuoteType = require('../fields/QuoteType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var Currency = require('../fields/Currency');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var ExpireTime = require('../fields/ExpireTime');
var Price = require('../fields/Price');
var PriceType = require('../fields/PriceType');
var BidPx = require('../fields/BidPx');
var OfferPx = require('../fields/OfferPx');
var MktBidPx = require('../fields/MktBidPx');
var MktOfferPx = require('../fields/MktOfferPx');
var MinBidSize = require('../fields/MinBidSize');
var BidSize = require('../fields/BidSize');
var MinOfferSize = require('../fields/MinOfferSize');
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
var OrdType = require('../fields/OrdType');
var BidForwardPoints2 = require('../fields/BidForwardPoints2');
var OfferForwardPoints2 = require('../fields/OfferForwardPoints2');
var SettlCurrBidFxRate = require('../fields/SettlCurrBidFxRate');
var SettlCurrOfferFxRate = require('../fields/SettlCurrOfferFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var CommType = require('../fields/CommType');
var Commission = require('../fields/Commission');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ExDestination = require('../fields/ExDestination');
var QuoteStatus = require('../fields/QuoteStatus');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');
var QuoteCancelType = require('../fields/QuoteCancelType');
var QuoteMsgID = require('../fields/QuoteMsgID');
var QuoteRejectReason = require('../fields/QuoteRejectReason');
var MinQty = require('../fields/MinQty');

function QuoteStatusReport (quoteStatusReport) {
  this.message = quoteStatusReport;
}

QuoteStatusReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.Parties] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

QuoteStatusReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

QuoteStatusReport.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

QuoteStatusReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

QuoteStatusReport.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

QuoteStatusReport.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.Stipulations] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

QuoteStatusReport.prototype.legQuotStatGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.LegQuotStatGrp] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.LegQuotStatGrp]
    .map(function (legQuotStatGrp) {
      return new LegQuotStatGrp(legQuotStatGrp);
  });
};

QuoteStatusReport.prototype.quotQualGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.QuotQualGrp] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.QuotQualGrp]
    .map(function (quotQualGrp) {
      return new QuotQualGrp(quotQualGrp);
  });
};

QuoteStatusReport.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

QuoteStatusReport.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteStatusReport.Tags.YieldData] === undefined) return null;
  return this.message.groups[QuoteStatusReport.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

QuoteStatusReport.prototype.quoteStatusReqId = function () {
  return new QuoteStatusReqID(this.message.tags[QuoteStatusReport.Tags.QuoteStatusReqID]);
};

QuoteStatusReport.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteStatusReport.Tags.QuoteReqID]);
};

QuoteStatusReport.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteStatusReport.Tags.QuoteID]);
};

QuoteStatusReport.prototype.quoteRespId = function () {
  return new QuoteRespID(this.message.tags[QuoteStatusReport.Tags.QuoteRespID]);
};

QuoteStatusReport.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteStatusReport.Tags.QuoteType]);
};

QuoteStatusReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[QuoteStatusReport.Tags.TradingSessionID]);
};

QuoteStatusReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[QuoteStatusReport.Tags.TradingSessionSubID]);
};

QuoteStatusReport.prototype.side = function () {
  return new Side(this.message.tags[QuoteStatusReport.Tags.Side]);
};

QuoteStatusReport.prototype.settlType = function () {
  return new SettlType(this.message.tags[QuoteStatusReport.Tags.SettlType]);
};

QuoteStatusReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[QuoteStatusReport.Tags.SettlDate]);
};

QuoteStatusReport.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[QuoteStatusReport.Tags.SettlDate2]);
};

QuoteStatusReport.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[QuoteStatusReport.Tags.OrderQty2]);
};

QuoteStatusReport.prototype.currency = function () {
  return new Currency(this.message.tags[QuoteStatusReport.Tags.Currency]);
};

QuoteStatusReport.prototype.account = function () {
  return new Account(this.message.tags[QuoteStatusReport.Tags.Account]);
};

QuoteStatusReport.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[QuoteStatusReport.Tags.AcctIDSource]);
};

QuoteStatusReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[QuoteStatusReport.Tags.AccountType]);
};

QuoteStatusReport.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[QuoteStatusReport.Tags.ExpireTime]);
};

QuoteStatusReport.prototype.price = function () {
  return new Price(this.message.tags[QuoteStatusReport.Tags.Price]);
};

QuoteStatusReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[QuoteStatusReport.Tags.PriceType]);
};

QuoteStatusReport.prototype.bidPx = function () {
  return new BidPx(this.message.tags[QuoteStatusReport.Tags.BidPx]);
};

QuoteStatusReport.prototype.offerPx = function () {
  return new OfferPx(this.message.tags[QuoteStatusReport.Tags.OfferPx]);
};

QuoteStatusReport.prototype.mktBidPx = function () {
  return new MktBidPx(this.message.tags[QuoteStatusReport.Tags.MktBidPx]);
};

QuoteStatusReport.prototype.mktOfferPx = function () {
  return new MktOfferPx(this.message.tags[QuoteStatusReport.Tags.MktOfferPx]);
};

QuoteStatusReport.prototype.minBidSize = function () {
  return new MinBidSize(this.message.tags[QuoteStatusReport.Tags.MinBidSize]);
};

QuoteStatusReport.prototype.bidSize = function () {
  return new BidSize(this.message.tags[QuoteStatusReport.Tags.BidSize]);
};

QuoteStatusReport.prototype.minOfferSize = function () {
  return new MinOfferSize(this.message.tags[QuoteStatusReport.Tags.MinOfferSize]);
};

QuoteStatusReport.prototype.offerSize = function () {
  return new OfferSize(this.message.tags[QuoteStatusReport.Tags.OfferSize]);
};

QuoteStatusReport.prototype.validUntilTime = function () {
  return new ValidUntilTime(this.message.tags[QuoteStatusReport.Tags.ValidUntilTime]);
};

QuoteStatusReport.prototype.bidSpotRate = function () {
  return new BidSpotRate(this.message.tags[QuoteStatusReport.Tags.BidSpotRate]);
};

QuoteStatusReport.prototype.offerSpotRate = function () {
  return new OfferSpotRate(this.message.tags[QuoteStatusReport.Tags.OfferSpotRate]);
};

QuoteStatusReport.prototype.bidForwardPoints = function () {
  return new BidForwardPoints(this.message.tags[QuoteStatusReport.Tags.BidForwardPoints]);
};

QuoteStatusReport.prototype.offerForwardPoints = function () {
  return new OfferForwardPoints(this.message.tags[QuoteStatusReport.Tags.OfferForwardPoints]);
};

QuoteStatusReport.prototype.midPx = function () {
  return new MidPx(this.message.tags[QuoteStatusReport.Tags.MidPx]);
};

QuoteStatusReport.prototype.bidYield = function () {
  return new BidYield(this.message.tags[QuoteStatusReport.Tags.BidYield]);
};

QuoteStatusReport.prototype.midYield = function () {
  return new MidYield(this.message.tags[QuoteStatusReport.Tags.MidYield]);
};

QuoteStatusReport.prototype.offerYield = function () {
  return new OfferYield(this.message.tags[QuoteStatusReport.Tags.OfferYield]);
};

QuoteStatusReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[QuoteStatusReport.Tags.TransactTime]);
};

QuoteStatusReport.prototype.ordType = function () {
  return new OrdType(this.message.tags[QuoteStatusReport.Tags.OrdType]);
};

QuoteStatusReport.prototype.bidForwardPoints2 = function () {
  return new BidForwardPoints2(this.message.tags[QuoteStatusReport.Tags.BidForwardPoints2]);
};

QuoteStatusReport.prototype.offerForwardPoints2 = function () {
  return new OfferForwardPoints2(this.message.tags[QuoteStatusReport.Tags.OfferForwardPoints2]);
};

QuoteStatusReport.prototype.settlCurrBidFxRate = function () {
  return new SettlCurrBidFxRate(this.message.tags[QuoteStatusReport.Tags.SettlCurrBidFxRate]);
};

QuoteStatusReport.prototype.settlCurrOfferFxRate = function () {
  return new SettlCurrOfferFxRate(this.message.tags[QuoteStatusReport.Tags.SettlCurrOfferFxRate]);
};

QuoteStatusReport.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[QuoteStatusReport.Tags.SettlCurrFxRateCalc]);
};

QuoteStatusReport.prototype.commType = function () {
  return new CommType(this.message.tags[QuoteStatusReport.Tags.CommType]);
};

QuoteStatusReport.prototype.commission = function () {
  return new Commission(this.message.tags[QuoteStatusReport.Tags.Commission]);
};

QuoteStatusReport.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[QuoteStatusReport.Tags.CustOrderCapacity]);
};

QuoteStatusReport.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[QuoteStatusReport.Tags.ExDestination]);
};

QuoteStatusReport.prototype.quoteStatus = function () {
  return new QuoteStatus(this.message.tags[QuoteStatusReport.Tags.QuoteStatus]);
};

QuoteStatusReport.prototype.text = function () {
  return new Text(this.message.tags[QuoteStatusReport.Tags.Text]);
};

QuoteStatusReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[QuoteStatusReport.Tags.EncodedTextLen]);
};

QuoteStatusReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[QuoteStatusReport.Tags.EncodedText]);
};

QuoteStatusReport.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[QuoteStatusReport.Tags.ExDestinationIDSource]);
};

QuoteStatusReport.prototype.quoteCancelType = function () {
  return new QuoteCancelType(this.message.tags[QuoteStatusReport.Tags.QuoteCancelType]);
};

QuoteStatusReport.prototype.quoteMsgId = function () {
  return new QuoteMsgID(this.message.tags[QuoteStatusReport.Tags.QuoteMsgID]);
};

QuoteStatusReport.prototype.quoteRejectReason = function () {
  return new QuoteRejectReason(this.message.tags[QuoteStatusReport.Tags.QuoteRejectReason]);
};

QuoteStatusReport.prototype.minQty = function () {
  return new MinQty(this.message.tags[QuoteStatusReport.Tags.MinQty]);
};

QuoteStatusReport.Tags = {
  Parties: '453',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  OrderQtyData: '38',
  Stipulations: '232',
  LegQuotStatGrp: '555',
  QuotQualGrp: '735',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  QuoteStatusReqID: '649',
  QuoteReqID: '131',
  QuoteID: '117',
  QuoteRespID: '693',
  QuoteType: '537',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Side: '54',
  SettlType: '63',
  SettlDate: '64',
  SettlDate2: '193',
  OrderQty2: '192',
  Currency: '15',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  ExpireTime: '126',
  Price: '44',
  PriceType: '423',
  BidPx: '132',
  OfferPx: '133',
  MktBidPx: '645',
  MktOfferPx: '646',
  MinBidSize: '647',
  BidSize: '134',
  MinOfferSize: '648',
  OfferSize: '135',
  ValidUntilTime: '62',
  BidSpotRate: '188',
  OfferSpotRate: '190',
  BidForwardPoints: '189',
  OfferForwardPoints: '191',
  MidPx: '631',
  BidYield: '632',
  MidYield: '633',
  OfferYield: '634',
  TransactTime: '60',
  OrdType: '40',
  BidForwardPoints2: '642',
  OfferForwardPoints2: '643',
  SettlCurrBidFxRate: '656',
  SettlCurrOfferFxRate: '657',
  SettlCurrFxRateCalc: '156',
  CommType: '13',
  Commission: '12',
  CustOrderCapacity: '582',
  ExDestination: '100',
  QuoteStatus: '297',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  ExDestinationIDSource: '1133',
  QuoteCancelType: '298',
  QuoteMsgID: '1166',
  QuoteRejectReason: '300',
  MinQty: '110',
};

QuoteStatusReport.msgType = 'AI';

module.exports = QuoteStatusReport;
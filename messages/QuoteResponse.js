var QuotQualGrp = require('../components/QuotQualGrp');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var Stipulations = require('../components/Stipulations');
var LegQuotGrp = require('../components/LegQuotGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var QuoteRespID = require('../fields/QuoteRespID');
var QuoteID = require('../fields/QuoteID');
var QuoteRespType = require('../fields/QuoteRespType');
var ClOrdID = require('../fields/ClOrdID');
var OrderCapacity = require('../fields/OrderCapacity');
var IOIID = require('../fields/IOIID');
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
var Commission = require('../fields/Commission');
var CommType = require('../fields/CommType');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ExDestination = require('../fields/ExDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var Price = require('../fields/Price');
var PriceType = require('../fields/PriceType');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');
var QuoteMsgID = require('../fields/QuoteMsgID');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var MinQty = require('../fields/MinQty');
var OrderRestrictions = require('../fields/OrderRestrictions');

function QuoteResponse (quoteResponse) {
  this.message = quoteResponse;
}

QuoteResponse.prototype.quotQualGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.QuotQualGrp] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.QuotQualGrp]
    .map(function (quotQualGrp) {
      return new QuotQualGrp(quotQualGrp);
  });
};

QuoteResponse.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.Parties] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

QuoteResponse.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.Instrument] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

QuoteResponse.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

QuoteResponse.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

QuoteResponse.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

QuoteResponse.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.Stipulations] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

QuoteResponse.prototype.legQuotGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.LegQuotGrp] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.LegQuotGrp]
    .map(function (legQuotGrp) {
      return new LegQuotGrp(legQuotGrp);
  });
};

QuoteResponse.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

QuoteResponse.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteResponse.Tags.YieldData] === undefined) return null;
  return this.message.groups[QuoteResponse.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

QuoteResponse.prototype.quoteRespId = function () {
  return new QuoteRespID(this.message.tags[QuoteResponse.Tags.QuoteRespID]);
};

QuoteResponse.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteResponse.Tags.QuoteID]);
};

QuoteResponse.prototype.quoteRespType = function () {
  return new QuoteRespType(this.message.tags[QuoteResponse.Tags.QuoteRespType]);
};

QuoteResponse.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[QuoteResponse.Tags.ClOrdID]);
};

QuoteResponse.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[QuoteResponse.Tags.OrderCapacity]);
};

QuoteResponse.prototype.ioiid = function () {
  return new IOIID(this.message.tags[QuoteResponse.Tags.IOIID]);
};

QuoteResponse.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteResponse.Tags.QuoteType]);
};

QuoteResponse.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[QuoteResponse.Tags.TradingSessionID]);
};

QuoteResponse.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[QuoteResponse.Tags.TradingSessionSubID]);
};

QuoteResponse.prototype.side = function () {
  return new Side(this.message.tags[QuoteResponse.Tags.Side]);
};

QuoteResponse.prototype.settlType = function () {
  return new SettlType(this.message.tags[QuoteResponse.Tags.SettlType]);
};

QuoteResponse.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[QuoteResponse.Tags.SettlDate]);
};

QuoteResponse.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[QuoteResponse.Tags.SettlDate2]);
};

QuoteResponse.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[QuoteResponse.Tags.OrderQty2]);
};

QuoteResponse.prototype.currency = function () {
  return new Currency(this.message.tags[QuoteResponse.Tags.Currency]);
};

QuoteResponse.prototype.account = function () {
  return new Account(this.message.tags[QuoteResponse.Tags.Account]);
};

QuoteResponse.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[QuoteResponse.Tags.AcctIDSource]);
};

QuoteResponse.prototype.accountType = function () {
  return new AccountType(this.message.tags[QuoteResponse.Tags.AccountType]);
};

QuoteResponse.prototype.bidPx = function () {
  return new BidPx(this.message.tags[QuoteResponse.Tags.BidPx]);
};

QuoteResponse.prototype.offerPx = function () {
  return new OfferPx(this.message.tags[QuoteResponse.Tags.OfferPx]);
};

QuoteResponse.prototype.mktBidPx = function () {
  return new MktBidPx(this.message.tags[QuoteResponse.Tags.MktBidPx]);
};

QuoteResponse.prototype.mktOfferPx = function () {
  return new MktOfferPx(this.message.tags[QuoteResponse.Tags.MktOfferPx]);
};

QuoteResponse.prototype.minBidSize = function () {
  return new MinBidSize(this.message.tags[QuoteResponse.Tags.MinBidSize]);
};

QuoteResponse.prototype.bidSize = function () {
  return new BidSize(this.message.tags[QuoteResponse.Tags.BidSize]);
};

QuoteResponse.prototype.minOfferSize = function () {
  return new MinOfferSize(this.message.tags[QuoteResponse.Tags.MinOfferSize]);
};

QuoteResponse.prototype.offerSize = function () {
  return new OfferSize(this.message.tags[QuoteResponse.Tags.OfferSize]);
};

QuoteResponse.prototype.validUntilTime = function () {
  return new ValidUntilTime(this.message.tags[QuoteResponse.Tags.ValidUntilTime]);
};

QuoteResponse.prototype.bidSpotRate = function () {
  return new BidSpotRate(this.message.tags[QuoteResponse.Tags.BidSpotRate]);
};

QuoteResponse.prototype.offerSpotRate = function () {
  return new OfferSpotRate(this.message.tags[QuoteResponse.Tags.OfferSpotRate]);
};

QuoteResponse.prototype.bidForwardPoints = function () {
  return new BidForwardPoints(this.message.tags[QuoteResponse.Tags.BidForwardPoints]);
};

QuoteResponse.prototype.offerForwardPoints = function () {
  return new OfferForwardPoints(this.message.tags[QuoteResponse.Tags.OfferForwardPoints]);
};

QuoteResponse.prototype.midPx = function () {
  return new MidPx(this.message.tags[QuoteResponse.Tags.MidPx]);
};

QuoteResponse.prototype.bidYield = function () {
  return new BidYield(this.message.tags[QuoteResponse.Tags.BidYield]);
};

QuoteResponse.prototype.midYield = function () {
  return new MidYield(this.message.tags[QuoteResponse.Tags.MidYield]);
};

QuoteResponse.prototype.offerYield = function () {
  return new OfferYield(this.message.tags[QuoteResponse.Tags.OfferYield]);
};

QuoteResponse.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[QuoteResponse.Tags.TransactTime]);
};

QuoteResponse.prototype.ordType = function () {
  return new OrdType(this.message.tags[QuoteResponse.Tags.OrdType]);
};

QuoteResponse.prototype.bidForwardPoints2 = function () {
  return new BidForwardPoints2(this.message.tags[QuoteResponse.Tags.BidForwardPoints2]);
};

QuoteResponse.prototype.offerForwardPoints2 = function () {
  return new OfferForwardPoints2(this.message.tags[QuoteResponse.Tags.OfferForwardPoints2]);
};

QuoteResponse.prototype.settlCurrBidFxRate = function () {
  return new SettlCurrBidFxRate(this.message.tags[QuoteResponse.Tags.SettlCurrBidFxRate]);
};

QuoteResponse.prototype.settlCurrOfferFxRate = function () {
  return new SettlCurrOfferFxRate(this.message.tags[QuoteResponse.Tags.SettlCurrOfferFxRate]);
};

QuoteResponse.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[QuoteResponse.Tags.SettlCurrFxRateCalc]);
};

QuoteResponse.prototype.commission = function () {
  return new Commission(this.message.tags[QuoteResponse.Tags.Commission]);
};

QuoteResponse.prototype.commType = function () {
  return new CommType(this.message.tags[QuoteResponse.Tags.CommType]);
};

QuoteResponse.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[QuoteResponse.Tags.CustOrderCapacity]);
};

QuoteResponse.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[QuoteResponse.Tags.ExDestination]);
};

QuoteResponse.prototype.text = function () {
  return new Text(this.message.tags[QuoteResponse.Tags.Text]);
};

QuoteResponse.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[QuoteResponse.Tags.EncodedTextLen]);
};

QuoteResponse.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[QuoteResponse.Tags.EncodedText]);
};

QuoteResponse.prototype.price = function () {
  return new Price(this.message.tags[QuoteResponse.Tags.Price]);
};

QuoteResponse.prototype.priceType = function () {
  return new PriceType(this.message.tags[QuoteResponse.Tags.PriceType]);
};

QuoteResponse.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[QuoteResponse.Tags.ExDestinationIDSource]);
};

QuoteResponse.prototype.quoteMsgId = function () {
  return new QuoteMsgID(this.message.tags[QuoteResponse.Tags.QuoteMsgID]);
};

QuoteResponse.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[QuoteResponse.Tags.PreTradeAnonymity]);
};

QuoteResponse.prototype.minQty = function () {
  return new MinQty(this.message.tags[QuoteResponse.Tags.MinQty]);
};

QuoteResponse.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[QuoteResponse.Tags.OrderRestrictions]);
};

QuoteResponse.Tags = {
  QuotQualGrp: '735',
  Parties: '453',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  OrderQtyData: '38',
  Stipulations: '232',
  LegQuotGrp: '555',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  QuoteRespID: '693',
  QuoteID: '117',
  QuoteRespType: '694',
  ClOrdID: '11',
  OrderCapacity: '528',
  IOIID: '23',
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
  Commission: '12',
  CommType: '13',
  CustOrderCapacity: '582',
  ExDestination: '100',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  Price: '44',
  PriceType: '423',
  ExDestinationIDSource: '1133',
  QuoteMsgID: '1166',
  PreTradeAnonymity: '1091',
  MinQty: '110',
  OrderRestrictions: '529',
};

QuoteResponse.msgType = 'AJ';

module.exports = QuoteResponse;
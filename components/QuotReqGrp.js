var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var Stipulations = require('../components/Stipulations');
var QuotReqLegsGrp = require('../components/QuotReqLegsGrp');
var QuotQualGrp = require('../components/QuotQualGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var Parties = require('../components/Parties');
var PrevClosePx = require('../fields/PrevClosePx');
var QuoteRequestType = require('../fields/QuoteRequestType');
var QuoteType = require('../fields/QuoteType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var Side = require('../fields/Side');
var QtyType = require('../fields/QtyType');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var Currency = require('../fields/Currency');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var QuotePriceType = require('../fields/QuotePriceType');
var OrdType = require('../fields/OrdType');
var ValidUntilTime = require('../fields/ValidUntilTime');
var ExpireTime = require('../fields/ExpireTime');
var TransactTime = require('../fields/TransactTime');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var Price2 = require('../fields/Price2');
var MinQty = require('../fields/MinQty');

function QuotReqGrp (quotReqGrp) {
  this.message = quotReqGrp;
}

/* group */

/* component */
QuotReqGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
QuotReqGrp.prototype.financingDetails = function () {
  return this.message.groups[FinancingDetails.Tag]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

/* component */
QuotReqGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
QuotReqGrp.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* component */
QuotReqGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
QuotReqGrp.prototype.quotReqLegsGrp = function () {
  return this.message.groups[QuotReqLegsGrp.Tag]
    .map(function (quotReqLegsGrp) {
      return new QuotReqLegsGrp(quotReqLegsGrp);
  });
};

/* component */
QuotReqGrp.prototype.quotQualGrp = function () {
  return this.message.groups[QuotQualGrp.Tag]
    .map(function (quotQualGrp) {
      return new QuotQualGrp(quotQualGrp);
  });
};

/* component */
QuotReqGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
QuotReqGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* component */
QuotReqGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* field */
QuotReqGrp.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[PrevClosePx.Tag]);
};

/* field */
QuotReqGrp.prototype.quoteRequestType = function () {
  return new QuoteRequestType(this.message.tags[QuoteRequestType.Tag]);
};

/* field */
QuotReqGrp.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteType.Tag]);
};

/* field */
QuotReqGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
QuotReqGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
QuotReqGrp.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[TradeOriginationDate.Tag]);
};

/* field */
QuotReqGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
QuotReqGrp.prototype.qtyType = function () {
  return new QtyType(this.message.tags[QtyType.Tag]);
};

/* field */
QuotReqGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
QuotReqGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
QuotReqGrp.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[SettlDate2.Tag]);
};

/* field */
QuotReqGrp.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[OrderQty2.Tag]);
};

/* field */
QuotReqGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
QuotReqGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
QuotReqGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* field */
QuotReqGrp.prototype.accountType = function () {
  return new AccountType(this.message.tags[AccountType.Tag]);
};

/* field */
QuotReqGrp.prototype.quotePriceType = function () {
  return new QuotePriceType(this.message.tags[QuotePriceType.Tag]);
};

/* field */
QuotReqGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
QuotReqGrp.prototype.validUntilTime = function () {
  return new ValidUntilTime(this.message.tags[ValidUntilTime.Tag]);
};

/* field */
QuotReqGrp.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
QuotReqGrp.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TransactTime.Tag]);
};

/* field */
QuotReqGrp.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};

/* field */
QuotReqGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
QuotReqGrp.prototype.price2 = function () {
  return new Price2(this.message.tags[Price2.Tag]);
};

/* field */
QuotReqGrp.prototype.minQty = function () {
  return new MinQty(this.message.tags[MinQty.Tag]);
};

/* end group */

QuotReqGrp.Tag = '146';

module.exports = QuotReqGrp;
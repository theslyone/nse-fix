var Parties = require('../components/Parties');
var ExecCollGrp = require('../components/ExecCollGrp');
var TrdCollGrp = require('../components/TrdCollGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtCollGrp = require('../components/UndInstrmtCollGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var Stipulations = require('../components/Stipulations');
var CollRespID = require('../fields/CollRespID');
var CollAsgnID = require('../fields/CollAsgnID');
var CollReqID = require('../fields/CollReqID');
var CollAsgnReason = require('../fields/CollAsgnReason');
var CollAsgnTransType = require('../fields/CollAsgnTransType');
var CollAsgnRespType = require('../fields/CollAsgnRespType');
var CollAsgnRejectReason = require('../fields/CollAsgnRejectReason');
var TransactTime = require('../fields/TransactTime');
var Account = require('../fields/Account');
var AccountType = require('../fields/AccountType');
var ClOrdID = require('../fields/ClOrdID');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var SettlDate = require('../fields/SettlDate');
var Quantity = require('../fields/Quantity');
var QtyType = require('../fields/QtyType');
var Currency = require('../fields/Currency');
var MarginExcess = require('../fields/MarginExcess');
var TotalNetValue = require('../fields/TotalNetValue');
var CashOutstanding = require('../fields/CashOutstanding');
var Side = require('../fields/Side');
var Price = require('../fields/Price');
var PriceType = require('../fields/PriceType');
var AccruedInterestAmt = require('../fields/AccruedInterestAmt');
var EndAccruedInterestAmt = require('../fields/EndAccruedInterestAmt');
var StartCash = require('../fields/StartCash');
var EndCash = require('../fields/EndCash');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var CollApplType = require('../fields/CollApplType');
var FinancialStatus = require('../fields/FinancialStatus');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');

function CollateralResponse (collateralResponse) {
  this.message = collateralResponse;
}

CollateralResponse.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.Parties] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

CollateralResponse.prototype.execCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.ExecCollGrp] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.ExecCollGrp]
    .map(function (execCollGrp) {
      return new ExecCollGrp(execCollGrp);
  });
};

CollateralResponse.prototype.trdCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.TrdCollGrp] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.TrdCollGrp]
    .map(function (trdCollGrp) {
      return new TrdCollGrp(trdCollGrp);
  });
};

CollateralResponse.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.Instrument] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CollateralResponse.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

CollateralResponse.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CollateralResponse.prototype.undInstrmtCollGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.UndInstrmtCollGrp] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.UndInstrmtCollGrp]
    .map(function (undInstrmtCollGrp) {
      return new UndInstrmtCollGrp(undInstrmtCollGrp);
  });
};

CollateralResponse.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

CollateralResponse.prototype.miscFeesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.MiscFeesGrp] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.MiscFeesGrp]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

CollateralResponse.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

CollateralResponse.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CollateralResponse.Tags.Stipulations] === undefined) return null;
  return this.message.groups[CollateralResponse.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

CollateralResponse.prototype.collRespId = function () {
  return new CollRespID(this.message.tags[CollateralResponse.Tags.CollRespID]);
};

CollateralResponse.prototype.collAsgnId = function () {
  return new CollAsgnID(this.message.tags[CollateralResponse.Tags.CollAsgnID]);
};

CollateralResponse.prototype.collReqId = function () {
  return new CollReqID(this.message.tags[CollateralResponse.Tags.CollReqID]);
};

CollateralResponse.prototype.collAsgnReason = function () {
  return new CollAsgnReason(this.message.tags[CollateralResponse.Tags.CollAsgnReason]);
};

CollateralResponse.prototype.collAsgnTransType = function () {
  return new CollAsgnTransType(this.message.tags[CollateralResponse.Tags.CollAsgnTransType]);
};

CollateralResponse.prototype.collAsgnRespType = function () {
  return new CollAsgnRespType(this.message.tags[CollateralResponse.Tags.CollAsgnRespType]);
};

CollateralResponse.prototype.collAsgnRejectReason = function () {
  return new CollAsgnRejectReason(this.message.tags[CollateralResponse.Tags.CollAsgnRejectReason]);
};

CollateralResponse.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CollateralResponse.Tags.TransactTime]);
};

CollateralResponse.prototype.account = function () {
  return new Account(this.message.tags[CollateralResponse.Tags.Account]);
};

CollateralResponse.prototype.accountType = function () {
  return new AccountType(this.message.tags[CollateralResponse.Tags.AccountType]);
};

CollateralResponse.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[CollateralResponse.Tags.ClOrdID]);
};

CollateralResponse.prototype.orderId = function () {
  return new OrderID(this.message.tags[CollateralResponse.Tags.OrderID]);
};

CollateralResponse.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[CollateralResponse.Tags.SecondaryOrderID]);
};

CollateralResponse.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[CollateralResponse.Tags.SecondaryClOrdID]);
};

CollateralResponse.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[CollateralResponse.Tags.SettlDate]);
};

CollateralResponse.prototype.quantity = function () {
  return new Quantity(this.message.tags[CollateralResponse.Tags.Quantity]);
};

CollateralResponse.prototype.qtyType = function () {
  return new QtyType(this.message.tags[CollateralResponse.Tags.QtyType]);
};

CollateralResponse.prototype.currency = function () {
  return new Currency(this.message.tags[CollateralResponse.Tags.Currency]);
};

CollateralResponse.prototype.marginExcess = function () {
  return new MarginExcess(this.message.tags[CollateralResponse.Tags.MarginExcess]);
};

CollateralResponse.prototype.totalNetValue = function () {
  return new TotalNetValue(this.message.tags[CollateralResponse.Tags.TotalNetValue]);
};

CollateralResponse.prototype.cashOutstanding = function () {
  return new CashOutstanding(this.message.tags[CollateralResponse.Tags.CashOutstanding]);
};

CollateralResponse.prototype.side = function () {
  return new Side(this.message.tags[CollateralResponse.Tags.Side]);
};

CollateralResponse.prototype.price = function () {
  return new Price(this.message.tags[CollateralResponse.Tags.Price]);
};

CollateralResponse.prototype.priceType = function () {
  return new PriceType(this.message.tags[CollateralResponse.Tags.PriceType]);
};

CollateralResponse.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[CollateralResponse.Tags.AccruedInterestAmt]);
};

CollateralResponse.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[CollateralResponse.Tags.EndAccruedInterestAmt]);
};

CollateralResponse.prototype.startCash = function () {
  return new StartCash(this.message.tags[CollateralResponse.Tags.StartCash]);
};

CollateralResponse.prototype.endCash = function () {
  return new EndCash(this.message.tags[CollateralResponse.Tags.EndCash]);
};

CollateralResponse.prototype.text = function () {
  return new Text(this.message.tags[CollateralResponse.Tags.Text]);
};

CollateralResponse.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[CollateralResponse.Tags.EncodedTextLen]);
};

CollateralResponse.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[CollateralResponse.Tags.EncodedText]);
};

CollateralResponse.prototype.collApplType = function () {
  return new CollApplType(this.message.tags[CollateralResponse.Tags.CollApplType]);
};

CollateralResponse.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[CollateralResponse.Tags.FinancialStatus]);
};

CollateralResponse.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[CollateralResponse.Tags.ClearingBusinessDate]);
};

CollateralResponse.Tags = {
  Parties: '453',
  ExecCollGrp: '124',
  TrdCollGrp: '897',
  Instrument: '55',
  FinancingDetails: '913',
  InstrmtLegGrp: '555',
  UndInstrmtCollGrp: '711',
  TrdRegTimestamps: '768',
  MiscFeesGrp: '136',
  SpreadOrBenchmarkCurveData: '218',
  Stipulations: '232',
  CollRespID: '904',
  CollAsgnID: '902',
  CollReqID: '894',
  CollAsgnReason: '895',
  CollAsgnTransType: '903',
  CollAsgnRespType: '905',
  CollAsgnRejectReason: '906',
  TransactTime: '60',
  Account: '1',
  AccountType: '581',
  ClOrdID: '11',
  OrderID: '37',
  SecondaryOrderID: '198',
  SecondaryClOrdID: '526',
  SettlDate: '64',
  Quantity: '53',
  QtyType: '854',
  Currency: '15',
  MarginExcess: '899',
  TotalNetValue: '900',
  CashOutstanding: '901',
  Side: '54',
  Price: '44',
  PriceType: '423',
  AccruedInterestAmt: '159',
  EndAccruedInterestAmt: '920',
  StartCash: '921',
  EndCash: '922',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  CollApplType: '1043',
  FinancialStatus: '291',
  ClearingBusinessDate: '715',
};

CollateralResponse.msgType = 'AZ';

module.exports = CollateralResponse;
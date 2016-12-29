var Parties = require('../components/Parties');
var PreAllocGrp = require('../components/PreAllocGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var Stipulations = require('../components/Stipulations');
var OrderQtyData = require('../components/OrderQtyData');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var CommissionData = require('../components/CommissionData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var DisplayInstruction = require('../components/DisplayInstruction');
var TriggeringInstruction = require('../components/TriggeringInstruction');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var DayBookingInst = require('../fields/DayBookingInst');
var BookingUnit = require('../fields/BookingUnit');
var PreallocMethod = require('../fields/PreallocMethod');
var AllocID = require('../fields/AllocID');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var CashMargin = require('../fields/CashMargin');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var HandlInst = require('../fields/HandlInst');
var ExecInst = require('../fields/ExecInst');
var MinQty = require('../fields/MinQty');
var MaxFloor = require('../fields/MaxFloor');
var ExDestination = require('../fields/ExDestination');
var ProcessCode = require('../fields/ProcessCode');
var PrevClosePx = require('../fields/PrevClosePx');
var Side = require('../fields/Side');
var LocateReqd = require('../fields/LocateReqd');
var TransactTime = require('../fields/TransactTime');
var QtyType = require('../fields/QtyType');
var OrdType = require('../fields/OrdType');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var StopPx = require('../fields/StopPx');
var Currency = require('../fields/Currency');
var ComplianceID = require('../fields/ComplianceID');
var SolicitedFlag = require('../fields/SolicitedFlag');
var IOIID = require('../fields/IOIID');
var QuoteID = require('../fields/QuoteID');
var TimeInForce = require('../fields/TimeInForce');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var GTBookingInst = require('../fields/GTBookingInst');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ForexReq = require('../fields/ForexReq');
var SettlCurrency = require('../fields/SettlCurrency');
var BookingType = require('../fields/BookingType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var Price2 = require('../fields/Price2');
var PositionEffect = require('../fields/PositionEffect');
var CoveredOrUncovered = require('../fields/CoveredOrUncovered');
var MaxShow = require('../fields/MaxShow');
var TargetStrategy = require('../fields/TargetStrategy');
var TargetStrategyParameters = require('../fields/TargetStrategyParameters');
var ParticipationRate = require('../fields/ParticipationRate');
var CancellationRights = require('../fields/CancellationRights');
var MoneyLaunderingStatus = require('../fields/MoneyLaunderingStatus');
var RegistID = require('../fields/RegistID');
var Designation = require('../fields/Designation');
var ManualOrderIndicator = require('../fields/ManualOrderIndicator');
var CustDirectedOrder = require('../fields/CustDirectedOrder');
var ReceivedDeptID = require('../fields/ReceivedDeptID');
var CustOrderHandlingInst = require('../fields/CustOrderHandlingInst');
var OrderHandlingInstSource = require('../fields/OrderHandlingInstSource');
var MatchIncrement = require('../fields/MatchIncrement');
var MaxPriceLevels = require('../fields/MaxPriceLevels');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var RefOrderID = require('../fields/RefOrderID');
var RefOrderIDSource = require('../fields/RefOrderIDSource');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');

function NewOrderSingle (newOrderSingle) {
  this.message = newOrderSingle;
}

NewOrderSingle.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.Parties] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

NewOrderSingle.prototype.preAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.PreAllocGrp] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.PreAllocGrp]
    .map(function (preAllocGrp) {
      return new PreAllocGrp(preAllocGrp);
  });
};

NewOrderSingle.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

NewOrderSingle.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.Instrument] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

NewOrderSingle.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

NewOrderSingle.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

NewOrderSingle.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.Stipulations] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

NewOrderSingle.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

NewOrderSingle.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

NewOrderSingle.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.YieldData] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

NewOrderSingle.prototype.commissionData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.CommissionData] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.CommissionData]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

NewOrderSingle.prototype.pegInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.PegInstructions] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

NewOrderSingle.prototype.discretionInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.DiscretionInstructions] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

NewOrderSingle.prototype.strategyParametersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.StrategyParametersGrp] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

NewOrderSingle.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

NewOrderSingle.prototype.displayInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.DisplayInstruction] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

NewOrderSingle.prototype.triggeringInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderSingle.Tags.TriggeringInstruction] === undefined) return null;
  return this.message.groups[NewOrderSingle.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

NewOrderSingle.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[NewOrderSingle.Tags.ClOrdID]);
};

NewOrderSingle.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[NewOrderSingle.Tags.SecondaryClOrdID]);
};

NewOrderSingle.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[NewOrderSingle.Tags.ClOrdLinkID]);
};

NewOrderSingle.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[NewOrderSingle.Tags.TradeOriginationDate]);
};

NewOrderSingle.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[NewOrderSingle.Tags.TradeDate]);
};

NewOrderSingle.prototype.account = function () {
  return new Account(this.message.tags[NewOrderSingle.Tags.Account]);
};

NewOrderSingle.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[NewOrderSingle.Tags.AcctIDSource]);
};

NewOrderSingle.prototype.accountType = function () {
  return new AccountType(this.message.tags[NewOrderSingle.Tags.AccountType]);
};

NewOrderSingle.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[NewOrderSingle.Tags.DayBookingInst]);
};

NewOrderSingle.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[NewOrderSingle.Tags.BookingUnit]);
};

NewOrderSingle.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[NewOrderSingle.Tags.PreallocMethod]);
};

NewOrderSingle.prototype.allocId = function () {
  return new AllocID(this.message.tags[NewOrderSingle.Tags.AllocID]);
};

NewOrderSingle.prototype.settlType = function () {
  return new SettlType(this.message.tags[NewOrderSingle.Tags.SettlType]);
};

NewOrderSingle.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[NewOrderSingle.Tags.SettlDate]);
};

NewOrderSingle.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[NewOrderSingle.Tags.CashMargin]);
};

NewOrderSingle.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[NewOrderSingle.Tags.ClearingFeeIndicator]);
};

NewOrderSingle.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[NewOrderSingle.Tags.HandlInst]);
};

NewOrderSingle.prototype.execInst = function () {
  return new ExecInst(this.message.tags[NewOrderSingle.Tags.ExecInst]);
};

NewOrderSingle.prototype.minQty = function () {
  return new MinQty(this.message.tags[NewOrderSingle.Tags.MinQty]);
};

NewOrderSingle.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[NewOrderSingle.Tags.MaxFloor]);
};

NewOrderSingle.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[NewOrderSingle.Tags.ExDestination]);
};

NewOrderSingle.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[NewOrderSingle.Tags.ProcessCode]);
};

NewOrderSingle.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[NewOrderSingle.Tags.PrevClosePx]);
};

NewOrderSingle.prototype.side = function () {
  return new Side(this.message.tags[NewOrderSingle.Tags.Side]);
};

NewOrderSingle.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[NewOrderSingle.Tags.LocateReqd]);
};

NewOrderSingle.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[NewOrderSingle.Tags.TransactTime]);
};

NewOrderSingle.prototype.qtyType = function () {
  return new QtyType(this.message.tags[NewOrderSingle.Tags.QtyType]);
};

NewOrderSingle.prototype.ordType = function () {
  return new OrdType(this.message.tags[NewOrderSingle.Tags.OrdType]);
};

NewOrderSingle.prototype.priceType = function () {
  return new PriceType(this.message.tags[NewOrderSingle.Tags.PriceType]);
};

NewOrderSingle.prototype.price = function () {
  return new Price(this.message.tags[NewOrderSingle.Tags.Price]);
};

NewOrderSingle.prototype.stopPx = function () {
  return new StopPx(this.message.tags[NewOrderSingle.Tags.StopPx]);
};

NewOrderSingle.prototype.currency = function () {
  return new Currency(this.message.tags[NewOrderSingle.Tags.Currency]);
};

NewOrderSingle.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[NewOrderSingle.Tags.ComplianceID]);
};

NewOrderSingle.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[NewOrderSingle.Tags.SolicitedFlag]);
};

NewOrderSingle.prototype.ioiid = function () {
  return new IOIID(this.message.tags[NewOrderSingle.Tags.IOIID]);
};

NewOrderSingle.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[NewOrderSingle.Tags.QuoteID]);
};

NewOrderSingle.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[NewOrderSingle.Tags.TimeInForce]);
};

NewOrderSingle.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[NewOrderSingle.Tags.EffectiveTime]);
};

NewOrderSingle.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[NewOrderSingle.Tags.ExpireDate]);
};

NewOrderSingle.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[NewOrderSingle.Tags.ExpireTime]);
};

NewOrderSingle.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[NewOrderSingle.Tags.GTBookingInst]);
};

NewOrderSingle.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[NewOrderSingle.Tags.OrderCapacity]);
};

NewOrderSingle.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[NewOrderSingle.Tags.OrderRestrictions]);
};

NewOrderSingle.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[NewOrderSingle.Tags.CustOrderCapacity]);
};

NewOrderSingle.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[NewOrderSingle.Tags.ForexReq]);
};

NewOrderSingle.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[NewOrderSingle.Tags.SettlCurrency]);
};

NewOrderSingle.prototype.bookingType = function () {
  return new BookingType(this.message.tags[NewOrderSingle.Tags.BookingType]);
};

NewOrderSingle.prototype.text = function () {
  return new Text(this.message.tags[NewOrderSingle.Tags.Text]);
};

NewOrderSingle.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[NewOrderSingle.Tags.EncodedTextLen]);
};

NewOrderSingle.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[NewOrderSingle.Tags.EncodedText]);
};

NewOrderSingle.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[NewOrderSingle.Tags.SettlDate2]);
};

NewOrderSingle.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[NewOrderSingle.Tags.OrderQty2]);
};

NewOrderSingle.prototype.price2 = function () {
  return new Price2(this.message.tags[NewOrderSingle.Tags.Price2]);
};

NewOrderSingle.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[NewOrderSingle.Tags.PositionEffect]);
};

NewOrderSingle.prototype.coveredOrUncovered = function () {
  return new CoveredOrUncovered(this.message.tags[NewOrderSingle.Tags.CoveredOrUncovered]);
};

NewOrderSingle.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[NewOrderSingle.Tags.MaxShow]);
};

NewOrderSingle.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[NewOrderSingle.Tags.TargetStrategy]);
};

NewOrderSingle.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[NewOrderSingle.Tags.TargetStrategyParameters]);
};

NewOrderSingle.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[NewOrderSingle.Tags.ParticipationRate]);
};

NewOrderSingle.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[NewOrderSingle.Tags.CancellationRights]);
};

NewOrderSingle.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[NewOrderSingle.Tags.MoneyLaunderingStatus]);
};

NewOrderSingle.prototype.registId = function () {
  return new RegistID(this.message.tags[NewOrderSingle.Tags.RegistID]);
};

NewOrderSingle.prototype.designation = function () {
  return new Designation(this.message.tags[NewOrderSingle.Tags.Designation]);
};

NewOrderSingle.prototype.manualOrderIndicator = function () {
  return new ManualOrderIndicator(this.message.tags[NewOrderSingle.Tags.ManualOrderIndicator]);
};

NewOrderSingle.prototype.custDirectedOrder = function () {
  return new CustDirectedOrder(this.message.tags[NewOrderSingle.Tags.CustDirectedOrder]);
};

NewOrderSingle.prototype.receivedDeptId = function () {
  return new ReceivedDeptID(this.message.tags[NewOrderSingle.Tags.ReceivedDeptID]);
};

NewOrderSingle.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[NewOrderSingle.Tags.CustOrderHandlingInst]);
};

NewOrderSingle.prototype.orderHandlingInstSource = function () {
  return new OrderHandlingInstSource(this.message.tags[NewOrderSingle.Tags.OrderHandlingInstSource]);
};

NewOrderSingle.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[NewOrderSingle.Tags.MatchIncrement]);
};

NewOrderSingle.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[NewOrderSingle.Tags.MaxPriceLevels]);
};

NewOrderSingle.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[NewOrderSingle.Tags.PriceProtectionScope]);
};

NewOrderSingle.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[NewOrderSingle.Tags.PreTradeAnonymity]);
};

NewOrderSingle.prototype.refOrderId = function () {
  return new RefOrderID(this.message.tags[NewOrderSingle.Tags.RefOrderID]);
};

NewOrderSingle.prototype.refOrderIdsource = function () {
  return new RefOrderIDSource(this.message.tags[NewOrderSingle.Tags.RefOrderIDSource]);
};

NewOrderSingle.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[NewOrderSingle.Tags.ExDestinationIDSource]);
};

NewOrderSingle.Tags = {
  Parties: '453',
  PreAllocGrp: '78',
  TrdgSesGrp: '386',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  Stipulations: '232',
  OrderQtyData: '38',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  CommissionData: '12',
  PegInstructions: '211',
  DiscretionInstructions: '388',
  StrategyParametersGrp: '957',
  TrdRegTimestamps: '768',
  DisplayInstruction: '1082',
  TriggeringInstruction: '1100',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  ClOrdLinkID: '583',
  TradeOriginationDate: '229',
  TradeDate: '75',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  DayBookingInst: '589',
  BookingUnit: '590',
  PreallocMethod: '591',
  AllocID: '70',
  SettlType: '63',
  SettlDate: '64',
  CashMargin: '544',
  ClearingFeeIndicator: '635',
  HandlInst: '21',
  ExecInst: '18',
  MinQty: '110',
  MaxFloor: '111',
  ExDestination: '100',
  ProcessCode: '81',
  PrevClosePx: '140',
  Side: '54',
  LocateReqd: '114',
  TransactTime: '60',
  QtyType: '854',
  OrdType: '40',
  PriceType: '423',
  Price: '44',
  StopPx: '99',
  Currency: '15',
  ComplianceID: '376',
  SolicitedFlag: '377',
  IOIID: '23',
  QuoteID: '117',
  TimeInForce: '59',
  EffectiveTime: '168',
  ExpireDate: '432',
  ExpireTime: '126',
  GTBookingInst: '427',
  OrderCapacity: '528',
  OrderRestrictions: '529',
  CustOrderCapacity: '582',
  ForexReq: '121',
  SettlCurrency: '120',
  BookingType: '775',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  SettlDate2: '193',
  OrderQty2: '192',
  Price2: '640',
  PositionEffect: '77',
  CoveredOrUncovered: '203',
  MaxShow: '210',
  TargetStrategy: '847',
  TargetStrategyParameters: '848',
  ParticipationRate: '849',
  CancellationRights: '480',
  MoneyLaunderingStatus: '481',
  RegistID: '513',
  Designation: '494',
  ManualOrderIndicator: '1028',
  CustDirectedOrder: '1029',
  ReceivedDeptID: '1030',
  CustOrderHandlingInst: '1031',
  OrderHandlingInstSource: '1032',
  MatchIncrement: '1089',
  MaxPriceLevels: '1090',
  PriceProtectionScope: '1092',
  PreTradeAnonymity: '1091',
  RefOrderID: '1080',
  RefOrderIDSource: '1081',
  ExDestinationIDSource: '1133',
};

NewOrderSingle.msgType = 'D';

module.exports = NewOrderSingle;
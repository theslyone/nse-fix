var Parties = require('../components/Parties');
var PreAllocGrp = require('../components/PreAllocGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var CommissionData = require('../components/CommissionData');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var DisplayInstruction = require('../components/DisplayInstruction');
var TriggeringInstruction = require('../components/TriggeringInstruction');
var OrderID = require('../fields/OrderID');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var OrigClOrdID = require('../fields/OrigClOrdID');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var ListID = require('../fields/ListID');
var OrigOrdModTime = require('../fields/OrigOrdModTime');
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
var Side = require('../fields/Side');
var TransactTime = require('../fields/TransactTime');
var QtyType = require('../fields/QtyType');
var OrdType = require('../fields/OrdType');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var StopPx = require('../fields/StopPx');
var TargetStrategy = require('../fields/TargetStrategy');
var TargetStrategyParameters = require('../fields/TargetStrategyParameters');
var ParticipationRate = require('../fields/ParticipationRate');
var ComplianceID = require('../fields/ComplianceID');
var SolicitedFlag = require('../fields/SolicitedFlag');
var Currency = require('../fields/Currency');
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
var LocateReqd = require('../fields/LocateReqd');
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
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');

function OrderCancelReplaceRequest (orderCancelReplaceRequest) {
  this.message = orderCancelReplaceRequest;
}

OrderCancelReplaceRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderCancelReplaceRequest.prototype.preAllocGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.PreAllocGrp] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.PreAllocGrp]
    .map(function (preAllocGrp) {
      return new PreAllocGrp(preAllocGrp);
  });
};

OrderCancelReplaceRequest.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

OrderCancelReplaceRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderCancelReplaceRequest.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

OrderCancelReplaceRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

OrderCancelReplaceRequest.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

OrderCancelReplaceRequest.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

OrderCancelReplaceRequest.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.YieldData] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

OrderCancelReplaceRequest.prototype.pegInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.PegInstructions] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

OrderCancelReplaceRequest.prototype.discretionInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.DiscretionInstructions] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

OrderCancelReplaceRequest.prototype.commissionData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.CommissionData] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.CommissionData]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

OrderCancelReplaceRequest.prototype.strategyParametersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.StrategyParametersGrp] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

OrderCancelReplaceRequest.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

OrderCancelReplaceRequest.prototype.displayInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.DisplayInstruction] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

OrderCancelReplaceRequest.prototype.triggeringInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderCancelReplaceRequest.Tags.TriggeringInstruction] === undefined) return null;
  return this.message.groups[OrderCancelReplaceRequest.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

OrderCancelReplaceRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderCancelReplaceRequest.Tags.OrderID]);
};

OrderCancelReplaceRequest.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[OrderCancelReplaceRequest.Tags.TradeOriginationDate]);
};

OrderCancelReplaceRequest.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[OrderCancelReplaceRequest.Tags.TradeDate]);
};

OrderCancelReplaceRequest.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[OrderCancelReplaceRequest.Tags.OrigClOrdID]);
};

OrderCancelReplaceRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[OrderCancelReplaceRequest.Tags.ClOrdID]);
};

OrderCancelReplaceRequest.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[OrderCancelReplaceRequest.Tags.SecondaryClOrdID]);
};

OrderCancelReplaceRequest.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[OrderCancelReplaceRequest.Tags.ClOrdLinkID]);
};

OrderCancelReplaceRequest.prototype.listId = function () {
  return new ListID(this.message.tags[OrderCancelReplaceRequest.Tags.ListID]);
};

OrderCancelReplaceRequest.prototype.origOrdModTime = function () {
  return new OrigOrdModTime(this.message.tags[OrderCancelReplaceRequest.Tags.OrigOrdModTime]);
};

OrderCancelReplaceRequest.prototype.account = function () {
  return new Account(this.message.tags[OrderCancelReplaceRequest.Tags.Account]);
};

OrderCancelReplaceRequest.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[OrderCancelReplaceRequest.Tags.AcctIDSource]);
};

OrderCancelReplaceRequest.prototype.accountType = function () {
  return new AccountType(this.message.tags[OrderCancelReplaceRequest.Tags.AccountType]);
};

OrderCancelReplaceRequest.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[OrderCancelReplaceRequest.Tags.DayBookingInst]);
};

OrderCancelReplaceRequest.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[OrderCancelReplaceRequest.Tags.BookingUnit]);
};

OrderCancelReplaceRequest.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[OrderCancelReplaceRequest.Tags.PreallocMethod]);
};

OrderCancelReplaceRequest.prototype.allocId = function () {
  return new AllocID(this.message.tags[OrderCancelReplaceRequest.Tags.AllocID]);
};

OrderCancelReplaceRequest.prototype.settlType = function () {
  return new SettlType(this.message.tags[OrderCancelReplaceRequest.Tags.SettlType]);
};

OrderCancelReplaceRequest.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[OrderCancelReplaceRequest.Tags.SettlDate]);
};

OrderCancelReplaceRequest.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[OrderCancelReplaceRequest.Tags.CashMargin]);
};

OrderCancelReplaceRequest.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[OrderCancelReplaceRequest.Tags.ClearingFeeIndicator]);
};

OrderCancelReplaceRequest.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[OrderCancelReplaceRequest.Tags.HandlInst]);
};

OrderCancelReplaceRequest.prototype.execInst = function () {
  return new ExecInst(this.message.tags[OrderCancelReplaceRequest.Tags.ExecInst]);
};

OrderCancelReplaceRequest.prototype.minQty = function () {
  return new MinQty(this.message.tags[OrderCancelReplaceRequest.Tags.MinQty]);
};

OrderCancelReplaceRequest.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[OrderCancelReplaceRequest.Tags.MaxFloor]);
};

OrderCancelReplaceRequest.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[OrderCancelReplaceRequest.Tags.ExDestination]);
};

OrderCancelReplaceRequest.prototype.side = function () {
  return new Side(this.message.tags[OrderCancelReplaceRequest.Tags.Side]);
};

OrderCancelReplaceRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[OrderCancelReplaceRequest.Tags.TransactTime]);
};

OrderCancelReplaceRequest.prototype.qtyType = function () {
  return new QtyType(this.message.tags[OrderCancelReplaceRequest.Tags.QtyType]);
};

OrderCancelReplaceRequest.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrderCancelReplaceRequest.Tags.OrdType]);
};

OrderCancelReplaceRequest.prototype.priceType = function () {
  return new PriceType(this.message.tags[OrderCancelReplaceRequest.Tags.PriceType]);
};

OrderCancelReplaceRequest.prototype.price = function () {
  return new Price(this.message.tags[OrderCancelReplaceRequest.Tags.Price]);
};

OrderCancelReplaceRequest.prototype.stopPx = function () {
  return new StopPx(this.message.tags[OrderCancelReplaceRequest.Tags.StopPx]);
};

OrderCancelReplaceRequest.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[OrderCancelReplaceRequest.Tags.TargetStrategy]);
};

OrderCancelReplaceRequest.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[OrderCancelReplaceRequest.Tags.TargetStrategyParameters]);
};

OrderCancelReplaceRequest.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[OrderCancelReplaceRequest.Tags.ParticipationRate]);
};

OrderCancelReplaceRequest.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[OrderCancelReplaceRequest.Tags.ComplianceID]);
};

OrderCancelReplaceRequest.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[OrderCancelReplaceRequest.Tags.SolicitedFlag]);
};

OrderCancelReplaceRequest.prototype.currency = function () {
  return new Currency(this.message.tags[OrderCancelReplaceRequest.Tags.Currency]);
};

OrderCancelReplaceRequest.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[OrderCancelReplaceRequest.Tags.TimeInForce]);
};

OrderCancelReplaceRequest.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[OrderCancelReplaceRequest.Tags.EffectiveTime]);
};

OrderCancelReplaceRequest.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[OrderCancelReplaceRequest.Tags.ExpireDate]);
};

OrderCancelReplaceRequest.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[OrderCancelReplaceRequest.Tags.ExpireTime]);
};

OrderCancelReplaceRequest.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[OrderCancelReplaceRequest.Tags.GTBookingInst]);
};

OrderCancelReplaceRequest.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCancelReplaceRequest.Tags.OrderCapacity]);
};

OrderCancelReplaceRequest.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[OrderCancelReplaceRequest.Tags.OrderRestrictions]);
};

OrderCancelReplaceRequest.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[OrderCancelReplaceRequest.Tags.CustOrderCapacity]);
};

OrderCancelReplaceRequest.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[OrderCancelReplaceRequest.Tags.ForexReq]);
};

OrderCancelReplaceRequest.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[OrderCancelReplaceRequest.Tags.SettlCurrency]);
};

OrderCancelReplaceRequest.prototype.bookingType = function () {
  return new BookingType(this.message.tags[OrderCancelReplaceRequest.Tags.BookingType]);
};

OrderCancelReplaceRequest.prototype.text = function () {
  return new Text(this.message.tags[OrderCancelReplaceRequest.Tags.Text]);
};

OrderCancelReplaceRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[OrderCancelReplaceRequest.Tags.EncodedTextLen]);
};

OrderCancelReplaceRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[OrderCancelReplaceRequest.Tags.EncodedText]);
};

OrderCancelReplaceRequest.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[OrderCancelReplaceRequest.Tags.SettlDate2]);
};

OrderCancelReplaceRequest.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[OrderCancelReplaceRequest.Tags.OrderQty2]);
};

OrderCancelReplaceRequest.prototype.price2 = function () {
  return new Price2(this.message.tags[OrderCancelReplaceRequest.Tags.Price2]);
};

OrderCancelReplaceRequest.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[OrderCancelReplaceRequest.Tags.PositionEffect]);
};

OrderCancelReplaceRequest.prototype.coveredOrUncovered = function () {
  return new CoveredOrUncovered(this.message.tags[OrderCancelReplaceRequest.Tags.CoveredOrUncovered]);
};

OrderCancelReplaceRequest.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[OrderCancelReplaceRequest.Tags.MaxShow]);
};

OrderCancelReplaceRequest.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[OrderCancelReplaceRequest.Tags.LocateReqd]);
};

OrderCancelReplaceRequest.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[OrderCancelReplaceRequest.Tags.CancellationRights]);
};

OrderCancelReplaceRequest.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[OrderCancelReplaceRequest.Tags.MoneyLaunderingStatus]);
};

OrderCancelReplaceRequest.prototype.registId = function () {
  return new RegistID(this.message.tags[OrderCancelReplaceRequest.Tags.RegistID]);
};

OrderCancelReplaceRequest.prototype.designation = function () {
  return new Designation(this.message.tags[OrderCancelReplaceRequest.Tags.Designation]);
};

OrderCancelReplaceRequest.prototype.manualOrderIndicator = function () {
  return new ManualOrderIndicator(this.message.tags[OrderCancelReplaceRequest.Tags.ManualOrderIndicator]);
};

OrderCancelReplaceRequest.prototype.custDirectedOrder = function () {
  return new CustDirectedOrder(this.message.tags[OrderCancelReplaceRequest.Tags.CustDirectedOrder]);
};

OrderCancelReplaceRequest.prototype.receivedDeptId = function () {
  return new ReceivedDeptID(this.message.tags[OrderCancelReplaceRequest.Tags.ReceivedDeptID]);
};

OrderCancelReplaceRequest.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[OrderCancelReplaceRequest.Tags.CustOrderHandlingInst]);
};

OrderCancelReplaceRequest.prototype.orderHandlingInstSource = function () {
  return new OrderHandlingInstSource(this.message.tags[OrderCancelReplaceRequest.Tags.OrderHandlingInstSource]);
};

OrderCancelReplaceRequest.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[OrderCancelReplaceRequest.Tags.MatchIncrement]);
};

OrderCancelReplaceRequest.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[OrderCancelReplaceRequest.Tags.MaxPriceLevels]);
};

OrderCancelReplaceRequest.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[OrderCancelReplaceRequest.Tags.PriceProtectionScope]);
};

OrderCancelReplaceRequest.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[OrderCancelReplaceRequest.Tags.PreTradeAnonymity]);
};

OrderCancelReplaceRequest.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[OrderCancelReplaceRequest.Tags.ExDestinationIDSource]);
};

OrderCancelReplaceRequest.Tags = {
  Parties: '453',
  PreAllocGrp: '78',
  TrdgSesGrp: '386',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  OrderQtyData: '38',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  PegInstructions: '211',
  DiscretionInstructions: '388',
  CommissionData: '12',
  StrategyParametersGrp: '957',
  TrdRegTimestamps: '768',
  DisplayInstruction: '1082',
  TriggeringInstruction: '1100',
  OrderID: '37',
  TradeOriginationDate: '229',
  TradeDate: '75',
  OrigClOrdID: '41',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  ClOrdLinkID: '583',
  ListID: '66',
  OrigOrdModTime: '586',
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
  Side: '54',
  TransactTime: '60',
  QtyType: '854',
  OrdType: '40',
  PriceType: '423',
  Price: '44',
  StopPx: '99',
  TargetStrategy: '847',
  TargetStrategyParameters: '848',
  ParticipationRate: '849',
  ComplianceID: '376',
  SolicitedFlag: '377',
  Currency: '15',
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
  LocateReqd: '114',
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
  ExDestinationIDSource: '1133',
};

OrderCancelReplaceRequest.msgType = 'G';

module.exports = OrderCancelReplaceRequest;
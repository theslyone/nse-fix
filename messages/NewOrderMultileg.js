var Parties = require('../components/Parties');
var PreAllocMlegGrp = require('../components/PreAllocMlegGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var LegOrdGrp = require('../components/LegOrdGrp');
var OrderQtyData = require('../components/OrderQtyData');
var CommissionData = require('../components/CommissionData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
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
var Side = require('../fields/Side');
var PrevClosePx = require('../fields/PrevClosePx');
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
var MultiLegRptTypeReq = require('../fields/MultiLegRptTypeReq');
var SwapPoints = require('../fields/SwapPoints');
var MatchIncrement = require('../fields/MatchIncrement');
var MaxPriceLevels = require('../fields/MaxPriceLevels');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var RefOrderID = require('../fields/RefOrderID');
var RefOrderIDSource = require('../fields/RefOrderIDSource');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');
var MultilegModel = require('../fields/MultilegModel');
var MultilegPriceMethod = require('../fields/MultilegPriceMethod');
var RiskFreeRate = require('../fields/RiskFreeRate');

function NewOrderMultileg (newOrderMultileg) {
  this.message = newOrderMultileg;
}

NewOrderMultileg.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.Parties] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

NewOrderMultileg.prototype.preAllocMlegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.PreAllocMlegGrp] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.PreAllocMlegGrp]
    .map(function (preAllocMlegGrp) {
      return new PreAllocMlegGrp(preAllocMlegGrp);
  });
};

NewOrderMultileg.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

NewOrderMultileg.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.Instrument] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

NewOrderMultileg.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

NewOrderMultileg.prototype.legOrdGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.LegOrdGrp] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.LegOrdGrp]
    .map(function (legOrdGrp) {
      return new LegOrdGrp(legOrdGrp);
  });
};

NewOrderMultileg.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

NewOrderMultileg.prototype.commissionData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.CommissionData] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.CommissionData]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

NewOrderMultileg.prototype.pegInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.PegInstructions] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

NewOrderMultileg.prototype.discretionInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.DiscretionInstructions] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

NewOrderMultileg.prototype.strategyParametersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.StrategyParametersGrp] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

NewOrderMultileg.prototype.displayInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.DisplayInstruction] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

NewOrderMultileg.prototype.triggeringInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderMultileg.Tags.TriggeringInstruction] === undefined) return null;
  return this.message.groups[NewOrderMultileg.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

NewOrderMultileg.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[NewOrderMultileg.Tags.ClOrdID]);
};

NewOrderMultileg.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[NewOrderMultileg.Tags.SecondaryClOrdID]);
};

NewOrderMultileg.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[NewOrderMultileg.Tags.ClOrdLinkID]);
};

NewOrderMultileg.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[NewOrderMultileg.Tags.TradeOriginationDate]);
};

NewOrderMultileg.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[NewOrderMultileg.Tags.TradeDate]);
};

NewOrderMultileg.prototype.account = function () {
  return new Account(this.message.tags[NewOrderMultileg.Tags.Account]);
};

NewOrderMultileg.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[NewOrderMultileg.Tags.AcctIDSource]);
};

NewOrderMultileg.prototype.accountType = function () {
  return new AccountType(this.message.tags[NewOrderMultileg.Tags.AccountType]);
};

NewOrderMultileg.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[NewOrderMultileg.Tags.DayBookingInst]);
};

NewOrderMultileg.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[NewOrderMultileg.Tags.BookingUnit]);
};

NewOrderMultileg.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[NewOrderMultileg.Tags.PreallocMethod]);
};

NewOrderMultileg.prototype.allocId = function () {
  return new AllocID(this.message.tags[NewOrderMultileg.Tags.AllocID]);
};

NewOrderMultileg.prototype.settlType = function () {
  return new SettlType(this.message.tags[NewOrderMultileg.Tags.SettlType]);
};

NewOrderMultileg.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[NewOrderMultileg.Tags.SettlDate]);
};

NewOrderMultileg.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[NewOrderMultileg.Tags.CashMargin]);
};

NewOrderMultileg.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[NewOrderMultileg.Tags.ClearingFeeIndicator]);
};

NewOrderMultileg.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[NewOrderMultileg.Tags.HandlInst]);
};

NewOrderMultileg.prototype.execInst = function () {
  return new ExecInst(this.message.tags[NewOrderMultileg.Tags.ExecInst]);
};

NewOrderMultileg.prototype.minQty = function () {
  return new MinQty(this.message.tags[NewOrderMultileg.Tags.MinQty]);
};

NewOrderMultileg.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[NewOrderMultileg.Tags.MaxFloor]);
};

NewOrderMultileg.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[NewOrderMultileg.Tags.ExDestination]);
};

NewOrderMultileg.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[NewOrderMultileg.Tags.ProcessCode]);
};

NewOrderMultileg.prototype.side = function () {
  return new Side(this.message.tags[NewOrderMultileg.Tags.Side]);
};

NewOrderMultileg.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[NewOrderMultileg.Tags.PrevClosePx]);
};

NewOrderMultileg.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[NewOrderMultileg.Tags.LocateReqd]);
};

NewOrderMultileg.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[NewOrderMultileg.Tags.TransactTime]);
};

NewOrderMultileg.prototype.qtyType = function () {
  return new QtyType(this.message.tags[NewOrderMultileg.Tags.QtyType]);
};

NewOrderMultileg.prototype.ordType = function () {
  return new OrdType(this.message.tags[NewOrderMultileg.Tags.OrdType]);
};

NewOrderMultileg.prototype.priceType = function () {
  return new PriceType(this.message.tags[NewOrderMultileg.Tags.PriceType]);
};

NewOrderMultileg.prototype.price = function () {
  return new Price(this.message.tags[NewOrderMultileg.Tags.Price]);
};

NewOrderMultileg.prototype.stopPx = function () {
  return new StopPx(this.message.tags[NewOrderMultileg.Tags.StopPx]);
};

NewOrderMultileg.prototype.currency = function () {
  return new Currency(this.message.tags[NewOrderMultileg.Tags.Currency]);
};

NewOrderMultileg.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[NewOrderMultileg.Tags.ComplianceID]);
};

NewOrderMultileg.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[NewOrderMultileg.Tags.SolicitedFlag]);
};

NewOrderMultileg.prototype.ioiid = function () {
  return new IOIID(this.message.tags[NewOrderMultileg.Tags.IOIID]);
};

NewOrderMultileg.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[NewOrderMultileg.Tags.QuoteID]);
};

NewOrderMultileg.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[NewOrderMultileg.Tags.TimeInForce]);
};

NewOrderMultileg.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[NewOrderMultileg.Tags.EffectiveTime]);
};

NewOrderMultileg.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[NewOrderMultileg.Tags.ExpireDate]);
};

NewOrderMultileg.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[NewOrderMultileg.Tags.ExpireTime]);
};

NewOrderMultileg.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[NewOrderMultileg.Tags.GTBookingInst]);
};

NewOrderMultileg.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[NewOrderMultileg.Tags.OrderCapacity]);
};

NewOrderMultileg.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[NewOrderMultileg.Tags.OrderRestrictions]);
};

NewOrderMultileg.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[NewOrderMultileg.Tags.CustOrderCapacity]);
};

NewOrderMultileg.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[NewOrderMultileg.Tags.ForexReq]);
};

NewOrderMultileg.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[NewOrderMultileg.Tags.SettlCurrency]);
};

NewOrderMultileg.prototype.bookingType = function () {
  return new BookingType(this.message.tags[NewOrderMultileg.Tags.BookingType]);
};

NewOrderMultileg.prototype.text = function () {
  return new Text(this.message.tags[NewOrderMultileg.Tags.Text]);
};

NewOrderMultileg.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[NewOrderMultileg.Tags.EncodedTextLen]);
};

NewOrderMultileg.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[NewOrderMultileg.Tags.EncodedText]);
};

NewOrderMultileg.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[NewOrderMultileg.Tags.PositionEffect]);
};

NewOrderMultileg.prototype.coveredOrUncovered = function () {
  return new CoveredOrUncovered(this.message.tags[NewOrderMultileg.Tags.CoveredOrUncovered]);
};

NewOrderMultileg.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[NewOrderMultileg.Tags.MaxShow]);
};

NewOrderMultileg.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[NewOrderMultileg.Tags.TargetStrategy]);
};

NewOrderMultileg.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[NewOrderMultileg.Tags.TargetStrategyParameters]);
};

NewOrderMultileg.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[NewOrderMultileg.Tags.ParticipationRate]);
};

NewOrderMultileg.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[NewOrderMultileg.Tags.CancellationRights]);
};

NewOrderMultileg.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[NewOrderMultileg.Tags.MoneyLaunderingStatus]);
};

NewOrderMultileg.prototype.registId = function () {
  return new RegistID(this.message.tags[NewOrderMultileg.Tags.RegistID]);
};

NewOrderMultileg.prototype.designation = function () {
  return new Designation(this.message.tags[NewOrderMultileg.Tags.Designation]);
};

NewOrderMultileg.prototype.multiLegRptTypeReq = function () {
  return new MultiLegRptTypeReq(this.message.tags[NewOrderMultileg.Tags.MultiLegRptTypeReq]);
};

NewOrderMultileg.prototype.swapPoints = function () {
  return new SwapPoints(this.message.tags[NewOrderMultileg.Tags.SwapPoints]);
};

NewOrderMultileg.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[NewOrderMultileg.Tags.MatchIncrement]);
};

NewOrderMultileg.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[NewOrderMultileg.Tags.MaxPriceLevels]);
};

NewOrderMultileg.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[NewOrderMultileg.Tags.PriceProtectionScope]);
};

NewOrderMultileg.prototype.refOrderId = function () {
  return new RefOrderID(this.message.tags[NewOrderMultileg.Tags.RefOrderID]);
};

NewOrderMultileg.prototype.refOrderIdsource = function () {
  return new RefOrderIDSource(this.message.tags[NewOrderMultileg.Tags.RefOrderIDSource]);
};

NewOrderMultileg.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[NewOrderMultileg.Tags.PreTradeAnonymity]);
};

NewOrderMultileg.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[NewOrderMultileg.Tags.ExDestinationIDSource]);
};

NewOrderMultileg.prototype.multilegModel = function () {
  return new MultilegModel(this.message.tags[NewOrderMultileg.Tags.MultilegModel]);
};

NewOrderMultileg.prototype.multilegPriceMethod = function () {
  return new MultilegPriceMethod(this.message.tags[NewOrderMultileg.Tags.MultilegPriceMethod]);
};

NewOrderMultileg.prototype.riskFreeRate = function () {
  return new RiskFreeRate(this.message.tags[NewOrderMultileg.Tags.RiskFreeRate]);
};

NewOrderMultileg.Tags = {
  Parties: '453',
  PreAllocMlegGrp: '78',
  TrdgSesGrp: '386',
  Instrument: '55',
  UndInstrmtGrp: '711',
  LegOrdGrp: '555',
  OrderQtyData: '38',
  CommissionData: '12',
  PegInstructions: '211',
  DiscretionInstructions: '388',
  StrategyParametersGrp: '957',
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
  Side: '54',
  PrevClosePx: '140',
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
  MultiLegRptTypeReq: '563',
  SwapPoints: '1069',
  MatchIncrement: '1089',
  MaxPriceLevels: '1090',
  PriceProtectionScope: '1092',
  RefOrderID: '1080',
  RefOrderIDSource: '1081',
  PreTradeAnonymity: '1091',
  ExDestinationIDSource: '1133',
  MultilegModel: '1377',
  MultilegPriceMethod: '1378',
  RiskFreeRate: '1190',
};

NewOrderMultileg.msgType = 'AB';

module.exports = NewOrderMultileg;
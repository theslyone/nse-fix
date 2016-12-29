var SideCrossOrdModGrp = require('../components/SideCrossOrdModGrp');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var Stipulations = require('../components/Stipulations');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
var RootParties = require('../components/RootParties');
var DisplayInstruction = require('../components/DisplayInstruction');
var TriggeringInstruction = require('../components/TriggeringInstruction');
var OrderID = require('../fields/OrderID');
var CrossID = require('../fields/CrossID');
var OrigCrossID = require('../fields/OrigCrossID');
var CrossType = require('../fields/CrossType');
var CrossPrioritization = require('../fields/CrossPrioritization');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var HandlInst = require('../fields/HandlInst');
var ExecInst = require('../fields/ExecInst');
var MinQty = require('../fields/MinQty');
var MaxFloor = require('../fields/MaxFloor');
var ExDestination = require('../fields/ExDestination');
var ProcessCode = require('../fields/ProcessCode');
var PrevClosePx = require('../fields/PrevClosePx');
var LocateReqd = require('../fields/LocateReqd');
var TransactTime = require('../fields/TransactTime');
var OrdType = require('../fields/OrdType');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var StopPx = require('../fields/StopPx');
var Currency = require('../fields/Currency');
var ComplianceID = require('../fields/ComplianceID');
var IOIID = require('../fields/IOIID');
var QuoteID = require('../fields/QuoteID');
var TimeInForce = require('../fields/TimeInForce');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var GTBookingInst = require('../fields/GTBookingInst');
var MaxShow = require('../fields/MaxShow');
var TargetStrategy = require('../fields/TargetStrategy');
var TargetStrategyParameters = require('../fields/TargetStrategyParameters');
var ParticipationRate = require('../fields/ParticipationRate');
var CancellationRights = require('../fields/CancellationRights');
var MoneyLaunderingStatus = require('../fields/MoneyLaunderingStatus');
var RegistID = require('../fields/RegistID');
var Designation = require('../fields/Designation');
var HostCrossID = require('../fields/HostCrossID');
var TransBkdTime = require('../fields/TransBkdTime');
var MatchIncrement = require('../fields/MatchIncrement');
var MaxPriceLevels = require('../fields/MaxPriceLevels');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');

function CrossOrderCancelReplaceRequest (crossOrderCancelReplaceRequest) {
  this.message = crossOrderCancelReplaceRequest;
}

CrossOrderCancelReplaceRequest.prototype.sideCrossOrdModGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.SideCrossOrdModGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.SideCrossOrdModGrp]
    .map(function (sideCrossOrdModGrp) {
      return new SideCrossOrdModGrp(sideCrossOrdModGrp);
  });
};

CrossOrderCancelReplaceRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CrossOrderCancelReplaceRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

CrossOrderCancelReplaceRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CrossOrderCancelReplaceRequest.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

CrossOrderCancelReplaceRequest.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.Stipulations] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

CrossOrderCancelReplaceRequest.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

CrossOrderCancelReplaceRequest.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.YieldData] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

CrossOrderCancelReplaceRequest.prototype.pegInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.PegInstructions] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

CrossOrderCancelReplaceRequest.prototype.discretionInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.DiscretionInstructions] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

CrossOrderCancelReplaceRequest.prototype.strategyParametersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.StrategyParametersGrp] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

CrossOrderCancelReplaceRequest.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.RootParties] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

CrossOrderCancelReplaceRequest.prototype.displayInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.DisplayInstruction] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

CrossOrderCancelReplaceRequest.prototype.triggeringInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[CrossOrderCancelReplaceRequest.Tags.TriggeringInstruction] === undefined) return null;
  return this.message.groups[CrossOrderCancelReplaceRequest.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

CrossOrderCancelReplaceRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.OrderID]);
};

CrossOrderCancelReplaceRequest.prototype.crossId = function () {
  return new CrossID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.CrossID]);
};

CrossOrderCancelReplaceRequest.prototype.origCrossId = function () {
  return new OrigCrossID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.OrigCrossID]);
};

CrossOrderCancelReplaceRequest.prototype.crossType = function () {
  return new CrossType(this.message.tags[CrossOrderCancelReplaceRequest.Tags.CrossType]);
};

CrossOrderCancelReplaceRequest.prototype.crossPrioritization = function () {
  return new CrossPrioritization(this.message.tags[CrossOrderCancelReplaceRequest.Tags.CrossPrioritization]);
};

CrossOrderCancelReplaceRequest.prototype.settlType = function () {
  return new SettlType(this.message.tags[CrossOrderCancelReplaceRequest.Tags.SettlType]);
};

CrossOrderCancelReplaceRequest.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[CrossOrderCancelReplaceRequest.Tags.SettlDate]);
};

CrossOrderCancelReplaceRequest.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[CrossOrderCancelReplaceRequest.Tags.HandlInst]);
};

CrossOrderCancelReplaceRequest.prototype.execInst = function () {
  return new ExecInst(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ExecInst]);
};

CrossOrderCancelReplaceRequest.prototype.minQty = function () {
  return new MinQty(this.message.tags[CrossOrderCancelReplaceRequest.Tags.MinQty]);
};

CrossOrderCancelReplaceRequest.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[CrossOrderCancelReplaceRequest.Tags.MaxFloor]);
};

CrossOrderCancelReplaceRequest.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ExDestination]);
};

CrossOrderCancelReplaceRequest.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ProcessCode]);
};

CrossOrderCancelReplaceRequest.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[CrossOrderCancelReplaceRequest.Tags.PrevClosePx]);
};

CrossOrderCancelReplaceRequest.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[CrossOrderCancelReplaceRequest.Tags.LocateReqd]);
};

CrossOrderCancelReplaceRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CrossOrderCancelReplaceRequest.Tags.TransactTime]);
};

CrossOrderCancelReplaceRequest.prototype.ordType = function () {
  return new OrdType(this.message.tags[CrossOrderCancelReplaceRequest.Tags.OrdType]);
};

CrossOrderCancelReplaceRequest.prototype.priceType = function () {
  return new PriceType(this.message.tags[CrossOrderCancelReplaceRequest.Tags.PriceType]);
};

CrossOrderCancelReplaceRequest.prototype.price = function () {
  return new Price(this.message.tags[CrossOrderCancelReplaceRequest.Tags.Price]);
};

CrossOrderCancelReplaceRequest.prototype.stopPx = function () {
  return new StopPx(this.message.tags[CrossOrderCancelReplaceRequest.Tags.StopPx]);
};

CrossOrderCancelReplaceRequest.prototype.currency = function () {
  return new Currency(this.message.tags[CrossOrderCancelReplaceRequest.Tags.Currency]);
};

CrossOrderCancelReplaceRequest.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ComplianceID]);
};

CrossOrderCancelReplaceRequest.prototype.ioiid = function () {
  return new IOIID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.IOIID]);
};

CrossOrderCancelReplaceRequest.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.QuoteID]);
};

CrossOrderCancelReplaceRequest.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[CrossOrderCancelReplaceRequest.Tags.TimeInForce]);
};

CrossOrderCancelReplaceRequest.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[CrossOrderCancelReplaceRequest.Tags.EffectiveTime]);
};

CrossOrderCancelReplaceRequest.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ExpireDate]);
};

CrossOrderCancelReplaceRequest.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ExpireTime]);
};

CrossOrderCancelReplaceRequest.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[CrossOrderCancelReplaceRequest.Tags.GTBookingInst]);
};

CrossOrderCancelReplaceRequest.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[CrossOrderCancelReplaceRequest.Tags.MaxShow]);
};

CrossOrderCancelReplaceRequest.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[CrossOrderCancelReplaceRequest.Tags.TargetStrategy]);
};

CrossOrderCancelReplaceRequest.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[CrossOrderCancelReplaceRequest.Tags.TargetStrategyParameters]);
};

CrossOrderCancelReplaceRequest.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ParticipationRate]);
};

CrossOrderCancelReplaceRequest.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[CrossOrderCancelReplaceRequest.Tags.CancellationRights]);
};

CrossOrderCancelReplaceRequest.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[CrossOrderCancelReplaceRequest.Tags.MoneyLaunderingStatus]);
};

CrossOrderCancelReplaceRequest.prototype.registId = function () {
  return new RegistID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.RegistID]);
};

CrossOrderCancelReplaceRequest.prototype.designation = function () {
  return new Designation(this.message.tags[CrossOrderCancelReplaceRequest.Tags.Designation]);
};

CrossOrderCancelReplaceRequest.prototype.hostCrossId = function () {
  return new HostCrossID(this.message.tags[CrossOrderCancelReplaceRequest.Tags.HostCrossID]);
};

CrossOrderCancelReplaceRequest.prototype.transBkdTime = function () {
  return new TransBkdTime(this.message.tags[CrossOrderCancelReplaceRequest.Tags.TransBkdTime]);
};

CrossOrderCancelReplaceRequest.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[CrossOrderCancelReplaceRequest.Tags.MatchIncrement]);
};

CrossOrderCancelReplaceRequest.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[CrossOrderCancelReplaceRequest.Tags.MaxPriceLevels]);
};

CrossOrderCancelReplaceRequest.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[CrossOrderCancelReplaceRequest.Tags.PriceProtectionScope]);
};

CrossOrderCancelReplaceRequest.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[CrossOrderCancelReplaceRequest.Tags.ExDestinationIDSource]);
};

CrossOrderCancelReplaceRequest.Tags = {
  SideCrossOrdModGrp: '552',
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  TrdgSesGrp: '386',
  Stipulations: '232',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  PegInstructions: '211',
  DiscretionInstructions: '388',
  StrategyParametersGrp: '957',
  RootParties: '1116',
  DisplayInstruction: '1082',
  TriggeringInstruction: '1100',
  OrderID: '37',
  CrossID: '548',
  OrigCrossID: '551',
  CrossType: '549',
  CrossPrioritization: '550',
  SettlType: '63',
  SettlDate: '64',
  HandlInst: '21',
  ExecInst: '18',
  MinQty: '110',
  MaxFloor: '111',
  ExDestination: '100',
  ProcessCode: '81',
  PrevClosePx: '140',
  LocateReqd: '114',
  TransactTime: '60',
  OrdType: '40',
  PriceType: '423',
  Price: '44',
  StopPx: '99',
  Currency: '15',
  ComplianceID: '376',
  IOIID: '23',
  QuoteID: '117',
  TimeInForce: '59',
  EffectiveTime: '168',
  ExpireDate: '432',
  ExpireTime: '126',
  GTBookingInst: '427',
  MaxShow: '210',
  TargetStrategy: '847',
  TargetStrategyParameters: '848',
  ParticipationRate: '849',
  CancellationRights: '480',
  MoneyLaunderingStatus: '481',
  RegistID: '513',
  Designation: '494',
  HostCrossID: '961',
  TransBkdTime: '483',
  MatchIncrement: '1089',
  MaxPriceLevels: '1090',
  PriceProtectionScope: '1092',
  ExDestinationIDSource: '1133',
};

CrossOrderCancelReplaceRequest.msgType = 't';

module.exports = CrossOrderCancelReplaceRequest;
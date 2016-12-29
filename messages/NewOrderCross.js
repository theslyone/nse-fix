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
var CrossID = require('../fields/CrossID');
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
var TransBkdTime = require('../fields/TransBkdTime');
var MatchIncrement = require('../fields/MatchIncrement');
var MaxPriceLevels = require('../fields/MaxPriceLevels');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');

function NewOrderCross (newOrderCross) {
  this.message = newOrderCross;
}

NewOrderCross.prototype.sideCrossOrdModGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.SideCrossOrdModGrp] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.SideCrossOrdModGrp]
    .map(function (sideCrossOrdModGrp) {
      return new SideCrossOrdModGrp(sideCrossOrdModGrp);
  });
};

NewOrderCross.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.Instrument] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

NewOrderCross.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

NewOrderCross.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

NewOrderCross.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

NewOrderCross.prototype.stipulations = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.Stipulations] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

NewOrderCross.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

NewOrderCross.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.YieldData] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

NewOrderCross.prototype.pegInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.PegInstructions] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

NewOrderCross.prototype.discretionInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.DiscretionInstructions] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

NewOrderCross.prototype.strategyParametersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.StrategyParametersGrp] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

NewOrderCross.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.RootParties] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

NewOrderCross.prototype.displayInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.DisplayInstruction] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

NewOrderCross.prototype.triggeringInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NewOrderCross.Tags.TriggeringInstruction] === undefined) return null;
  return this.message.groups[NewOrderCross.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

NewOrderCross.prototype.crossId = function () {
  return new CrossID(this.message.tags[NewOrderCross.Tags.CrossID]);
};

NewOrderCross.prototype.crossType = function () {
  return new CrossType(this.message.tags[NewOrderCross.Tags.CrossType]);
};

NewOrderCross.prototype.crossPrioritization = function () {
  return new CrossPrioritization(this.message.tags[NewOrderCross.Tags.CrossPrioritization]);
};

NewOrderCross.prototype.settlType = function () {
  return new SettlType(this.message.tags[NewOrderCross.Tags.SettlType]);
};

NewOrderCross.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[NewOrderCross.Tags.SettlDate]);
};

NewOrderCross.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[NewOrderCross.Tags.HandlInst]);
};

NewOrderCross.prototype.execInst = function () {
  return new ExecInst(this.message.tags[NewOrderCross.Tags.ExecInst]);
};

NewOrderCross.prototype.minQty = function () {
  return new MinQty(this.message.tags[NewOrderCross.Tags.MinQty]);
};

NewOrderCross.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[NewOrderCross.Tags.MaxFloor]);
};

NewOrderCross.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[NewOrderCross.Tags.ExDestination]);
};

NewOrderCross.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[NewOrderCross.Tags.ProcessCode]);
};

NewOrderCross.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[NewOrderCross.Tags.PrevClosePx]);
};

NewOrderCross.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[NewOrderCross.Tags.LocateReqd]);
};

NewOrderCross.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[NewOrderCross.Tags.TransactTime]);
};

NewOrderCross.prototype.ordType = function () {
  return new OrdType(this.message.tags[NewOrderCross.Tags.OrdType]);
};

NewOrderCross.prototype.priceType = function () {
  return new PriceType(this.message.tags[NewOrderCross.Tags.PriceType]);
};

NewOrderCross.prototype.price = function () {
  return new Price(this.message.tags[NewOrderCross.Tags.Price]);
};

NewOrderCross.prototype.stopPx = function () {
  return new StopPx(this.message.tags[NewOrderCross.Tags.StopPx]);
};

NewOrderCross.prototype.currency = function () {
  return new Currency(this.message.tags[NewOrderCross.Tags.Currency]);
};

NewOrderCross.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[NewOrderCross.Tags.ComplianceID]);
};

NewOrderCross.prototype.ioiid = function () {
  return new IOIID(this.message.tags[NewOrderCross.Tags.IOIID]);
};

NewOrderCross.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[NewOrderCross.Tags.QuoteID]);
};

NewOrderCross.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[NewOrderCross.Tags.TimeInForce]);
};

NewOrderCross.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[NewOrderCross.Tags.EffectiveTime]);
};

NewOrderCross.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[NewOrderCross.Tags.ExpireDate]);
};

NewOrderCross.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[NewOrderCross.Tags.ExpireTime]);
};

NewOrderCross.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[NewOrderCross.Tags.GTBookingInst]);
};

NewOrderCross.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[NewOrderCross.Tags.MaxShow]);
};

NewOrderCross.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[NewOrderCross.Tags.TargetStrategy]);
};

NewOrderCross.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[NewOrderCross.Tags.TargetStrategyParameters]);
};

NewOrderCross.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[NewOrderCross.Tags.ParticipationRate]);
};

NewOrderCross.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[NewOrderCross.Tags.CancellationRights]);
};

NewOrderCross.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[NewOrderCross.Tags.MoneyLaunderingStatus]);
};

NewOrderCross.prototype.registId = function () {
  return new RegistID(this.message.tags[NewOrderCross.Tags.RegistID]);
};

NewOrderCross.prototype.designation = function () {
  return new Designation(this.message.tags[NewOrderCross.Tags.Designation]);
};

NewOrderCross.prototype.transBkdTime = function () {
  return new TransBkdTime(this.message.tags[NewOrderCross.Tags.TransBkdTime]);
};

NewOrderCross.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[NewOrderCross.Tags.MatchIncrement]);
};

NewOrderCross.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[NewOrderCross.Tags.MaxPriceLevels]);
};

NewOrderCross.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[NewOrderCross.Tags.PriceProtectionScope]);
};

NewOrderCross.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[NewOrderCross.Tags.ExDestinationIDSource]);
};

NewOrderCross.Tags = {
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
  CrossID: '548',
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
  TransBkdTime: '483',
  MatchIncrement: '1089',
  MaxPriceLevels: '1090',
  PriceProtectionScope: '1092',
  ExDestinationIDSource: '1133',
};

NewOrderCross.msgType = 's';

module.exports = NewOrderCross;
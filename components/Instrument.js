var SecAltIDGrp = require('../components/SecAltIDGrp');
var EvntGrp = require('../components/EvntGrp');
var InstrumentParties = require('../components/InstrumentParties');
var SecurityXML = require('../components/SecurityXML');
var Symbol = require('../fields/Symbol');
var SymbolSfx = require('../fields/SymbolSfx');
var SecurityID = require('../fields/SecurityID');
var SecurityIDSource = require('../fields/SecurityIDSource');
var Product = require('../fields/Product');
var CFICode = require('../fields/CFICode');
var SecurityType = require('../fields/SecurityType');
var SecuritySubType = require('../fields/SecuritySubType');
var MaturityMonthYear = require('../fields/MaturityMonthYear');
var MaturityDate = require('../fields/MaturityDate');
var CouponPaymentDate = require('../fields/CouponPaymentDate');
var IssueDate = require('../fields/IssueDate');
var RepoCollateralSecurityType = require('../fields/RepoCollateralSecurityType');
var RepurchaseTerm = require('../fields/RepurchaseTerm');
var RepurchaseRate = require('../fields/RepurchaseRate');
var Factor = require('../fields/Factor');
var CreditRating = require('../fields/CreditRating');
var InstrRegistry = require('../fields/InstrRegistry');
var CountryOfIssue = require('../fields/CountryOfIssue');
var StateOrProvinceOfIssue = require('../fields/StateOrProvinceOfIssue');
var LocaleOfIssue = require('../fields/LocaleOfIssue');
var RedemptionDate = require('../fields/RedemptionDate');
var StrikePrice = require('../fields/StrikePrice');
var StrikeCurrency = require('../fields/StrikeCurrency');
var OptAttribute = require('../fields/OptAttribute');
var ContractMultiplier = require('../fields/ContractMultiplier');
var CouponRate = require('../fields/CouponRate');
var SecurityExchange = require('../fields/SecurityExchange');
var Issuer = require('../fields/Issuer');
var EncodedIssuerLen = require('../fields/EncodedIssuerLen');
var EncodedIssuer = require('../fields/EncodedIssuer');
var SecurityDesc = require('../fields/SecurityDesc');
var EncodedSecurityDescLen = require('../fields/EncodedSecurityDescLen');
var EncodedSecurityDesc = require('../fields/EncodedSecurityDesc');
var Pool = require('../fields/Pool');
var ContractSettlMonth = require('../fields/ContractSettlMonth');
var CPProgram = require('../fields/CPProgram');
var CPRegType = require('../fields/CPRegType');
var DatedDate = require('../fields/DatedDate');
var InterestAccrualDate = require('../fields/InterestAccrualDate');
var SecurityStatus = require('../fields/SecurityStatus');
var SettleOnOpenFlag = require('../fields/SettleOnOpenFlag');
var InstrmtAssignmentMethod = require('../fields/InstrmtAssignmentMethod');
var StrikeMultiplier = require('../fields/StrikeMultiplier');
var StrikeValue = require('../fields/StrikeValue');
var MinPriceIncrement = require('../fields/MinPriceIncrement');
var PositionLimit = require('../fields/PositionLimit');
var NTPositionLimit = require('../fields/NTPositionLimit');
var UnitOfMeasure = require('../fields/UnitOfMeasure');
var TimeUnit = require('../fields/TimeUnit');
var MaturityTime = require('../fields/MaturityTime');
var SecurityGroup = require('../fields/SecurityGroup');
var MinPriceIncrementAmount = require('../fields/MinPriceIncrementAmount');
var UnitOfMeasureQty = require('../fields/UnitOfMeasureQty');
var ProductComplex = require('../fields/ProductComplex');
var PriceUnitOfMeasure = require('../fields/PriceUnitOfMeasure');
var PriceUnitOfMeasureQty = require('../fields/PriceUnitOfMeasureQty');
var SettlMethod = require('../fields/SettlMethod');
var ExerciseStyle = require('../fields/ExerciseStyle');
var OptPayAmount = require('../fields/OptPayAmount');
var PriceQuoteMethod = require('../fields/PriceQuoteMethod');
var ListMethod = require('../fields/ListMethod');
var CapPrice = require('../fields/CapPrice');
var FloorPrice = require('../fields/FloorPrice');
var PutOrCall = require('../fields/PutOrCall');
var FlexibleIndicator = require('../fields/FlexibleIndicator');
var FlexProductEligibilityIndicator = require('../fields/FlexProductEligibilityIndicator');
var FuturesValuationMethod = require('../fields/FuturesValuationMethod');

function Instrument (instrument) {
  this.message = instrument;
}
/* component */
Instrument.prototype.secAltIdgrp = function () {
  return this.message.groups[SecAltIDGrp.Tag]
    .map(function (secAltIdgrp) {
      return new SecAltIDGrp(secAltIdgrp);
  });
};

/* component */
Instrument.prototype.evntGrp = function () {
  return this.message.groups[EvntGrp.Tag]
    .map(function (evntGrp) {
      return new EvntGrp(evntGrp);
  });
};

/* component */
Instrument.prototype.instrumentParties = function () {
  return this.message.groups[InstrumentParties.Tag]
    .map(function (instrumentParties) {
      return new InstrumentParties(instrumentParties);
  });
};

/* component */
Instrument.prototype.securityXml = function () {
  return this.message.groups[SecurityXML.Tag]
    .map(function (securityXml) {
      return new SecurityXML(securityXml);
  });
};

/* field */
Instrument.prototype.symbol = function () {
  return new Symbol(this.message.tags[Symbol.Tag]);
};

/* field */
Instrument.prototype.symbolSfx = function () {
  return new SymbolSfx(this.message.tags[SymbolSfx.Tag]);
};

/* field */
Instrument.prototype.securityId = function () {
  return new SecurityID(this.message.tags[SecurityID.Tag]);
};

/* field */
Instrument.prototype.securityIdsource = function () {
  return new SecurityIDSource(this.message.tags[SecurityIDSource.Tag]);
};

/* field */
Instrument.prototype.product = function () {
  return new Product(this.message.tags[Product.Tag]);
};

/* field */
Instrument.prototype.cficode = function () {
  return new CFICode(this.message.tags[CFICode.Tag]);
};

/* field */
Instrument.prototype.securityType = function () {
  return new SecurityType(this.message.tags[SecurityType.Tag]);
};

/* field */
Instrument.prototype.securitySubType = function () {
  return new SecuritySubType(this.message.tags[SecuritySubType.Tag]);
};

/* field */
Instrument.prototype.maturityMonthYear = function () {
  return new MaturityMonthYear(this.message.tags[MaturityMonthYear.Tag]);
};

/* field */
Instrument.prototype.maturityDate = function () {
  return new MaturityDate(this.message.tags[MaturityDate.Tag]);
};

/* field */
Instrument.prototype.couponPaymentDate = function () {
  return new CouponPaymentDate(this.message.tags[CouponPaymentDate.Tag]);
};

/* field */
Instrument.prototype.issueDate = function () {
  return new IssueDate(this.message.tags[IssueDate.Tag]);
};

/* field */
Instrument.prototype.repoCollateralSecurityType = function () {
  return new RepoCollateralSecurityType(this.message.tags[RepoCollateralSecurityType.Tag]);
};

/* field */
Instrument.prototype.repurchaseTerm = function () {
  return new RepurchaseTerm(this.message.tags[RepurchaseTerm.Tag]);
};

/* field */
Instrument.prototype.repurchaseRate = function () {
  return new RepurchaseRate(this.message.tags[RepurchaseRate.Tag]);
};

/* field */
Instrument.prototype.factor = function () {
  return new Factor(this.message.tags[Factor.Tag]);
};

/* field */
Instrument.prototype.creditRating = function () {
  return new CreditRating(this.message.tags[CreditRating.Tag]);
};

/* field */
Instrument.prototype.instrRegistry = function () {
  return new InstrRegistry(this.message.tags[InstrRegistry.Tag]);
};

/* field */
Instrument.prototype.countryOfIssue = function () {
  return new CountryOfIssue(this.message.tags[CountryOfIssue.Tag]);
};

/* field */
Instrument.prototype.stateOrProvinceOfIssue = function () {
  return new StateOrProvinceOfIssue(this.message.tags[StateOrProvinceOfIssue.Tag]);
};

/* field */
Instrument.prototype.localeOfIssue = function () {
  return new LocaleOfIssue(this.message.tags[LocaleOfIssue.Tag]);
};

/* field */
Instrument.prototype.redemptionDate = function () {
  return new RedemptionDate(this.message.tags[RedemptionDate.Tag]);
};

/* field */
Instrument.prototype.strikePrice = function () {
  return new StrikePrice(this.message.tags[StrikePrice.Tag]);
};

/* field */
Instrument.prototype.strikeCurrency = function () {
  return new StrikeCurrency(this.message.tags[StrikeCurrency.Tag]);
};

/* field */
Instrument.prototype.optAttribute = function () {
  return new OptAttribute(this.message.tags[OptAttribute.Tag]);
};

/* field */
Instrument.prototype.contractMultiplier = function () {
  return new ContractMultiplier(this.message.tags[ContractMultiplier.Tag]);
};

/* field */
Instrument.prototype.couponRate = function () {
  return new CouponRate(this.message.tags[CouponRate.Tag]);
};

/* field */
Instrument.prototype.securityExchange = function () {
  return new SecurityExchange(this.message.tags[SecurityExchange.Tag]);
};

/* field */
Instrument.prototype.issuer = function () {
  return new Issuer(this.message.tags[Issuer.Tag]);
};

/* field */
Instrument.prototype.encodedIssuerLen = function () {
  return new EncodedIssuerLen(this.message.tags[EncodedIssuerLen.Tag]);
};

/* field */
Instrument.prototype.encodedIssuer = function () {
  return new EncodedIssuer(this.message.tags[EncodedIssuer.Tag]);
};

/* field */
Instrument.prototype.securityDesc = function () {
  return new SecurityDesc(this.message.tags[SecurityDesc.Tag]);
};

/* field */
Instrument.prototype.encodedSecurityDescLen = function () {
  return new EncodedSecurityDescLen(this.message.tags[EncodedSecurityDescLen.Tag]);
};

/* field */
Instrument.prototype.encodedSecurityDesc = function () {
  return new EncodedSecurityDesc(this.message.tags[EncodedSecurityDesc.Tag]);
};

/* field */
Instrument.prototype.pool = function () {
  return new Pool(this.message.tags[Pool.Tag]);
};

/* field */
Instrument.prototype.contractSettlMonth = function () {
  return new ContractSettlMonth(this.message.tags[ContractSettlMonth.Tag]);
};

/* field */
Instrument.prototype.cpprogram = function () {
  return new CPProgram(this.message.tags[CPProgram.Tag]);
};

/* field */
Instrument.prototype.cpregType = function () {
  return new CPRegType(this.message.tags[CPRegType.Tag]);
};

/* field */
Instrument.prototype.datedDate = function () {
  return new DatedDate(this.message.tags[DatedDate.Tag]);
};

/* field */
Instrument.prototype.interestAccrualDate = function () {
  return new InterestAccrualDate(this.message.tags[InterestAccrualDate.Tag]);
};

/* field */
Instrument.prototype.securityStatus = function () {
  return new SecurityStatus(this.message.tags[SecurityStatus.Tag]);
};

/* field */
Instrument.prototype.settleOnOpenFlag = function () {
  return new SettleOnOpenFlag(this.message.tags[SettleOnOpenFlag.Tag]);
};

/* field */
Instrument.prototype.instrmtAssignmentMethod = function () {
  return new InstrmtAssignmentMethod(this.message.tags[InstrmtAssignmentMethod.Tag]);
};

/* field */
Instrument.prototype.strikeMultiplier = function () {
  return new StrikeMultiplier(this.message.tags[StrikeMultiplier.Tag]);
};

/* field */
Instrument.prototype.strikeValue = function () {
  return new StrikeValue(this.message.tags[StrikeValue.Tag]);
};

/* field */
Instrument.prototype.minPriceIncrement = function () {
  return new MinPriceIncrement(this.message.tags[MinPriceIncrement.Tag]);
};

/* field */
Instrument.prototype.positionLimit = function () {
  return new PositionLimit(this.message.tags[PositionLimit.Tag]);
};

/* field */
Instrument.prototype.ntpositionLimit = function () {
  return new NTPositionLimit(this.message.tags[NTPositionLimit.Tag]);
};

/* field */
Instrument.prototype.unitOfMeasure = function () {
  return new UnitOfMeasure(this.message.tags[UnitOfMeasure.Tag]);
};

/* field */
Instrument.prototype.timeUnit = function () {
  return new TimeUnit(this.message.tags[TimeUnit.Tag]);
};

/* field */
Instrument.prototype.maturityTime = function () {
  return new MaturityTime(this.message.tags[MaturityTime.Tag]);
};

/* field */
Instrument.prototype.securityGroup = function () {
  return new SecurityGroup(this.message.tags[SecurityGroup.Tag]);
};

/* field */
Instrument.prototype.minPriceIncrementAmount = function () {
  return new MinPriceIncrementAmount(this.message.tags[MinPriceIncrementAmount.Tag]);
};

/* field */
Instrument.prototype.unitOfMeasureQty = function () {
  return new UnitOfMeasureQty(this.message.tags[UnitOfMeasureQty.Tag]);
};

/* field */
Instrument.prototype.productComplex = function () {
  return new ProductComplex(this.message.tags[ProductComplex.Tag]);
};

/* field */
Instrument.prototype.priceUnitOfMeasure = function () {
  return new PriceUnitOfMeasure(this.message.tags[PriceUnitOfMeasure.Tag]);
};

/* field */
Instrument.prototype.priceUnitOfMeasureQty = function () {
  return new PriceUnitOfMeasureQty(this.message.tags[PriceUnitOfMeasureQty.Tag]);
};

/* field */
Instrument.prototype.settlMethod = function () {
  return new SettlMethod(this.message.tags[SettlMethod.Tag]);
};

/* field */
Instrument.prototype.exerciseStyle = function () {
  return new ExerciseStyle(this.message.tags[ExerciseStyle.Tag]);
};

/* field */
Instrument.prototype.optPayAmount = function () {
  return new OptPayAmount(this.message.tags[OptPayAmount.Tag]);
};

/* field */
Instrument.prototype.priceQuoteMethod = function () {
  return new PriceQuoteMethod(this.message.tags[PriceQuoteMethod.Tag]);
};

/* field */
Instrument.prototype.listMethod = function () {
  return new ListMethod(this.message.tags[ListMethod.Tag]);
};

/* field */
Instrument.prototype.capPrice = function () {
  return new CapPrice(this.message.tags[CapPrice.Tag]);
};

/* field */
Instrument.prototype.floorPrice = function () {
  return new FloorPrice(this.message.tags[FloorPrice.Tag]);
};

/* field */
Instrument.prototype.putOrCall = function () {
  return new PutOrCall(this.message.tags[PutOrCall.Tag]);
};

/* field */
Instrument.prototype.flexibleIndicator = function () {
  return new FlexibleIndicator(this.message.tags[FlexibleIndicator.Tag]);
};

/* field */
Instrument.prototype.flexProductEligibilityIndicator = function () {
  return new FlexProductEligibilityIndicator(this.message.tags[FlexProductEligibilityIndicator.Tag]);
};

/* field */
Instrument.prototype.futuresValuationMethod = function () {
  return new FuturesValuationMethod(this.message.tags[FuturesValuationMethod.Tag]);
};



Instrument.Tag = '55';

module.exports = Instrument;
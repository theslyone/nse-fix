var UndSecAltIDGrp = require('../components/UndSecAltIDGrp');
var UnderlyingStipulations = require('../components/UnderlyingStipulations');
var UndlyInstrumentParties = require('../components/UndlyInstrumentParties');
var UnderlyingSymbol = require('../fields/UnderlyingSymbol');
var UnderlyingSymbolSfx = require('../fields/UnderlyingSymbolSfx');
var UnderlyingSecurityID = require('../fields/UnderlyingSecurityID');
var UnderlyingSecurityIDSource = require('../fields/UnderlyingSecurityIDSource');
var UnderlyingProduct = require('../fields/UnderlyingProduct');
var UnderlyingCFICode = require('../fields/UnderlyingCFICode');
var UnderlyingSecurityType = require('../fields/UnderlyingSecurityType');
var UnderlyingSecuritySubType = require('../fields/UnderlyingSecuritySubType');
var UnderlyingMaturityMonthYear = require('../fields/UnderlyingMaturityMonthYear');
var UnderlyingMaturityDate = require('../fields/UnderlyingMaturityDate');
var UnderlyingCouponPaymentDate = require('../fields/UnderlyingCouponPaymentDate');
var UnderlyingIssueDate = require('../fields/UnderlyingIssueDate');
var UnderlyingRepoCollateralSecurityType = require('../fields/UnderlyingRepoCollateralSecurityType');
var UnderlyingRepurchaseTerm = require('../fields/UnderlyingRepurchaseTerm');
var UnderlyingRepurchaseRate = require('../fields/UnderlyingRepurchaseRate');
var UnderlyingFactor = require('../fields/UnderlyingFactor');
var UnderlyingCreditRating = require('../fields/UnderlyingCreditRating');
var UnderlyingInstrRegistry = require('../fields/UnderlyingInstrRegistry');
var UnderlyingCountryOfIssue = require('../fields/UnderlyingCountryOfIssue');
var UnderlyingStateOrProvinceOfIssue = require('../fields/UnderlyingStateOrProvinceOfIssue');
var UnderlyingLocaleOfIssue = require('../fields/UnderlyingLocaleOfIssue');
var UnderlyingRedemptionDate = require('../fields/UnderlyingRedemptionDate');
var UnderlyingStrikePrice = require('../fields/UnderlyingStrikePrice');
var UnderlyingStrikeCurrency = require('../fields/UnderlyingStrikeCurrency');
var UnderlyingOptAttribute = require('../fields/UnderlyingOptAttribute');
var UnderlyingContractMultiplier = require('../fields/UnderlyingContractMultiplier');
var UnderlyingCouponRate = require('../fields/UnderlyingCouponRate');
var UnderlyingSecurityExchange = require('../fields/UnderlyingSecurityExchange');
var UnderlyingIssuer = require('../fields/UnderlyingIssuer');
var EncodedUnderlyingIssuerLen = require('../fields/EncodedUnderlyingIssuerLen');
var EncodedUnderlyingIssuer = require('../fields/EncodedUnderlyingIssuer');
var UnderlyingSecurityDesc = require('../fields/UnderlyingSecurityDesc');
var EncodedUnderlyingSecurityDescLen = require('../fields/EncodedUnderlyingSecurityDescLen');
var EncodedUnderlyingSecurityDesc = require('../fields/EncodedUnderlyingSecurityDesc');
var UnderlyingCPProgram = require('../fields/UnderlyingCPProgram');
var UnderlyingCPRegType = require('../fields/UnderlyingCPRegType');
var UnderlyingCurrency = require('../fields/UnderlyingCurrency');
var UnderlyingQty = require('../fields/UnderlyingQty');
var UnderlyingPx = require('../fields/UnderlyingPx');
var UnderlyingDirtyPrice = require('../fields/UnderlyingDirtyPrice');
var UnderlyingEndPrice = require('../fields/UnderlyingEndPrice');
var UnderlyingStartValue = require('../fields/UnderlyingStartValue');
var UnderlyingCurrentValue = require('../fields/UnderlyingCurrentValue');
var UnderlyingEndValue = require('../fields/UnderlyingEndValue');
var UnderlyingAllocationPercent = require('../fields/UnderlyingAllocationPercent');
var UnderlyingSettlementType = require('../fields/UnderlyingSettlementType');
var UnderlyingCashAmount = require('../fields/UnderlyingCashAmount');
var UnderlyingCashType = require('../fields/UnderlyingCashType');
var UnderlyingUnitOfMeasure = require('../fields/UnderlyingUnitOfMeasure');
var UnderlyingTimeUnit = require('../fields/UnderlyingTimeUnit');
var UnderlyingCapValue = require('../fields/UnderlyingCapValue');
var UnderlyingSettlMethod = require('../fields/UnderlyingSettlMethod');
var UnderlyingAdjustedQuantity = require('../fields/UnderlyingAdjustedQuantity');
var UnderlyingFXRate = require('../fields/UnderlyingFXRate');
var UnderlyingFXRateCalc = require('../fields/UnderlyingFXRateCalc');
var UnderlyingMaturityTime = require('../fields/UnderlyingMaturityTime');
var UnderlyingPutOrCall = require('../fields/UnderlyingPutOrCall');
var UnderlyingExerciseStyle = require('../fields/UnderlyingExerciseStyle');
var UnderlyingUnitOfMeasureQty = require('../fields/UnderlyingUnitOfMeasureQty');
var UnderlyingPriceUnitOfMeasure = require('../fields/UnderlyingPriceUnitOfMeasure');
var UnderlyingPriceUnitOfMeasureQty = require('../fields/UnderlyingPriceUnitOfMeasureQty');

function UnderlyingInstrument (underlyingInstrument) {
  this.message = underlyingInstrument;
}
/* component */
UnderlyingInstrument.prototype.undSecAltIdgrp = function () {
  return this.message.groups[UndSecAltIDGrp.Tag]
    .map(function (undSecAltIdgrp) {
      return new UndSecAltIDGrp(undSecAltIdgrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingStipulations = function () {
  return this.message.groups[UnderlyingStipulations.Tag]
    .map(function (underlyingStipulations) {
      return new UnderlyingStipulations(underlyingStipulations);
  });
};

/* component */
UnderlyingInstrument.prototype.undlyInstrumentParties = function () {
  return this.message.groups[UndlyInstrumentParties.Tag]
    .map(function (undlyInstrumentParties) {
      return new UndlyInstrumentParties(undlyInstrumentParties);
  });
};

/* field */
UnderlyingInstrument.prototype.underlyingSymbol = function () {
  return new UnderlyingSymbol(this.message.tags[UnderlyingSymbol.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSymbolSfx = function () {
  return new UnderlyingSymbolSfx(this.message.tags[UnderlyingSymbolSfx.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityId = function () {
  return new UnderlyingSecurityID(this.message.tags[UnderlyingSecurityID.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityIdsource = function () {
  return new UnderlyingSecurityIDSource(this.message.tags[UnderlyingSecurityIDSource.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingProduct = function () {
  return new UnderlyingProduct(this.message.tags[UnderlyingProduct.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCficode = function () {
  return new UnderlyingCFICode(this.message.tags[UnderlyingCFICode.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityType = function () {
  return new UnderlyingSecurityType(this.message.tags[UnderlyingSecurityType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecuritySubType = function () {
  return new UnderlyingSecuritySubType(this.message.tags[UnderlyingSecuritySubType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMaturityMonthYear = function () {
  return new UnderlyingMaturityMonthYear(this.message.tags[UnderlyingMaturityMonthYear.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMaturityDate = function () {
  return new UnderlyingMaturityDate(this.message.tags[UnderlyingMaturityDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponPaymentDate = function () {
  return new UnderlyingCouponPaymentDate(this.message.tags[UnderlyingCouponPaymentDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIssueDate = function () {
  return new UnderlyingIssueDate(this.message.tags[UnderlyingIssueDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRepoCollateralSecurityType = function () {
  return new UnderlyingRepoCollateralSecurityType(this.message.tags[UnderlyingRepoCollateralSecurityType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRepurchaseTerm = function () {
  return new UnderlyingRepurchaseTerm(this.message.tags[UnderlyingRepurchaseTerm.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRepurchaseRate = function () {
  return new UnderlyingRepurchaseRate(this.message.tags[UnderlyingRepurchaseRate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFactor = function () {
  return new UnderlyingFactor(this.message.tags[UnderlyingFactor.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCreditRating = function () {
  return new UnderlyingCreditRating(this.message.tags[UnderlyingCreditRating.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingInstrRegistry = function () {
  return new UnderlyingInstrRegistry(this.message.tags[UnderlyingInstrRegistry.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCountryOfIssue = function () {
  return new UnderlyingCountryOfIssue(this.message.tags[UnderlyingCountryOfIssue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStateOrProvinceOfIssue = function () {
  return new UnderlyingStateOrProvinceOfIssue(this.message.tags[UnderlyingStateOrProvinceOfIssue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingLocaleOfIssue = function () {
  return new UnderlyingLocaleOfIssue(this.message.tags[UnderlyingLocaleOfIssue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRedemptionDate = function () {
  return new UnderlyingRedemptionDate(this.message.tags[UnderlyingRedemptionDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikePrice = function () {
  return new UnderlyingStrikePrice(this.message.tags[UnderlyingStrikePrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikeCurrency = function () {
  return new UnderlyingStrikeCurrency(this.message.tags[UnderlyingStrikeCurrency.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingOptAttribute = function () {
  return new UnderlyingOptAttribute(this.message.tags[UnderlyingOptAttribute.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingContractMultiplier = function () {
  return new UnderlyingContractMultiplier(this.message.tags[UnderlyingContractMultiplier.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponRate = function () {
  return new UnderlyingCouponRate(this.message.tags[UnderlyingCouponRate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityExchange = function () {
  return new UnderlyingSecurityExchange(this.message.tags[UnderlyingSecurityExchange.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIssuer = function () {
  return new UnderlyingIssuer(this.message.tags[UnderlyingIssuer.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingIssuerLen = function () {
  return new EncodedUnderlyingIssuerLen(this.message.tags[EncodedUnderlyingIssuerLen.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingIssuer = function () {
  return new EncodedUnderlyingIssuer(this.message.tags[EncodedUnderlyingIssuer.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityDesc = function () {
  return new UnderlyingSecurityDesc(this.message.tags[UnderlyingSecurityDesc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingSecurityDescLen = function () {
  return new EncodedUnderlyingSecurityDescLen(this.message.tags[EncodedUnderlyingSecurityDescLen.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingSecurityDesc = function () {
  return new EncodedUnderlyingSecurityDesc(this.message.tags[EncodedUnderlyingSecurityDesc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCpprogram = function () {
  return new UnderlyingCPProgram(this.message.tags[UnderlyingCPProgram.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCpregType = function () {
  return new UnderlyingCPRegType(this.message.tags[UnderlyingCPRegType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCurrency = function () {
  return new UnderlyingCurrency(this.message.tags[UnderlyingCurrency.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingQty = function () {
  return new UnderlyingQty(this.message.tags[UnderlyingQty.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPx = function () {
  return new UnderlyingPx(this.message.tags[UnderlyingPx.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingDirtyPrice = function () {
  return new UnderlyingDirtyPrice(this.message.tags[UnderlyingDirtyPrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingEndPrice = function () {
  return new UnderlyingEndPrice(this.message.tags[UnderlyingEndPrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStartValue = function () {
  return new UnderlyingStartValue(this.message.tags[UnderlyingStartValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCurrentValue = function () {
  return new UnderlyingCurrentValue(this.message.tags[UnderlyingCurrentValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingEndValue = function () {
  return new UnderlyingEndValue(this.message.tags[UnderlyingEndValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAllocationPercent = function () {
  return new UnderlyingAllocationPercent(this.message.tags[UnderlyingAllocationPercent.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlementType = function () {
  return new UnderlyingSettlementType(this.message.tags[UnderlyingSettlementType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCashAmount = function () {
  return new UnderlyingCashAmount(this.message.tags[UnderlyingCashAmount.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCashType = function () {
  return new UnderlyingCashType(this.message.tags[UnderlyingCashType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingUnitOfMeasure = function () {
  return new UnderlyingUnitOfMeasure(this.message.tags[UnderlyingUnitOfMeasure.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingTimeUnit = function () {
  return new UnderlyingTimeUnit(this.message.tags[UnderlyingTimeUnit.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCapValue = function () {
  return new UnderlyingCapValue(this.message.tags[UnderlyingCapValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlMethod = function () {
  return new UnderlyingSettlMethod(this.message.tags[UnderlyingSettlMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAdjustedQuantity = function () {
  return new UnderlyingAdjustedQuantity(this.message.tags[UnderlyingAdjustedQuantity.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFxrate = function () {
  return new UnderlyingFXRate(this.message.tags[UnderlyingFXRate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFxrateCalc = function () {
  return new UnderlyingFXRateCalc(this.message.tags[UnderlyingFXRateCalc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMaturityTime = function () {
  return new UnderlyingMaturityTime(this.message.tags[UnderlyingMaturityTime.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPutOrCall = function () {
  return new UnderlyingPutOrCall(this.message.tags[UnderlyingPutOrCall.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingExerciseStyle = function () {
  return new UnderlyingExerciseStyle(this.message.tags[UnderlyingExerciseStyle.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingUnitOfMeasureQty = function () {
  return new UnderlyingUnitOfMeasureQty(this.message.tags[UnderlyingUnitOfMeasureQty.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPriceUnitOfMeasure = function () {
  return new UnderlyingPriceUnitOfMeasure(this.message.tags[UnderlyingPriceUnitOfMeasure.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPriceUnitOfMeasureQty = function () {
  return new UnderlyingPriceUnitOfMeasureQty(this.message.tags[UnderlyingPriceUnitOfMeasureQty.Tag]);
};



UnderlyingInstrument.Tag = '311';

module.exports = UnderlyingInstrument;
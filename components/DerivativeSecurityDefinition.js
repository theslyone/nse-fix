var DerivativeInstrument = require('../components/DerivativeInstrument');
var DerivativeInstrumentAttribute = require('../components/DerivativeInstrumentAttribute');
var MarketSegmentGrp = require('../components/MarketSegmentGrp');

function DerivativeSecurityDefinition (derivativeSecurityDefinition) {
  this.message = derivativeSecurityDefinition;
}
/* component */
DerivativeSecurityDefinition.prototype.derivativeInstrument = function () {
  return this.message.groups[DerivativeInstrument.Tag]
    .map(function (derivativeInstrument) {
      return new DerivativeInstrument(derivativeInstrument);
  });
};

/* component */
DerivativeSecurityDefinition.prototype.derivativeInstrumentAttribute = function () {
  return this.message.groups[DerivativeInstrumentAttribute.Tag]
    .map(function (derivativeInstrumentAttribute) {
      return new DerivativeInstrumentAttribute(derivativeInstrumentAttribute);
  });
};

/* component */
DerivativeSecurityDefinition.prototype.marketSegmentGrp = function () {
  return this.message.groups[MarketSegmentGrp.Tag]
    .map(function (marketSegmentGrp) {
      return new MarketSegmentGrp(marketSegmentGrp);
  });
};



DerivativeSecurityDefinition.Tag = '1214';

module.exports = DerivativeSecurityDefinition;
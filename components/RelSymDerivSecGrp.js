var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SecondaryPriceLimits = require('../components/SecondaryPriceLimits');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var CorporateAction = require('../fields/CorporateAction');

function RelSymDerivSecGrp (relSymDerivSecGrp) {
  this.message = relSymDerivSecGrp;
}

/* group */

/* component */
RelSymDerivSecGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
RelSymDerivSecGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
RelSymDerivSecGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* component */
RelSymDerivSecGrp.prototype.secondaryPriceLimits = function () {
  return this.message.groups[SecondaryPriceLimits.Tag]
    .map(function (secondaryPriceLimits) {
      return new SecondaryPriceLimits(secondaryPriceLimits);
  });
};

/* field */
RelSymDerivSecGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[CorporateAction.Tag]);
};

/* end group */

RelSymDerivSecGrp.Tag = '146';

module.exports = RelSymDerivSecGrp;
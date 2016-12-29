var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var SecondaryPriceLimits = require('../components/SecondaryPriceLimits');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var ListUpdateAction = require('../fields/ListUpdateAction');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var CorporateAction = require('../fields/CorporateAction');

function RelSymDerivSecUpdGrp (relSymDerivSecUpdGrp) {
  this.message = relSymDerivSecUpdGrp;
}

/* group */

/* component */
RelSymDerivSecUpdGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
RelSymDerivSecUpdGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
RelSymDerivSecUpdGrp.prototype.secondaryPriceLimits = function () {
  return this.message.groups[SecondaryPriceLimits.Tag]
    .map(function (secondaryPriceLimits) {
      return new SecondaryPriceLimits(secondaryPriceLimits);
  });
};

/* component */
RelSymDerivSecUpdGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* field */
RelSymDerivSecUpdGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* field */
RelSymDerivSecUpdGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
RelSymDerivSecUpdGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
RelSymDerivSecUpdGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
RelSymDerivSecUpdGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
RelSymDerivSecUpdGrp.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[CorporateAction.Tag]);
};

/* end group */

RelSymDerivSecUpdGrp.Tag = '146';

module.exports = RelSymDerivSecUpdGrp;
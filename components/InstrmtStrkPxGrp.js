var NoStrikes = require('../fields/NoStrikes');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var PrevClosePx = require('../fields/PrevClosePx');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var Side = require('../fields/Side');
var Price = require('../fields/Price');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function InstrmtStrkPxGrp (instrmtStrkPxGrp) {
  this.message = instrmtStrkPxGrp;
}

/* group */

/* component */
InstrmtStrkPxGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
InstrmtStrkPxGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* field */
InstrmtStrkPxGrp.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[PrevClosePx.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
InstrmtStrkPxGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

InstrmtStrkPxGrp.Tag = '428';

module.exports = InstrmtStrkPxGrp;
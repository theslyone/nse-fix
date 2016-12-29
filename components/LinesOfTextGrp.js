var NoLinesOfText = require('../fields/NoLinesOfText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function LinesOfTextGrp (linesOfTextGrp) {
  this.message = linesOfTextGrp;
}

/* group */

/* field */
LinesOfTextGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
LinesOfTextGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
LinesOfTextGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

LinesOfTextGrp.Tag = '33';

module.exports = LinesOfTextGrp;
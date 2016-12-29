var invert = require('invert-obj');

function NoLinesOfText (noLinesOfText) {
  this.message = noLinesOfText;
}

NoLinesOfText.prototype.value = function () {
  return this.message;
};

NoLinesOfText.Tag = '33';

NoLinesOfText.Type = 'NUMINGROUP';

module.exports = NoLinesOfText;
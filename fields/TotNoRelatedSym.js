var invert = require('invert-obj');

function TotNoRelatedSym (totNoRelatedSym) {
  this.message = totNoRelatedSym;
}

TotNoRelatedSym.prototype.value = function () {
  return this.message;
};

TotNoRelatedSym.Tag = '393';

TotNoRelatedSym.Type = 'INT';

module.exports = TotNoRelatedSym;
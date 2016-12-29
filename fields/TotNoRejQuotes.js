var invert = require('invert-obj');

function TotNoRejQuotes (totNoRejQuotes) {
  this.message = totNoRejQuotes;
}

TotNoRejQuotes.prototype.value = function () {
  return this.message;
};

TotNoRejQuotes.Tag = '1170';

TotNoRejQuotes.Type = 'INT';

module.exports = TotNoRejQuotes;
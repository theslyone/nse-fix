var invert = require('invert-obj');

function TotNoAccQuotes (totNoAccQuotes) {
  this.message = totNoAccQuotes;
}

TotNoAccQuotes.prototype.value = function () {
  return this.message;
};

TotNoAccQuotes.Tag = '1169';

TotNoAccQuotes.Type = 'INT';

module.exports = TotNoAccQuotes;
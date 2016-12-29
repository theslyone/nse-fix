var invert = require('invert-obj');

function TotNoCxldQuotes (totNoCxldQuotes) {
  this.message = totNoCxldQuotes;
}

TotNoCxldQuotes.prototype.value = function () {
  return this.message;
};

TotNoCxldQuotes.Tag = '1168';

TotNoCxldQuotes.Type = 'INT';

module.exports = TotNoCxldQuotes;
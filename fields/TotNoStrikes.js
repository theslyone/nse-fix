var invert = require('invert-obj');

function TotNoStrikes (totNoStrikes) {
  this.message = totNoStrikes;
}

TotNoStrikes.prototype.value = function () {
  return this.message;
};

TotNoStrikes.Tag = '422';

TotNoStrikes.Type = 'INT';

module.exports = TotNoStrikes;
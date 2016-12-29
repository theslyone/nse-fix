var invert = require('invert-obj');

function TotNoFills (totNoFills) {
  this.message = totNoFills;
}

TotNoFills.prototype.value = function () {
  return this.message;
};

TotNoFills.Tag = '1361';

TotNoFills.Type = 'INT';

module.exports = TotNoFills;
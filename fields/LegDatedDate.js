var invert = require('invert-obj');

function LegDatedDate (legDatedDate) {
  this.message = legDatedDate;
}

LegDatedDate.prototype.value = function () {
  return this.message;
};

LegDatedDate.Tag = '739';

LegDatedDate.Type = 'LOCALMKTDATE';

module.exports = LegDatedDate;
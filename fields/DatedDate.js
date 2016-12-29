var invert = require('invert-obj');

function DatedDate (datedDate) {
  this.message = datedDate;
}

DatedDate.prototype.value = function () {
  return this.message;
};

DatedDate.Tag = '873';

DatedDate.Type = 'LOCALMKTDATE';

module.exports = DatedDate;
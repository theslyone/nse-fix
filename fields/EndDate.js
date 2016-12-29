var invert = require('invert-obj');

function EndDate (endDate) {
  this.message = endDate;
}

EndDate.prototype.value = function () {
  return this.message;
};

EndDate.Tag = '917';

EndDate.Type = 'LOCALMKTDATE';

module.exports = EndDate;
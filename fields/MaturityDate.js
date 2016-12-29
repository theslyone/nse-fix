var invert = require('invert-obj');

function MaturityDate (maturityDate) {
  this.message = maturityDate;
}

MaturityDate.prototype.value = function () {
  return this.message;
};

MaturityDate.Tag = '541';

MaturityDate.Type = 'LOCALMKTDATE';

module.exports = MaturityDate;
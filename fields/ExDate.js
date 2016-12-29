var invert = require('invert-obj');

function ExDate (exDate) {
  this.message = exDate;
}

ExDate.prototype.value = function () {
  return this.message;
};

ExDate.Tag = '230';

ExDate.Type = 'LOCALMKTDATE';

module.exports = ExDate;
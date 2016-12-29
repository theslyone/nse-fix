var invert = require('invert-obj');

function MaturityDay (maturityDay) {
  this.message = maturityDay;
}

MaturityDay.prototype.value = function () {
  return this.message;
};

MaturityDay.Tag = '205';

MaturityDay.Type = 'DAYOFMONTH';

module.exports = MaturityDay;
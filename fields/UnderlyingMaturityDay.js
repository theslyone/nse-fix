var invert = require('invert-obj');

function UnderlyingMaturityDay (underlyingMaturityDay) {
  this.message = underlyingMaturityDay;
}

UnderlyingMaturityDay.prototype.value = function () {
  return this.message;
};

UnderlyingMaturityDay.Tag = '314';

UnderlyingMaturityDay.Type = 'DAYOFMONTH';

module.exports = UnderlyingMaturityDay;
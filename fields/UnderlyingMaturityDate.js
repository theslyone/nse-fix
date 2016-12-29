var invert = require('invert-obj');

function UnderlyingMaturityDate (underlyingMaturityDate) {
  this.message = underlyingMaturityDate;
}

UnderlyingMaturityDate.prototype.value = function () {
  return this.message;
};

UnderlyingMaturityDate.Tag = '542';

UnderlyingMaturityDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingMaturityDate;
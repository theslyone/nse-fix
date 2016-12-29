var invert = require('invert-obj');

function UnderlyingLegMaturityDate (underlyingLegMaturityDate) {
  this.message = underlyingLegMaturityDate;
}

UnderlyingLegMaturityDate.prototype.value = function () {
  return this.message;
};

UnderlyingLegMaturityDate.Tag = '1345';

UnderlyingLegMaturityDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingLegMaturityDate;
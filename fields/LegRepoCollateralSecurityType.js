var invert = require('invert-obj');

function LegRepoCollateralSecurityType (legRepoCollateralSecurityType) {
  this.message = legRepoCollateralSecurityType;
}

LegRepoCollateralSecurityType.prototype.value = function () {
  return this.message;
};

LegRepoCollateralSecurityType.Tag = '250';

LegRepoCollateralSecurityType.Type = 'INT';

module.exports = LegRepoCollateralSecurityType;
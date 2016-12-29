var invert = require('invert-obj');

function RepoCollateralSecurityType (repoCollateralSecurityType) {
  this.message = repoCollateralSecurityType;
}

RepoCollateralSecurityType.prototype.value = function () {
  return this.message;
};

RepoCollateralSecurityType.Tag = '239';

RepoCollateralSecurityType.Type = 'INT';

module.exports = RepoCollateralSecurityType;
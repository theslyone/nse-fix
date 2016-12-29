var invert = require('invert-obj');

function LegContractMultiplier (legContractMultiplier) {
  this.message = legContractMultiplier;
}

LegContractMultiplier.prototype.value = function () {
  return this.message;
};

LegContractMultiplier.Tag = '614';

LegContractMultiplier.Type = 'FLOAT';

module.exports = LegContractMultiplier;
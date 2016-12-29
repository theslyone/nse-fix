var invert = require('invert-obj');

function UnderlyingContractMultiplier (underlyingContractMultiplier) {
  this.message = underlyingContractMultiplier;
}

UnderlyingContractMultiplier.prototype.value = function () {
  return this.message;
};

UnderlyingContractMultiplier.Tag = '436';

UnderlyingContractMultiplier.Type = 'FLOAT';

module.exports = UnderlyingContractMultiplier;
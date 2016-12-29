var invert = require('invert-obj');

function ContractMultiplier (contractMultiplier) {
  this.message = contractMultiplier;
}

ContractMultiplier.prototype.value = function () {
  return this.message;
};

ContractMultiplier.Tag = '231';

ContractMultiplier.Type = 'FLOAT';

module.exports = ContractMultiplier;
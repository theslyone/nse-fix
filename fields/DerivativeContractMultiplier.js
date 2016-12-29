var invert = require('invert-obj');

function DerivativeContractMultiplier (derivativeContractMultiplier) {
  this.message = derivativeContractMultiplier;
}

DerivativeContractMultiplier.prototype.value = function () {
  return this.message;
};

DerivativeContractMultiplier.Tag = '1266';

DerivativeContractMultiplier.Type = 'FLOAT';

module.exports = DerivativeContractMultiplier;
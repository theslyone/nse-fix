var invert = require('invert-obj');

function DerivativeSettleOnOpenFlag (derivativeSettleOnOpenFlag) {
  this.message = derivativeSettleOnOpenFlag;
}

DerivativeSettleOnOpenFlag.prototype.value = function () {
  return this.message;
};

DerivativeSettleOnOpenFlag.Tag = '1254';

DerivativeSettleOnOpenFlag.Type = 'STRING';

module.exports = DerivativeSettleOnOpenFlag;
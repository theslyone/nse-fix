var invert = require('invert-obj');

function ExecPriceAdjustment (execPriceAdjustment) {
  this.message = execPriceAdjustment;
}

ExecPriceAdjustment.prototype.value = function () {
  return this.message;
};

ExecPriceAdjustment.Tag = '485';

ExecPriceAdjustment.Type = 'FLOAT';

module.exports = ExecPriceAdjustment;
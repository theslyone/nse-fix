var invert = require('invert-obj');

function LegIOIQty (legIoiqty) {
  this.message = legIoiqty;
}

LegIOIQty.prototype.value = function () {
  return this.message;
};

LegIOIQty.Tag = '682';

LegIOIQty.Type = 'STRING';

module.exports = LegIOIQty;
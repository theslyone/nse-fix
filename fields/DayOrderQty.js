var invert = require('invert-obj');

function DayOrderQty (dayOrderQty) {
  this.message = dayOrderQty;
}

DayOrderQty.prototype.value = function () {
  return this.message;
};

DayOrderQty.Tag = '424';

DayOrderQty.Type = 'QTY';

module.exports = DayOrderQty;
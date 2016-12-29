var invert = require('invert-obj');

function DayCumQty (dayCumQty) {
  this.message = dayCumQty;
}

DayCumQty.prototype.value = function () {
  return this.message;
};

DayCumQty.Tag = '425';

DayCumQty.Type = 'QTY';

module.exports = DayCumQty;
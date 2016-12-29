var invert = require('invert-obj');

function SideQty (sideQty) {
  this.message = sideQty;
}

SideQty.prototype.value = function () {
  return this.message;
};

SideQty.Tag = '1009';

SideQty.Type = 'INT';

module.exports = SideQty;
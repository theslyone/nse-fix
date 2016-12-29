var invert = require('invert-obj');

function SideTimeInForce (sideTimeInForce) {
  this.message = sideTimeInForce;
}

SideTimeInForce.prototype.value = function () {
  return this.message;
};

SideTimeInForce.Tag = '962';

SideTimeInForce.Type = 'UTCTIMESTAMP';

module.exports = SideTimeInForce;
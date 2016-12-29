var invert = require('invert-obj');

function SideReasonCd (sideReasonCd) {
  this.message = sideReasonCd;
}

SideReasonCd.prototype.value = function () {
  return this.message;
};

SideReasonCd.Tag = '1007';

SideReasonCd.Type = 'STRING';

module.exports = SideReasonCd;
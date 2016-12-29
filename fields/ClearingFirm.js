var invert = require('invert-obj');

function ClearingFirm (clearingFirm) {
  this.message = clearingFirm;
}

ClearingFirm.prototype.value = function () {
  return this.message;
};

ClearingFirm.Tag = '439';

ClearingFirm.Type = 'STRING';

module.exports = ClearingFirm;
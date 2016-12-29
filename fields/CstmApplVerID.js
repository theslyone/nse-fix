var invert = require('invert-obj');

function CstmApplVerID (cstmApplVerId) {
  this.message = cstmApplVerId;
}

CstmApplVerID.prototype.value = function () {
  return this.message;
};

CstmApplVerID.Tag = '1129';

CstmApplVerID.Type = 'STRING';

module.exports = CstmApplVerID;
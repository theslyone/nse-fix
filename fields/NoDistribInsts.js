var invert = require('invert-obj');

function NoDistribInsts (noDistribInsts) {
  this.message = noDistribInsts;
}

NoDistribInsts.prototype.value = function () {
  return this.message;
};

NoDistribInsts.Tag = '510';

NoDistribInsts.Type = 'NUMINGROUP';

module.exports = NoDistribInsts;
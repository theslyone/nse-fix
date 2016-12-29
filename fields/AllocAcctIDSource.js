var invert = require('invert-obj');

function AllocAcctIDSource (allocAcctIdsource) {
  this.message = allocAcctIdsource;
}

AllocAcctIDSource.prototype.value = function () {
  return this.message;
};

AllocAcctIDSource.Tag = '661';

AllocAcctIDSource.Type = 'INT';

module.exports = AllocAcctIDSource;
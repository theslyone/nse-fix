var invert = require('invert-obj');

function LegAllocAcctIDSource (legAllocAcctIdsource) {
  this.message = legAllocAcctIdsource;
}

LegAllocAcctIDSource.prototype.value = function () {
  return this.message;
};

LegAllocAcctIDSource.Tag = '674';

LegAllocAcctIDSource.Type = 'STRING';

module.exports = LegAllocAcctIDSource;
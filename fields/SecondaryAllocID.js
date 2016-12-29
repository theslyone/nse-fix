var invert = require('invert-obj');

function SecondaryAllocID (secondaryAllocId) {
  this.message = secondaryAllocId;
}

SecondaryAllocID.prototype.value = function () {
  return this.message;
};

SecondaryAllocID.Tag = '793';

SecondaryAllocID.Type = 'STRING';

module.exports = SecondaryAllocID;
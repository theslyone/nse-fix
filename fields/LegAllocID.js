var invert = require('invert-obj');

function LegAllocID (legAllocId) {
  this.message = legAllocId;
}

LegAllocID.prototype.value = function () {
  return this.message;
};

LegAllocID.Tag = '1366';

LegAllocID.Type = 'STRING';

module.exports = LegAllocID;
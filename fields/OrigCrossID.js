var invert = require('invert-obj');

function OrigCrossID (origCrossId) {
  this.message = origCrossId;
}

OrigCrossID.prototype.value = function () {
  return this.message;
};

OrigCrossID.Tag = '551';

OrigCrossID.Type = 'STRING';

module.exports = OrigCrossID;
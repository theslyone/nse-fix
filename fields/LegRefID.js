var invert = require('invert-obj');

function LegRefID (legRefId) {
  this.message = legRefId;
}

LegRefID.prototype.value = function () {
  return this.message;
};

LegRefID.Tag = '654';

LegRefID.Type = 'STRING';

module.exports = LegRefID;
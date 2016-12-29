var invert = require('invert-obj');

function CrossID (crossId) {
  this.message = crossId;
}

CrossID.prototype.value = function () {
  return this.message;
};

CrossID.Tag = '548';

CrossID.Type = 'STRING';

module.exports = CrossID;
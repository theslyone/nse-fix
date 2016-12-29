var invert = require('invert-obj');

function AllocID (allocId) {
  this.message = allocId;
}

AllocID.prototype.value = function () {
  return this.message;
};

AllocID.Tag = '70';

AllocID.Type = 'STRING';

module.exports = AllocID;
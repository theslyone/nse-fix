var invert = require('invert-obj');

function CollRespID (collRespId) {
  this.message = collRespId;
}

CollRespID.prototype.value = function () {
  return this.message;
};

CollRespID.Tag = '904';

CollRespID.Type = 'STRING';

module.exports = CollRespID;
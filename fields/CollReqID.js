var invert = require('invert-obj');

function CollReqID (collReqId) {
  this.message = collReqId;
}

CollReqID.prototype.value = function () {
  return this.message;
};

CollReqID.Tag = '894';

CollReqID.Type = 'STRING';

module.exports = CollReqID;
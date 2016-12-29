var invert = require('invert-obj');

function AsgnReqID (asgnReqId) {
  this.message = asgnReqId;
}

AsgnReqID.prototype.value = function () {
  return this.message;
};

AsgnReqID.Tag = '831';

AsgnReqID.Type = 'STRING';

module.exports = AsgnReqID;
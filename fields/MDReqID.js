var invert = require('invert-obj');

function MDReqID (mdreqId) {
  this.message = mdreqId;
}

MDReqID.prototype.value = function () {
  return this.message;
};

MDReqID.Tag = '262';

MDReqID.Type = 'STRING';

module.exports = MDReqID;
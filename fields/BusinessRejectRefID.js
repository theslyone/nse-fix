var invert = require('invert-obj');

function BusinessRejectRefID (businessRejectRefId) {
  this.message = businessRejectRefId;
}

BusinessRejectRefID.prototype.value = function () {
  return this.message;
};

BusinessRejectRefID.Tag = '379';

BusinessRejectRefID.Type = 'STRING';

module.exports = BusinessRejectRefID;
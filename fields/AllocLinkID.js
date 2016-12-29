var invert = require('invert-obj');

function AllocLinkID (allocLinkId) {
  this.message = allocLinkId;
}

AllocLinkID.prototype.value = function () {
  return this.message;
};

AllocLinkID.Tag = '196';

AllocLinkID.Type = 'STRING';

module.exports = AllocLinkID;
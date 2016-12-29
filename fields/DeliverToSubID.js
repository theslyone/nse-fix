var invert = require('invert-obj');

function DeliverToSubID (deliverToSubId) {
  this.message = deliverToSubId;
}

DeliverToSubID.prototype.value = function () {
  return this.message;
};

DeliverToSubID.Tag = '129';

DeliverToSubID.Type = 'STRING';

module.exports = DeliverToSubID;
var invert = require('invert-obj');

function DeliverToCompID (deliverToCompId) {
  this.message = deliverToCompId;
}

DeliverToCompID.prototype.value = function () {
  return this.message;
};

DeliverToCompID.Tag = '128';

DeliverToCompID.Type = 'STRING';

module.exports = DeliverToCompID;
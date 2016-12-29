var invert = require('invert-obj');

function DeliverToLocationID (deliverToLocationId) {
  this.message = deliverToLocationId;
}

DeliverToLocationID.prototype.value = function () {
  return this.message;
};

DeliverToLocationID.Tag = '145';

DeliverToLocationID.Type = 'STRING';

module.exports = DeliverToLocationID;
var invert = require('invert-obj');

function BidDescriptor (bidDescriptor) {
  this.message = bidDescriptor;
}

BidDescriptor.prototype.value = function () {
  return this.message;
};

BidDescriptor.Tag = '400';

BidDescriptor.Type = 'STRING';

module.exports = BidDescriptor;
var invert = require('invert-obj');

function BidDescriptorType (bidDescriptorType) {
  this.message = bidDescriptorType;
}

BidDescriptorType.prototype.value = function () {
  return this.message;
};


BidDescriptorType.Keys = {
  'SECTOR': '1',
  'COUNTRY': '2',
  'INDEX': '3',
};

BidDescriptorType.Tag = '399';

BidDescriptorType.Type = 'INT';

BidDescriptorType.Values = invert(BidDescriptorType.Keys);

module.exports = BidDescriptorType;
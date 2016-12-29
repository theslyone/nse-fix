var invert = require('invert-obj');

function AllocPrice (allocPrice) {
  this.message = allocPrice;
}

AllocPrice.prototype.value = function () {
  return this.message;
};

AllocPrice.Tag = '366';

AllocPrice.Type = 'PRICE';

module.exports = AllocPrice;
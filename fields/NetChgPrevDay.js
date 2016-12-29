var invert = require('invert-obj');

function NetChgPrevDay (netChgPrevDay) {
  this.message = netChgPrevDay;
}

NetChgPrevDay.prototype.value = function () {
  return this.message;
};

NetChgPrevDay.Tag = '451';

NetChgPrevDay.Type = 'PRICEOFFSET';

module.exports = NetChgPrevDay;
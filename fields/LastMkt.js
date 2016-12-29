var invert = require('invert-obj');

function LastMkt (lastMkt) {
  this.message = lastMkt;
}

LastMkt.prototype.value = function () {
  return this.message;
};

LastMkt.Tag = '30';

LastMkt.Type = 'EXCHANGE';

module.exports = LastMkt;
var invert = require('invert-obj');

function BodyLength (bodyLength) {
  this.message = bodyLength;
}

BodyLength.prototype.value = function () {
  return this.message;
};

BodyLength.Tag = '9';

BodyLength.Type = 'LENGTH';

module.exports = BodyLength;
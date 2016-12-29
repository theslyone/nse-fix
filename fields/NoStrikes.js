var invert = require('invert-obj');

function NoStrikes (noStrikes) {
  this.message = noStrikes;
}

NoStrikes.prototype.value = function () {
  return this.message;
};

NoStrikes.Tag = '428';

NoStrikes.Type = 'NUMINGROUP';

module.exports = NoStrikes;
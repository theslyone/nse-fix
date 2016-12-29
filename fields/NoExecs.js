var invert = require('invert-obj');

function NoExecs (noExecs) {
  this.message = noExecs;
}

NoExecs.prototype.value = function () {
  return this.message;
};

NoExecs.Tag = '124';

NoExecs.Type = 'NUMINGROUP';

module.exports = NoExecs;
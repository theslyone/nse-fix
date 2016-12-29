var invert = require('invert-obj');

function NoHops (noHops) {
  this.message = noHops;
}

NoHops.prototype.value = function () {
  return this.message;
};

NoHops.Tag = '627';

NoHops.Type = 'NUMINGROUP';

module.exports = NoHops;
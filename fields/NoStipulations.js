var invert = require('invert-obj');

function NoStipulations (noStipulations) {
  this.message = noStipulations;
}

NoStipulations.prototype.value = function () {
  return this.message;
};

NoStipulations.Tag = '232';

NoStipulations.Type = 'NUMINGROUP';

module.exports = NoStipulations;
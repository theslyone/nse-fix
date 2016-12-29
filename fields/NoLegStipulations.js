var invert = require('invert-obj');

function NoLegStipulations (noLegStipulations) {
  this.message = noLegStipulations;
}

NoLegStipulations.prototype.value = function () {
  return this.message;
};

NoLegStipulations.Tag = '683';

NoLegStipulations.Type = 'NUMINGROUP';

module.exports = NoLegStipulations;
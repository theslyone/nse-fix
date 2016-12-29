var invert = require('invert-obj');

function NoInstrAttrib (noInstrAttrib) {
  this.message = noInstrAttrib;
}

NoInstrAttrib.prototype.value = function () {
  return this.message;
};

NoInstrAttrib.Tag = '870';

NoInstrAttrib.Type = 'NUMINGROUP';

module.exports = NoInstrAttrib;
var invert = require('invert-obj');

function MDSubBookType (mdsubBookType) {
  this.message = mdsubBookType;
}

MDSubBookType.prototype.value = function () {
  return this.message;
};

MDSubBookType.Tag = '1173';

MDSubBookType.Type = 'INT';

module.exports = MDSubBookType;
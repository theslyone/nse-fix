var invert = require('invert-obj');

function IOIRefID (ioirefId) {
  this.message = ioirefId;
}

IOIRefID.prototype.value = function () {
  return this.message;
};

IOIRefID.Tag = '26';

IOIRefID.Type = 'STRING';

module.exports = IOIRefID;
var invert = require('invert-obj');

function MaxShow (maxShow) {
  this.message = maxShow;
}

MaxShow.prototype.value = function () {
  return this.message;
};

MaxShow.Tag = '210';

MaxShow.Type = 'QTY';

module.exports = MaxShow;
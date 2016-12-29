var invert = require('invert-obj');

function StatusText (statusText) {
  this.message = statusText;
}

StatusText.prototype.value = function () {
  return this.message;
};

StatusText.Tag = '929';

StatusText.Type = 'STRING';

module.exports = StatusText;
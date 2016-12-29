var invert = require('invert-obj');

function URLLink (urllink) {
  this.message = urllink;
}

URLLink.prototype.value = function () {
  return this.message;
};

URLLink.Tag = '149';

URLLink.Type = 'STRING';

module.exports = URLLink;
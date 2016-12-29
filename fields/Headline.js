var invert = require('invert-obj');

function Headline (headline) {
  this.message = headline;
}

Headline.prototype.value = function () {
  return this.message;
};

Headline.Tag = '148';

Headline.Type = 'STRING';

module.exports = Headline;
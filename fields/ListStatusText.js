var invert = require('invert-obj');

function ListStatusText (listStatusText) {
  this.message = listStatusText;
}

ListStatusText.prototype.value = function () {
  return this.message;
};

ListStatusText.Tag = '444';

ListStatusText.Type = 'STRING';

module.exports = ListStatusText;
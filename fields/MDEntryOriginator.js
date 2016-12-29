var invert = require('invert-obj');

function MDEntryOriginator (mdentryOriginator) {
  this.message = mdentryOriginator;
}

MDEntryOriginator.prototype.value = function () {
  return this.message;
};

MDEntryOriginator.Tag = '282';

MDEntryOriginator.Type = 'STRING';

module.exports = MDEntryOriginator;
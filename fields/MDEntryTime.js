var invert = require('invert-obj');

function MDEntryTime (mdentryTime) {
  this.message = mdentryTime;
}

MDEntryTime.prototype.value = function () {
  return this.message;
};

MDEntryTime.Tag = '273';

MDEntryTime.Type = 'UTCTIMEONLY';

module.exports = MDEntryTime;
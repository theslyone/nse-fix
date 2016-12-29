var invert = require('invert-obj');

function MDEntrySeller (mdentrySeller) {
  this.message = mdentrySeller;
}

MDEntrySeller.prototype.value = function () {
  return this.message;
};

MDEntrySeller.Tag = '289';

MDEntrySeller.Type = 'STRING';

module.exports = MDEntrySeller;
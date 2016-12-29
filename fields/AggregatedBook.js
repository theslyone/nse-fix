var invert = require('invert-obj');

function AggregatedBook (aggregatedBook) {
  this.message = aggregatedBook;
}

AggregatedBook.prototype.value = function () {
  return this.message;
};


AggregatedBook.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

AggregatedBook.Tag = '266';

AggregatedBook.Type = 'BOOLEAN';

AggregatedBook.Values = invert(AggregatedBook.Keys);

module.exports = AggregatedBook;
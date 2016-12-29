var invert = require('invert-obj');

function QuoteCancelType (quoteCancelType) {
  this.message = quoteCancelType;
}

QuoteCancelType.prototype.value = function () {
  return this.message;
};


QuoteCancelType.Keys = {
  'CANCEL_FOR_SYMBOL': '1',
  'CANCEL_FOR_SECURITY_TYPE': '2',
  'CANCEL_FOR_UNDERLYING_SYMBOL': '3',
  'CANCEL_ALL_QUOTES': '4',
  'CANCEL_QUOTE_SPECIFIED_IN_QUOTEID': '5',
};

QuoteCancelType.Tag = '298';

QuoteCancelType.Type = 'INT';

QuoteCancelType.Values = invert(QuoteCancelType.Keys);

module.exports = QuoteCancelType;
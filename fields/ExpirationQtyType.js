var invert = require('invert-obj');

function ExpirationQtyType (expirationQtyType) {
  this.message = expirationQtyType;
}

ExpirationQtyType.prototype.value = function () {
  return this.message;
};


ExpirationQtyType.Keys = {
  'AUTO_EXERCISE': '1',
  'NON_AUTO_EXERCISE': '2',
  'FINAL_WILL_BE_EXERCISED': '3',
  'CONTRARY_INTENTION': '4',
  'DIFFERENCE': '5',
};

ExpirationQtyType.Tag = '982';

ExpirationQtyType.Type = 'INT';

ExpirationQtyType.Values = invert(ExpirationQtyType.Keys);

module.exports = ExpirationQtyType;
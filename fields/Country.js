var invert = require('invert-obj');

function Country (country) {
  this.message = country;
}

Country.prototype.value = function () {
  return this.message;
};

Country.Tag = '421';

Country.Type = 'COUNTRY';

module.exports = Country;
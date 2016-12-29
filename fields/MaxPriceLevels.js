var invert = require('invert-obj');

function MaxPriceLevels (maxPriceLevels) {
  this.message = maxPriceLevels;
}

MaxPriceLevels.prototype.value = function () {
  return this.message;
};

MaxPriceLevels.Tag = '1090';

MaxPriceLevels.Type = 'INT';

module.exports = MaxPriceLevels;
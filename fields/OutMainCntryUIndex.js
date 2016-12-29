var invert = require('invert-obj');

function OutMainCntryUIndex (outMainCntryUindex) {
  this.message = outMainCntryUindex;
}

OutMainCntryUIndex.prototype.value = function () {
  return this.message;
};

OutMainCntryUIndex.Tag = '412';

OutMainCntryUIndex.Type = 'AMT';

module.exports = OutMainCntryUIndex;
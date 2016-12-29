var invert = require('invert-obj');

function LastUpdateTime (lastUpdateTime) {
  this.message = lastUpdateTime;
}

LastUpdateTime.prototype.value = function () {
  return this.message;
};

LastUpdateTime.Tag = '779';

LastUpdateTime.Type = 'UTCTIMESTAMP';

module.exports = LastUpdateTime;
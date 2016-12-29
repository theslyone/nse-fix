var invert = require('invert-obj');

function TransBkdTime (transBkdTime) {
  this.message = transBkdTime;
}

TransBkdTime.prototype.value = function () {
  return this.message;
};

TransBkdTime.Tag = '483';

TransBkdTime.Type = 'UTCTIMESTAMP';

module.exports = TransBkdTime;
var invert = require('invert-obj');

function ExpireTime (expireTime) {
  this.message = expireTime;
}

ExpireTime.prototype.value = function () {
  return this.message;
};

ExpireTime.Tag = '126';

ExpireTime.Type = 'UTCTIMESTAMP';

module.exports = ExpireTime;
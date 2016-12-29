var invert = require('invert-obj');

function SecurityStatus (securityStatus) {
  this.message = securityStatus;
}

SecurityStatus.prototype.value = function () {
  return this.message;
};


SecurityStatus.Keys = {
  'ACTIVE': '1',
  'INACTIVE': '2',
};

SecurityStatus.Tag = '965';

SecurityStatus.Type = 'STRING';

SecurityStatus.Values = invert(SecurityStatus.Keys);

module.exports = SecurityStatus;
var invert = require('invert-obj');

function SecurityUpdateAction (securityUpdateAction) {
  this.message = securityUpdateAction;
}

SecurityUpdateAction.prototype.value = function () {
  return this.message;
};


SecurityUpdateAction.Keys = {
  'ADD': 'A',
  'DELETE': 'D',
  'MODIFY': 'M',
};

SecurityUpdateAction.Tag = '980';

SecurityUpdateAction.Type = 'CHAR';

SecurityUpdateAction.Values = invert(SecurityUpdateAction.Keys);

module.exports = SecurityUpdateAction;
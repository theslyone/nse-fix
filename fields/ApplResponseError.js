var invert = require('invert-obj');

function ApplResponseError (applResponseError) {
  this.message = applResponseError;
}

ApplResponseError.prototype.value = function () {
  return this.message;
};


ApplResponseError.Keys = {
  'APPLICATION_DOES_NOT_EXIST': '0',
  'MESSAGES_REQUESTED_ARE_NOT_AVAILABLE': '1',
  'USER_NOT_AUTHORIZED_FOR_APPLICATION': '2',
};

ApplResponseError.Tag = '1354';

ApplResponseError.Type = 'INT';

ApplResponseError.Values = invert(ApplResponseError.Keys);

module.exports = ApplResponseError;
var invert = require('invert-obj');

function ApplResponseType (applResponseType) {
  this.message = applResponseType;
}

ApplResponseType.prototype.value = function () {
  return this.message;
};


ApplResponseType.Keys = {
  'REQUEST_SUCCESSFULLY_PROCESSED': '0',
  'APPLICATION_DOES_NOT_EXIST': '1',
  'MESSAGES_NOT_AVAILABLE': '2',
};

ApplResponseType.Tag = '1348';

ApplResponseType.Type = 'INT';

ApplResponseType.Values = invert(ApplResponseType.Keys);

module.exports = ApplResponseType;
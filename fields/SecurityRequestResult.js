var invert = require('invert-obj');

function SecurityRequestResult (securityRequestResult) {
  this.message = securityRequestResult;
}

SecurityRequestResult.prototype.value = function () {
  return this.message;
};


SecurityRequestResult.Keys = {
  'VALID_REQUEST': '0',
  'INVALID_OR_UNSUPPORTED_REQUEST': '1',
  'NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA': '2',
  'NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA': '3',
  'INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE': '4',
  'REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED': '5',
};

SecurityRequestResult.Tag = '560';

SecurityRequestResult.Type = 'INT';

SecurityRequestResult.Values = invert(SecurityRequestResult.Keys);

module.exports = SecurityRequestResult;
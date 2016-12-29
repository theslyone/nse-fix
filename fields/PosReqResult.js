var invert = require('invert-obj');

function PosReqResult (posReqResult) {
  this.message = posReqResult;
}

PosReqResult.prototype.value = function () {
  return this.message;
};


PosReqResult.Keys = {
  'VALID_REQUEST': '0',
  'INVALID_OR_UNSUPPORTED_REQUEST': '1',
  'NO_POSITIONS_FOUND_THAT_MATCH_CRITERIA': '2',
  'NOT_AUTHORIZED_TO_REQUEST_POSITIONS': '3',
  'REQUEST_FOR_POSITION_NOT_SUPPORTED': '4',
  'OTHER': '99',
};

PosReqResult.Tag = '728';

PosReqResult.Type = 'INT';

PosReqResult.Values = invert(PosReqResult.Keys);

module.exports = PosReqResult;
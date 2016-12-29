var CompIDReqGrp = require('../components/CompIDReqGrp');
var NetworkRequestType = require('../fields/NetworkRequestType');
var NetworkRequestID = require('../fields/NetworkRequestID');

function NetworkCounterpartySystemStatusRequest (networkCounterpartySystemStatusRequest) {
  this.message = networkCounterpartySystemStatusRequest;
}

NetworkCounterpartySystemStatusRequest.prototype.compIdreqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NetworkCounterpartySystemStatusRequest.Tags.CompIDReqGrp] === undefined) return null;
  return this.message.groups[NetworkCounterpartySystemStatusRequest.Tags.CompIDReqGrp]
    .map(function (compIdreqGrp) {
      return new CompIDReqGrp(compIdreqGrp);
  });
};

NetworkCounterpartySystemStatusRequest.prototype.networkRequestType = function () {
  return new NetworkRequestType(this.message.tags[NetworkCounterpartySystemStatusRequest.Tags.NetworkRequestType]);
};

NetworkCounterpartySystemStatusRequest.prototype.networkRequestId = function () {
  return new NetworkRequestID(this.message.tags[NetworkCounterpartySystemStatusRequest.Tags.NetworkRequestID]);
};

NetworkCounterpartySystemStatusRequest.Tags = {
  CompIDReqGrp: '936',
  NetworkRequestType: '935',
  NetworkRequestID: '933',
};

NetworkCounterpartySystemStatusRequest.msgType = 'BC';

module.exports = NetworkCounterpartySystemStatusRequest;
var CompIDStatGrp = require('../components/CompIDStatGrp');
var NetworkStatusResponseType = require('../fields/NetworkStatusResponseType');
var NetworkRequestID = require('../fields/NetworkRequestID');
var NetworkResponseID = require('../fields/NetworkResponseID');
var LastNetworkResponseID = require('../fields/LastNetworkResponseID');

function NetworkCounterpartySystemStatusResponse (networkCounterpartySystemStatusResponse) {
  this.message = networkCounterpartySystemStatusResponse;
}

NetworkCounterpartySystemStatusResponse.prototype.compIdstatGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[NetworkCounterpartySystemStatusResponse.Tags.CompIDStatGrp] === undefined) return null;
  return this.message.groups[NetworkCounterpartySystemStatusResponse.Tags.CompIDStatGrp]
    .map(function (compIdstatGrp) {
      return new CompIDStatGrp(compIdstatGrp);
  });
};

NetworkCounterpartySystemStatusResponse.prototype.networkStatusResponseType = function () {
  return new NetworkStatusResponseType(this.message.tags[NetworkCounterpartySystemStatusResponse.Tags.NetworkStatusResponseType]);
};

NetworkCounterpartySystemStatusResponse.prototype.networkRequestId = function () {
  return new NetworkRequestID(this.message.tags[NetworkCounterpartySystemStatusResponse.Tags.NetworkRequestID]);
};

NetworkCounterpartySystemStatusResponse.prototype.networkResponseId = function () {
  return new NetworkResponseID(this.message.tags[NetworkCounterpartySystemStatusResponse.Tags.NetworkResponseID]);
};

NetworkCounterpartySystemStatusResponse.prototype.lastNetworkResponseId = function () {
  return new LastNetworkResponseID(this.message.tags[NetworkCounterpartySystemStatusResponse.Tags.LastNetworkResponseID]);
};

NetworkCounterpartySystemStatusResponse.Tags = {
  CompIDStatGrp: '936',
  NetworkStatusResponseType: '937',
  NetworkRequestID: '933',
  NetworkResponseID: '932',
  LastNetworkResponseID: '934',
};

NetworkCounterpartySystemStatusResponse.msgType = 'BD';

module.exports = NetworkCounterpartySystemStatusResponse;
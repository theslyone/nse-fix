var BidCompRspGrp = require('../components/BidCompRspGrp');
var BidID = require('../fields/BidID');
var ClientBidID = require('../fields/ClientBidID');

function BidResponse (bidResponse) {
  this.message = bidResponse;
}

BidResponse.prototype.bidCompRspGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[BidResponse.Tags.BidCompRspGrp] === undefined) return null;
  return this.message.groups[BidResponse.Tags.BidCompRspGrp]
    .map(function (bidCompRspGrp) {
      return new BidCompRspGrp(bidCompRspGrp);
  });
};

BidResponse.prototype.bidId = function () {
  return new BidID(this.message.tags[BidResponse.Tags.BidID]);
};

BidResponse.prototype.clientBidId = function () {
  return new ClientBidID(this.message.tags[BidResponse.Tags.ClientBidID]);
};

BidResponse.Tags = {
  BidCompRspGrp: '420',
  BidID: '390',
  ClientBidID: '391',
};

BidResponse.msgType = 'l';

module.exports = BidResponse;
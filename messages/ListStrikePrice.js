var InstrmtStrkPxGrp = require('../components/InstrmtStrkPxGrp');
var ListID = require('../fields/ListID');
var TotNoStrikes = require('../fields/TotNoStrikes');
var LastFragment = require('../fields/LastFragment');

function ListStrikePrice (listStrikePrice) {
  this.message = listStrikePrice;
}

ListStrikePrice.prototype.instrmtStrkPxGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[ListStrikePrice.Tags.InstrmtStrkPxGrp] === undefined) return null;
  return this.message.groups[ListStrikePrice.Tags.InstrmtStrkPxGrp]
    .map(function (instrmtStrkPxGrp) {
      return new InstrmtStrkPxGrp(instrmtStrkPxGrp);
  });
};

ListStrikePrice.prototype.listId = function () {
  return new ListID(this.message.tags[ListStrikePrice.Tags.ListID]);
};

ListStrikePrice.prototype.totNoStrikes = function () {
  return new TotNoStrikes(this.message.tags[ListStrikePrice.Tags.TotNoStrikes]);
};

ListStrikePrice.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[ListStrikePrice.Tags.LastFragment]);
};

ListStrikePrice.Tags = {
  InstrmtStrkPxGrp: '428',
  ListID: '66',
  TotNoStrikes: '422',
  LastFragment: '893',
};

ListStrikePrice.msgType = 'm';

module.exports = ListStrikePrice;
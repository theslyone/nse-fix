var invert = require('invert-obj');

function NetGrossInd (netGrossInd) {
  this.message = netGrossInd;
}

NetGrossInd.prototype.value = function () {
  return this.message;
};


NetGrossInd.Keys = {
  'NET': '1',
  'GROSS': '2',
};

NetGrossInd.Tag = '430';

NetGrossInd.Type = 'INT';

NetGrossInd.Values = invert(NetGrossInd.Keys);

module.exports = NetGrossInd;
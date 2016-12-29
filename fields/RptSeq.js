var invert = require('invert-obj');

function RptSeq (rptSeq) {
  this.message = rptSeq;
}

RptSeq.prototype.value = function () {
  return this.message;
};

RptSeq.Tag = '83';

RptSeq.Type = 'INT';

module.exports = RptSeq;
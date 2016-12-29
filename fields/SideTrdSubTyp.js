var invert = require('invert-obj');

function SideTrdSubTyp (sideTrdSubTyp) {
  this.message = sideTrdSubTyp;
}

SideTrdSubTyp.prototype.value = function () {
  return this.message;
};


SideTrdSubTyp.Keys = {
  'CMTA': '0',
  'INTERNAL_TRANSFER': '1',
  'EXTERNAL_TRANSFER': '2',
  'REJECT_FOR_SUBMITTING_TRADE': '3',
  'ADVISORY_FOR_CONTRA_SIDE': '4',
  'OFFSET_DUE_TO_AN_ALLOCATION': '5',
  'ONSET_DUE_TO_AN_ALLOCATION': '6',
  'DIFFERENTIAL_SPREAD': '7',
  'IMPLIED_SPREAD_LEG_EXECUTED_AGAINST_AN_OUTRIGHT': '8',
  'TRANSACTION_FROM_EXERCISE': '9',
  'TRANSACTION_FROM_ASSIGNMENT': '10',
};

SideTrdSubTyp.Tag = '1008';

SideTrdSubTyp.Type = 'INT';

SideTrdSubTyp.Values = invert(SideTrdSubTyp.Keys);

module.exports = SideTrdSubTyp;
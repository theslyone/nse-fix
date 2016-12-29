var invert = require('invert-obj');

function TrdSubType (trdSubType) {
  this.message = trdSubType;
}

TrdSubType.prototype.value = function () {
  return this.message;
};


TrdSubType.Keys = {
  'CMTA': '0',
  'INTERNAL_TRANSFER_OR_ADJUSTMENT': '1',
  'EXTERNAL_TRANSFER_OR_TRANSFER_OF_ACCOUNT': '2',
  'REJECT_FOR_SUBMITTING_SIDE': '3',
  'ADVISORY_FOR_CONTRA_SIDE': '4',
  'OFFSET_DUE_TO_AN_ALLOCATION': '5',
  'ONSET_DUT_TO_AN_ALLOCATION': '6',
  'DIFFERENTIAL_SPREAD': '7',
  'IMPLIED_SPREAD_LEG_EXECUTED_AGAINST_AN_OUTRIGHT': '8',
  'TRANSACTION_FROM_EXERCISE': '9',
  'TRANSACTION_FROM_ASSIGNMENT': '10',
  'ACATS': '11',
  'AI': '14',
  'B': '15',
  'K': '16',
  'LC': '17',
  'M': '18',
  'N': '19',
  'NM': '20',
  'NR': '21',
  'P': '22',
  'PA': '23',
  'PC': '24',
  'PN': '25',
  'R': '26',
  'RO': '27',
  'RT': '28',
  'SW': '29',
  'T': '30',
  'WN': '31',
  'WT': '32',
  'OFF_HOURS_TRADE': '33',
  'ON_HOURS_TRADE': '34',
  'OTC_QUOTE': '35',
  'CONVERTED_SWAP': '36',
  'CROSSED_TRADE': '37',
  'INTERIM_PROTECTED_TRADE': '38',
  'LARGE_IN_SCALE': '39',
};

TrdSubType.Tag = '829';

TrdSubType.Type = 'INT';

TrdSubType.Values = invert(TrdSubType.Keys);

module.exports = TrdSubType;
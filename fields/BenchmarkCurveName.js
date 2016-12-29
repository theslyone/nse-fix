var invert = require('invert-obj');

function BenchmarkCurveName (benchmarkCurveName) {
  this.message = benchmarkCurveName;
}

BenchmarkCurveName.prototype.value = function () {
  return this.message;
};


BenchmarkCurveName.Keys = {
  'EONIA': 'EONIA',
  'EUREPO': 'EUREPO',
  'EURIBOR': 'Euribor',
  'FUTURESWAP': 'FutureSWAP',
  'LIBID': 'LIBID',
  'LIBOR': 'LIBOR',
  'MUNIAAA': 'MuniAAA',
  'OTHER': 'OTHER',
  'PFANDBRIEFE': 'Pfandbriefe',
  'SONIA': 'SONIA',
  'SWAP': 'SWAP',
  'TREASURY': 'Treasury',
};

BenchmarkCurveName.Tag = '221';

BenchmarkCurveName.Type = 'STRING';

BenchmarkCurveName.Values = invert(BenchmarkCurveName.Keys);

module.exports = BenchmarkCurveName;
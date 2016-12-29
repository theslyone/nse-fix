var invert = require('invert-obj');

function Benchmark (benchmark) {
  this.message = benchmark;
}

Benchmark.prototype.value = function () {
  return this.message;
};


Benchmark.Keys = {
  'CURVE': '1',
  '5YR': '2',
  'OLD5': '3',
  '10YR': '4',
  'OLD10': '5',
  '30YR': '6',
  'OLD30': '7',
  '3MOLIBOR': '8',
  '6MOLIBOR': '9',
};

Benchmark.Tag = '219';

Benchmark.Type = 'CHAR';

Benchmark.Values = invert(Benchmark.Keys);

module.exports = Benchmark;
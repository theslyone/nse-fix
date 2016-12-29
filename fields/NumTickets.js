var invert = require('invert-obj');

function NumTickets (numTickets) {
  this.message = numTickets;
}

NumTickets.prototype.value = function () {
  return this.message;
};

NumTickets.Tag = '395';

NumTickets.Type = 'INT';

module.exports = NumTickets;
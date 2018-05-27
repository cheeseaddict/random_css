var $ = require('jquery');

import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes 0$");
  }
}

var tobias = new Adult('Tobias', 'red');
tobias.greet();
tobias.payTaxes();

console.log('asdasasd');

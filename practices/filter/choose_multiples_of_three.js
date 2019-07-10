'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  const condiction = (number) => number % 3 === 0;
  return  collection.filter(condiction);
}

module.exports = choose_multiples_of_three;

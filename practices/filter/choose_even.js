'use strict';

function choose_even(collection) {

  const condiction = (number) => number % 2 === 0;
  return collection.filter(condiction);
}

module.exports = choose_even;

'use strict';
var map_to_four_multiples_add_one = function(collection){
  const arr = collection.map(x => x*4+1 );
  return arr;
};

module.exports = map_to_four_multiples_add_one;

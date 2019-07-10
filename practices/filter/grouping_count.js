'use strict';

function grouping_count(collection) {
  let result = {};
  collection.filter((number) =>{
    result[number] = result[number] >= 1 ? result[number] + 1 : 1;
    console.log(result);
    return true;
  })
  return result;
}

module.exports = grouping_count;

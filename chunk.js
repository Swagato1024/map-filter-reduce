const createChunks = function(contex, element, index, chunkSize) {
  const key = Math.floor(index / chunkSize);
  if(!(key in contex)) {
    contex[key] = [];
  }

  contex[key].push(element);

  return contex;
}

const chunk = function(list, chunkSize) { 
  return list.reduce(function(contex, element, index) {
    return createChunks(contex, element, index,  chunkSize);
  }, {});
}


console.log(Object.values(chunk([1, 2, 3, 4, 5], 3)));
console.log(Object.values(chunk([], 3)));

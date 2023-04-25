const map = function(list, mapper) {
  return  list.reduce(function(context, element) {
    context.push(mapper(element));

    return context;
  }, []);
}

const doubleUp = function(value) {
  return value * 2;
}

const filter = function(list, predicate) {
  return list.reduce(function(context, element) {
    if(predicate(element)) {
      context.push(element);
    }
    return context;
  }, []);
}

console.log(map([1, 2, 3, 5], doubleUp));
console.log(filter([2, 3, 6, 7, 8], function(value) {
  return value % 2 === 0;
}));

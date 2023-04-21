/*
const getShorterList = function(list1, list2) {
  return list1.length < list2.length ? length1 : length2;
}

const getLongerList = function(list1, list2) {
  return list1.length 
}
 */
const zip = function(list1, list2) {
  const zipLength = Math.min(list1.length, list2.length);
  const firstList = list1.slice(0, zipLength);

  return firstList.map(function(element, index) {
    return [element, list2[index]];
  });
}

console.log(zip([1, 2, 3], [4, 5, 6]));
console.log(zip([1,2,3], [4,5,6,7])); // [[1,4], [2,5], [3,6]]
console.log(zip([1,2,3,15,16], [4,5,6])); // [[1,4], [2,5], [3,6]]

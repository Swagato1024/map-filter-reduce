const areObjectsEqual = function(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for(key in obj1) {
    if(obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const countFrequency = function(text) {
  const characters = text.split('');

  return characters.reduce(function(context, currentChar) {
    let charCount = context[currentChar] || 0;
    context[currentChar] = charCount++;

    return context;
  }, {});
}

const isAnargram = function(text1, text2) {
  const occurencesFrequency1 = countFrequency(text1);
  const occurencesFrequency2 = countFrequency(text2);

  return areObjectsEqual(occurencesFrequency1, occurencesFrequency2);
}

console.log(isAnargram('LISTEN', 'SILENT'));

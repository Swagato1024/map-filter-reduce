data = [
  ["The","red", "horse"],
  ["Plane","over","the","ocean"],
  ["Chocolate","ice","cream","is","awesome"], 
  ["this","is","a","long","sentence"]
]

const concat = function(list) {
  return list.reduce(function(sentence, word) {
    sentence += word + ' ';
    return sentence;
  }, '');
}

const makeSentences = function(list) {
  return list.map(function(words) {
    return words.reduce(function(sentence, word) {
      sentence += ' ' + word;

      return sentence;
    });
  });
}

console.log(makeSentences(data));


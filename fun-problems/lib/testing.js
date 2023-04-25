const style = function (text, colorCode) {
  return "\033[" + colorCode + "m" + text + "\033[0m";
}

const yellow = function(text) {
  return style(text, "33"); 
}

const underline = function(text) {
  return text + "\n" +  "-".repeat(text.length);
}

const printHeadline = function(text) {
  console.log(yellow(underline(text)));
}

const expectationMismatchedMessage = function(expected, actual) {
  let message = "";

  message += "     Expected : " + expected;
  message += "\n"
  message += "       Actual : " + actual;

  return message;
}

const formatMessage = function(result, expected, actual, message) {
  const icon = result ? "✅ " : "❌ ";
  const line1 = icon + message;
  const line2 = result ? "" : ("\n" + expectationMismatchedMessage(expected, actual));

  return line1 + line2;
}

let totalTests = 0;
let noOfTestsPassed = 0;

const getTotalNoOfTests = function() {
  return totalTests;
}

const getNoOfTestsPassed = function() {
  return noOfTestsPassed;
}

const updateTestSummary = function(result) {
  totalTests = getTotalNoOfTests() + 1;
  noOfTestsPassed += result ? 1 : 0;
}

const areEqual = function(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  }

  let index = 0;

  while(index < array1.length) {
    if(array1[index] !== array2[index]) {
      return false;
    }

    index++;
  }

  return true;
}

const generateReport = function(result, actual, expected, message) {
  updateTestSummary(result);
  console.log(formatMessage(result, expected, actual, message));
}

const assertEquals = function(actual, expected, message) {
  const result = expected === actual;
  generateReport(result, actual, expected, message);
}

const assertArraysEqual = function(actual, expected, message) {
  const result = areEqual(actual, expected);
  generateReport(result, actual, expected, message);
}

const assertAlmostEquals = function(actual, expected, message) {
  const result = Math.abs(expected - actual) < 0.1;
  generateReport(result, actual, expected, message);
}

const assert2dArray = function(actual, expected, testName) {
  let result = true;
  let index = 0;

  while(index < expected.length && result) {
    result = areEqual(expected[index], actual[index]);
    index++;
  }

  console.log(formatMessage(result, expected, actual, testName));
}

const areObjectsEqual = function(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  if(obj1 === obj2) {
    return true;
  }

  for(let key in obj1) {
    if(obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const assertObjectEqual = function(actual, expected, message) {
  const result = areObjectsEqual(actual, expected);
  generateReport(result, actual, expected, message);
} 

const areArrayOfObjectsEqual = function(actual, expected) {
  if(actual === expected) {
    return true;
  }

  if(actual.length !== expected.length) {
    return false;
  }

  let index = 0;
  let result = true;

  while(index < actual.length && result) {
    if(!areObjectsEqual(actual[index], expected[index])) {
      return false;
    } 

    index++;
  }

  return true;
} 

const assertArrayOfObjectsEqual = function(actual, expected, message) {
  const result = areArrayOfObjectsEqual(actual, expected);
  generateReport(result, actual, expected,  message)
}

const testSummary = function() {
  console.log ("\n Summary : " + getNoOfTestsPassed() + "/" + getTotalNoOfTests() + " passed")
}

exports.assertEquals = assertEquals;
exports.assertArraysEqual = assertArraysEqual;
exports.assert2dArray = assert2dArray;
exports.printHeadline = printHeadline;
exports.testSummary = testSummary;
exports.areEqual = areEqual;
exports.formatMessage = formatMessage;
exports.areObjectsEqual = areObjectsEqual;
exports.assertObjectEqual = assertObjectEqual;
exports.assertArrayOfObjectsEqual = assertArrayOfObjectsEqual;

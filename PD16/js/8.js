function generateCombinations(str) {
  var resultSet = new Set();

  function helper(prefix, remainingStr, remainingLength) {
    if (remainingLength === 0) {
      resultSet.add(prefix);
      return;
    }

    for (var i = 0; i < remainingStr.length; i++) {
      helper(prefix + remainingStr[i], remainingStr.slice(0, i) + remainingStr.slice(i + 1), remainingLength - 1);
      console.log( remainingStr.slice(0, i) + remainingStr.slice(i + 1), remainingLength - 1);
    }
  }

  for (var length = 1; length <= str.length; length++) {
    helper('', str, length);
  }

  return Array.from(resultSet);
}

let zodis = "cat";
console.log(generateCombinations(zodis));
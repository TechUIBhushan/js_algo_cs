function charCount(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (!count[str[i]]) {
      count[str[i]] = 1;
    } else {
      count[str[i]] += 1;
    }
  }
  return count;
}

console.log(charCount("Hi I am Bhushan sharma the technical architect"));

function charCount_one(str) {
  var result = {};
  //loop through each character in string and increment counter by one
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount_one("Hello Bhushan Sharma"));
console.log(charCount_one("{{{{}}}}}}[[[]]]]]](())))"));

// Refactoring code

function charCountFinal(str) {
  var obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCountFinal("Hello World!!"));

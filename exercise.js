// Quick Question #1
// answer: Set(4) {1, 2, 3, 4}

// Quick Question #2
// answer: "ref"

// Quick Question #3
// answer: a Map with the key values:
//       0: {[1,2,3]=>true},
//       1: {[1,2,3]=>false},

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => arr.length !== [...new Set(arr)].length;

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = ([...str]) => {
  return str.reduce((map, letter) => {
    if (isVowel(letter)) {
      if (map.has(letter)) {
        map.set(letter, map.get(letter) + 1);
      } else {
        map.set(letter, 1);
      }
    }
    return map;
  }, new Map());
};

const isVowel = (val) => "aeiou".includes(val);

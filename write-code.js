// Sum Zero: Write a function that takes in an array
// of numbers. The function should return True if any
// two numbers in list sum to 0, and false otherwise.

function addToZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) return true;
    else if (sum > 0) right--;
    else left++;
  }

  return false;
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// Runtime of addToZero is O(n) because it only
// loops through the array once.

// Unique Characters: Write a function that takes
// in a single word, as a string. It should return
// True if that word contains only unique characters.
// Return False otherwise.

function hasUniqueChars(str) {
  let chars = new Set();
  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

// Runtime of addToZero is O(n) because it only
// loops through the array once.

// Pangram Sentence: A pangram is a sentence that
// contains all the letters of the English alphabet
// at least once, like “The quick brown fox jumps
// over the lazy dog.” Write a function to check a
// sentence to see if it is a pangram or not.

function isPangram(sentence) {
  let chars = new Set();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      chars.add(sentence[i].toLowerCase());
    }
  }
  return chars.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// -> True

console.log(isPangram("This is not a pangram."));
// -> False

// Runtime of addToZero is O(n) because it only
// loops through the array once.

// Longest Word: Write a function, longestWord,
// that takes in a sentence as a string and returns
// the longest word in the sentence. You should
// ignore punctuation marks and assume the
// sentence will not be empty.

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Runtime of addToZero is O(n) because it only
// loops through the array once.

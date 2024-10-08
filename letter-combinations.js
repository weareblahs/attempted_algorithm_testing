// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
// recursive, reference: https://www.youtube.com/watch?v=40L6LFHeaIs
function letterCombinations(digits, start = 0) {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  }; // map[(key)] to get available keys, example: map[1] = ['']
  if (digits === "") return []; // check if it is blank
  if (start >= digits.length) return [""];
  // recursive
  const digit = digits[start];
  const letters = map[digit];
  const combinations = [];
  const suffixCombinations = letterCombinations(digits, start + 1);
  for (const letter of letters) {
    for (const suffix of suffixCombinations) {
      combinations.push(letter + suffix);
    }
  }
  return combinations;
}

console.log(letterCombinations("23"));

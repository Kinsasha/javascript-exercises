const palindromes = function (string) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";

  const str = string.toLowerCase();

  const initialStr = str
    .split("")
    .filter((char) => alphanumeric.includes(char))
    .join("");
  const reversedStr = initialStr.split("").reverse().join("");

  console.log(initialStr);
  console.log(reversedStr);
  return initialStr === reversedStr ? true : false;
};

console.log(palindromes("raCecar"));

// Do not edit below this line
// Do not edit below this line
module.exports = palindromes;

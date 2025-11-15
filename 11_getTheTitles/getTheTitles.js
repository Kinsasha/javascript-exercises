const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (arr) {
  const bookNames = arr.map((name) => name.title);
  return bookNames;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;

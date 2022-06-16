console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}
console.log(arraySum([2, 22, 12, 17, 18, 39, 129]));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook = {};
favBook.title = `The Fellowship of the Ring by J.R.R. Tolkien`;
favBook.pages = 423;
favBook.readCount = 2;

favBook.info = function () {
  return `${this.title} is ${this.pages} page(s) and i have read it ${this.readCount} times.`;
};

console.log(favBook);

//ex3

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  let result = [];
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    letters.reverse();
    let reverseWord = letters.join("");
    result.push(reverseWord);
  }
  return result.join(" ");
}

console.log(reverseWords(sentence));

//ex4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
  let headers = data.slice(0, data.indexOf("\n")).split(",");

  let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

  const customArr = valuesList.map((row) => {
    let values = row.split(",");
    let obj = {};

    values.forEach((col, idx) => {
      if (idx < headers.length) {
        obj[headers[idx]] = col;
      } else {
        obj[`misc${idx}`] = col;
      }
    });
    return obj;
  });
  return customArr;
}

console.log(csvConverter(csvData));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence: ", (str) => {
  const result = str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");

  console.log(result);
  rl.close();
});

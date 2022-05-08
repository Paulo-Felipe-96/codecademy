console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

const nums = [1, 2.1, 3.1, 4, 5.1];

function numberSeparator(numbers) {
  const wholeNumbers = [];
  const floatNumbers = [];
  // numbers
  //   .map((num) => num)
  //   .filter((num) => {
  //     Number.isInteger(num) ? wholeNumbers.push(num) : floatNumbers.push(num);
  //   });
  numbers.reduce((acc, curr) => {
    Number.isInteger(curr) ? wholeNumbers.push(curr) : floatNumbers.push(curr);
    return acc;
  }, 0);

  return { wholeNumbers, floatNumbers };
}

console.log(numberSeparator(nums));

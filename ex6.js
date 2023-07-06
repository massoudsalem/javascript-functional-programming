'use strict';

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(newNumber, numbers) {
  if (!numbers.includes(newNumber)) {
	numbers = [...numbers, newNumber];
	numbers.sort((a, b) => a - b);
  }
  return numbers;
}

var luckyLotteryNumbers = [];
var COUNT = 6;

while (luckyLotteryNumbers.length < COUNT) {
  luckyLotteryNumbers = pickNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers)
  );
}

console.log(luckyLotteryNumbers);

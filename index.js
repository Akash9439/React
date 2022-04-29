import emojipedia from "./emojipedia";


var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x)
{
  return (2*x);
}

const newNumbers = numbers.map(double);
console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.
function check(num)
{
  return num>10;
}

const newNumbers1 = numbers.filter(check);
console.log(newNumbers1);
//Reduce - Accumulate a value by doing something to each item in an array.
function add(accumulator,currentNumber)
{
  console.log("Accumulator: "+accumulator);
  console.log("currentNumber: "+currentNumber);
  return accumulator+currentNumber;
}

const newNumbers2 = numbers.reduce(add);
console.log(newNumbers2);
//Find - find the first item that matches from an array.
function give(num)
{
  return num>10;
}
const newNumbers3=numbers.find(give);
console.log(newNumbers3);
//FindIndex - find the index of the first item that matches.
function give1(num)
{
  return num>10;
}
const newNumbers4=numbers.findIndex(give1);
console.log(newNumbers4);


function constraint(emojientry)
{
  return emojientry.meaning.substring(0,100);
}
const object=emojipedia.map(constraint);
console.log(object);

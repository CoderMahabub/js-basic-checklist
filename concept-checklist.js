/* // 1. Declare Three Varialbe
//Solution:
// 1.1. Number Type Variable
var number = 12;
var number2 = 12.5;
// 1.2. String Type Variable
const myName = "Mahabub Azam";
const myFriendName = "Amirul Islam";
// 1.3. Boolean Type Variable
var isYouPassed = true;
var isYouFailed = false; */


/* // 2. Variable let and const
//Solution:
// 2.1. let
let myAge = 15;
myAge = 25;
// 2.2 const
console.log(myAge);
const pi = 3.1416; */


/* // 3. Simple Math Operation(+,-,*,/,%)
//Solution:
let firstNumber = 5;
let secondNumber = 10;
// 3.1 Addition
const summationOfTwoNumbers = firstNumber + secondNumber;
console.log(summationOfTwoNumbers);
// 3.2 Subtraction
const subtractionOfTwoNumbers = firstNumber - secondNumber;
console.log(subtractionOfTwoNumbers);
// 3.3 Multiplication
const multiplicationOfTwoNumbers = firstNumber * secondNumber;
console.log(multiplicationOfTwoNumbers);
// 3.4 Division
const divisionOfTwoNumbers = firstNumber / secondNumber;
console.log(divisionOfTwoNumbers);
// 3.5 Modolus
const modulusOfTwoNumbers = firstNumber % secondNumber;
console.log(modulusOfTwoNumbers); */


/* // 4. comparison (< , >, ==, !=, <=, >=)
//Solution:
// 4.1 <
if (firstNumber < secondNumber) {
    console.log('second number is bigger');
} else {
    console.log('first number is bigger');
}
// 4.2 >
if (firstNumber > secondNumber) {
    console.log('first number is bigger');
} else {
    console.log('second number is bigger');
}
// 4.3 ==
if (firstNumber == secondNumber) {
    console.log('Numbers are equl');
} else {
    console.log('Numbders are not equal');
}
// 4.4 ==
if (firstNumber != secondNumber) {
    console.log('Numbers are Not equl');
} else {
    console.log('Numbders are equal');
}
// 4.5 >
if (firstNumber => secondNumber) {
    console.log('first number is bigger or equal to second number');
} else {
    console.log('second number is bigger');
}
// 4.6 >
if (firstNumber <= secondNumber) {
    console.log('first number is smaller or equal to second number');
} else {
    console.log('second number is bigger');
} */


/* // 5. Two condition Comparison | Fulfill both condition | Fulfill at least one Condition
let thirdNumber = 50;
//Solution:
if (firstNumber > secondNumber && secondNumber > thirdNumber) {
    console.log('First Number is huge');
} else if (secondNumber > firstNumber || secondNumber > thirdNumber) {
    console.log('Second number is bigger than one');
} */

/*
// 6. if else
//Solution:
if (firstNumber <= secondNumber) {
    console.log('first number is smaller or equal to second number');
} else {
    console.log('second number is bigger');
} */


/* // 7. while loop to display  7 -19 all numbers. Only display odd numbers including 7 to 19
let number = 7;
//Solution:
while (number <= 19) {
    // console.log(number);
    if (number % 2 != 0)
        console.log(number);
    number++;
} */

/* // 8. Declare an array. Number of elements. 4th position er element change or update. Add or Remove elements. Check whether a specific value existis in the array?
//Solution:
let arrs = ['book', 'chair', 'table', 'mobile', 'glass'];
const numberOfElement = arrs.length;
console.log('Total Number of Elements: ', numberOfElement);
arrs[1] = 'chairs';
arrs.push('newAdded', 'newAdded2');
arrs.pop();
console.log('Elements are: ', arrs);
if (arrs.indexOf('chais') == -1) {
    console.log('Your asking value does not exist');
}
else {
    console.log('Your asking value exist');
} */



/* // 9.Use any for loop to display every elements of an arrray
//Solution:
const homeElements = ['book', 'chair', 'table', 'mobile', 'glass'];
function homeApp(Elements) {
    for (const homeElement of Elements) {
        console.log(homeElement);
    }
}
console.log(homeApp(homeElements)); */



/* // 10. you have an array of numbers. Display only the numbers bigger than 80.
//Solution:
let numbers = [32, 54, 80, 81, 32, 90, 1, 11, 2, 32, 4, 43, 5, 87];
for (number of numbers) {
    if (number > 80) {
        console.log(number);
    }
} */


/* // 11. write a function that takes three numbers and return multiplication of the three numbers.
//Solution:
function mulOfThreeNumbers(n1, n2, n3) {
    const mulResult = n1 * n2 * n3;
    return mulResult;
}
const mulResult = mulOfThreeNumbers(2, 2, 2);
console.log(mulResult);
 */

// 12. declare an object and change any property of that object.
//Solution:
const students = {
    studentName: 'mahabub',
    sId: 2,
    class: 5,
    age: 11
}
console.log(students);
students.studentName = 'suzon';
students.age = 15;
console.log(students);



//-------1_Write a program that allow to user enter number then printit---------
let number = Number(window.prompt("please enter numer .... "));
console.log("number ..", number);
//-------------------------------------------------------------------------

//-------2_Write a program that allow to user enter two numbers then print the sum of them---------
let number1 = Number(window.prompt("please enter first numer .... "));
let number2 = Number(window.prompt("please enter second numer .... "));
let sum = number1 + number2;
console.log("sum ..", sum);
//-------------------------------------------------------------------------

//-------3_Write a program that allow to user enter two numbers then print the multiplication of them---------
let number1 = Number(window.prompt("please enter first numer .... "));
let number2 = Number(window.prompt("please enter second numer .... "));
let multiplication = number1 * number2;
console.log("multiplication ..", multiplication);
//-------------------------------------------------------------------------

//-------4_Write a program that allow to user enter two numbers then print the division of them---------
let number1 = Number(window.prompt("please enter first numer .... "));
let number2 = Number(window.prompt("please enter second numer .... "));
if(number2 == 0) {

}
else{
division = number1 / number2;
console.log("division ..", division);
}
//-------------------------------------------------------------------------

//-------5_Write a program that allow to user enter two numbers then print the subtraction of them---------
let number1 = Number(window.prompt("please enter first numer .... "));
number2 = Number(window.prompt("please enter second numer .... "));
let subtraction = number1 - number2;
console.log("subtraction ..", subtraction);
//-------------------------------------------------------------------------

/*---------- 6_Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no */
let number1 = Number(window.prompt("please enter first numer .... "));
if(number1 % 3 == 0 && number1 % 4 == 0){
console.log(" yes ........")
}
else{
console.log(" no ........")
}

/*--------7_Write a program that allows the user to insert 2 integers then print the max */
let number1 = Number(window.prompt("please enter first numer .... "));
let number2 = Number(window.prompt("please enter second numer .... "));
if(number1> number2){
    console.log(" max is ..", number1)
}
else{
    console.log(" max is ..", number2 )
}

/*-----8_Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive. */
let number1 = Number(window.prompt("please enter first numer .... "));
if(number1 == 0){
    console.log(" zero" )
}
else if(number1 < 0){
    console.log(" negative  .." )
}
else{
    console.log(" positive  .." )
}

/*-----10_Write a program that take 3 integers from user then print the max element
and the min element. */
let number1 = Number(window.prompt("please enter first numer .... "));
let number2 = Number(window.prompt("please enter second numer .... "));
number3 = Number(window.prompt("please enter third numer .... "));

if(number1 > number2 && number1 > number3  ){
    console.log(" max is ..", number1)
}
 else if(number2 > number1 && number2 > number3){
    console.log(" max is ..", number2)
}
 else if(number3 > number1 && number3 > number2){
    console.log(" max is ..", number3)
}

/*-----11_Write a program that allows the user to insert integer number then
check If a number is oven or odd*/
let number1 = Number(window.prompt("please enter first numer .... "));
if(number1 % 2 == 0){
    console.log(" the number is even  .." )
} else {
        console.log(" the number is odd  .." )

}

/*-----12_Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant*/
let character = window.prompt("please enter character");
character = character.toLowerCase();
switch (character) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("the character is vowel");
        break;

    default:
        console.log("the character is consonant");
}

/*-----13_Write a program that allows user to insert integer then print all numbers between 1to
 that’s number*/
let number = Number(window.prompt("please enter number"));
for (let i = 1; i <= number; i++) {
    console.log(i);
}

// /*-----14_Write a program that allows user to insert integer then print a multiplication table up to 12.*/
let number = Number(window.prompt("please enter number"));
for (let i = 1; i <= 12; i++) {
    let multi = number * i;
    console.log(`${number} * ${i} = ${multi}`);
}

/*-----15_Write a program that allows to user to insert number then print all even numbers
between 1 to this number*/
let number = Number(window.prompt("please enter number"));
for (let i = 2; i <= number; i += 2) {
    console.log(i);
}

/*-----16_Write a program that take two integers then print the power*/
let number1 = Number(window.prompt("please enter first number"));
let number2 = Number(window.prompt("please enter power of number"));
const power = (base, exponent) => {
  if (exponent == 0) {
    return 1;
  } else {
    let result = base ** exponent;
    return result;
  }
};
const result = power(number1, number2);

console.log(`${number1} to the power of ${number2} is ${result}`);

/*-------17_ Write a program to enter marks of five subjects and calculate total, average and
percentage.*/
let fullMark = Number(window.prompt("please enter full mark of each subject"));
let subject1 = Number(window.prompt(`please enter marks of subject 1 (out of ${fullMark})`));
let subject2 = Number(window.prompt(`please enter marks of subject 2 (out of ${fullMark})`));
let subject3 = Number(window.prompt(`please enter marks of subject 3 (out of ${fullMark})`));
let subject4 = Number(window.prompt(`please enter marks of subject 4 (out of ${fullMark})`));
let subject5 = Number(window.prompt(`please enter marks of subject 5 (out of ${fullMark})`));
const avgSubjects = (sub1, sub2, sub3, sub4, sub5) => {
  let total = sub1 + sub2 + sub3 + sub4 + sub5;
  let average = total / 5;
  let percentage = (total / (5 * fullMark)) * 100;
  return { total, average, percentage };
}
const result = avgSubjects(subject1, subject2, subject3, subject4, subject5);
console.log(`Total Marks: ${result.total}`);
console.log(`Average Marks: ${result.average}`);
console.log(`Percentage: ${result.percentage}%`);

/*-------18_Write a program to input month number and print number of days in that
month.*/
let monthNumber = Number(window.prompt("please enter month number (1-12)"));
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (monthNumber >= 1 && monthNumber <= 12) {
    console.log(`Number of days in month ${monthNumber} is ${daysInMonth[monthNumber - 1]}`);

} else {
  console.log("Invalid Month Number");
}

/*-------19_Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade*/
let fullMark = Number(window.prompt("please enter full mark of each subject"));
let subject1 = Number(
  window.prompt(`please enter marks of Physics (out of ${fullMark})`)
);
let subject2 = Number(
  window.prompt(`please enter marks of Chemistry (out of ${fullMark})`)
);
let subject3 = Number(
  window.prompt(`please enter marks of Biology (out of ${fullMark})`)
);
let subject4 = Number(
  window.prompt(`please enter marks of Mathematics (out of ${fullMark})`)
);
let subject5 = Number(
  window.prompt(`please enter marks of Computer (out of ${fullMark})`)
);
const calculateGrade = (sub1, sub2, sub3, sub4, sub5) => {
  let total = sub1 + sub2 + sub3 + sub4 + sub5;
  let percentage = (total / (5 * fullMark)) * 100;
  let grade;
  if (percentage >= 90) {
    grade = "Grad A";
  } else if (percentage < 90 && percentage >= 80) {
    grade = "Grad B";
  } else if (percentage < 80 && percentage >= 70) {
    grade = "Grad C";
  } else if (percentage < 70 && percentage >= 60) {
    grade = "Grad D";
  } else if (percentage < 60 && percentage >= 50) {
    grade = "Grad E";
  } else if (percentage < 50 && percentage >= 40) {
    grade = "Grad F";
  }
 else {
    grade = "Fail";
  }
  return { grade, percentage };
};
const { grade, percentage } = calculateGrade(
  subject1,
  subject2,
  subject3,
  subject4,
  subject5
);
console.log(`  Percentage: ${percentage}% ,Grade: ${grade}`);



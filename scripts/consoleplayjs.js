// typeof
console.log("1. " + typeof 10);
console.log("2. " + typeof "Rose");
console.log("3. " + typeof true);

// let or var to declare a variable
var name = "Rose";
let age = 33;
console.log(`4. Name: ${name}`);
console.log(`5. Age: ${age}`);

// redeclare let or var variables
name = "Clark";
age = 9;
console.log(`6. Name: ${name}`);
console.log(`7. Age: ${age}`);

// const to declare variable
const hello = "Hello";
console.log("8. " + hello);

// redeclare const variable
// hello = "Hi";
// console.log("9. " + hello);
console.log("9. Uncaught TypeError: Assignment to constant variable.");

// Rounding number to integer
console.log("10. Using 'Math.round(2.7)' to round to nearest integer: " + Math.round(2.7));
console.log("11. Using 'Math.ceil(2.7)' to round to UP to nearest integer: " + Math.ceil(2.7));
console.log("12. Using 'Math.floor(2.7)' to round to DOWN to nearest integer: " + Math.floor(2.7));
console.log("13. Using 'Math.trunc(2.7)' to return the integar part of 2.7: " + Math.trunc(2.7));

// Random
console.log("14. Using '(Math.random() * 100) + 1' returns random number between 1 - 100: " + (Math.random() * 100) + 1);

// Arithemetic Operators
console.log("15. " + (5 + 3 * 2));
console.log("16. " + ((5 + 3) * 2));

let x = 1;
let y = 2;
console.log("17. " + (x = y)); // x = y
console.log("18. " + (x += y)); // x = x + y
console.log("19. " + (x -= y)); // x = x - y
console.log("20. " + (x *= y)); // x = x * y
console.log("21. " + (x /= y)); // x = x / y

// Strings
console.log("22. Used double quotes for this string.");
console.log('23. Used single quotes for this string.');
console.log("24. Using 'quotes' inside a string.");
console.log("25. Using backlash to insert \"quotes\" in string.");
console.log("26. Using backlash twice to insert \\");

//String methods
console.log("27. '.length' returns length in string hello: " + hello.length);
console.log("28. '.charAt()' returns character at index 3 of string hello: " + hello.charAt(3));
console.log("29. '.toUpperCase()' converts string to upper case: " + hello.toUpperCase());
console.log("30. '.toLowerCase()' converts string to lower case: " + hello.toLowerCase());

let whitespace = "               no whitespace            ";
console.log("31. '.trim()' removes whitespace: " + whitespace.trim());

// Conditionals
x = 1;
y = 5;

// execute if condition is true
if (x == 1) {
	console.log("32. x is equal to 1");
}

// execute if condition is not true
if ( y != 1) {
	console.log("33. y is not equal to 1");
}

// specify a block of code to be executed, if same consition is false
if (x > 5) {
	console.log("x is greateer than 5");
}
else
{
	console.log("34. x is less than or equal to 5");
}

// specify a new condition to test, if the first condition is false
if (x > 1) {
	console.log("x is greateer than 1");
}
else if (x < 1)
{
	console.log("x is less than 1");
}
else
{
	console.log("35. x is equal to 1.");
}

//  == compares 2 values to see if they are equal 
// === compares 2 values to see if the value and data type are equal
let a = 1;
let b = "1";

if (a == b)
{
	console.log("36. a is equal in magnitude to b regardless of the data type");
}
else
{
	console.log("a is not equal to b");
}

if (a === b)
{
	console.log("a is equal in magnitude to b including data type");
}
else
{
	console.log("37. a is not equal to b");
}

// Arrays
let letters = ["a", "b", "c", "d"];

console.log("38. An array of letters: " + letters);

// use indexing to access array items
console.log("39. Using indexing to access array items in 'letters[0]': " + letters[0]);
console.log("40. Using indexing to access array items in 'letters[1]': " + letters[1]);

// use push() to add items to an array in JS
letters.push("e");
console.log("41. Updated array of letters by using '.push()': " + letters);

// slice() removes that part of the array starting from array element
console.log("42. Using '.slice(1)' on the array of letters: " + letters.slice(1));
console.log("43. Using '.slice(0, 3)' to return first 3 items in array: " + letters.slice(0, 3));

// use join() in order to return items in an array into a sinlge String
console.log("44. Using '.join()' on an array of letters: " + letters.join(""));
console.log("45. Using '.join()' on an array of letters: " + letters.join(", "));

// LOOPS
for (var i = 0; i < 3; i++) {
	console.log("46. Iteration: " + [i]);
}

let students = ["Jim", "James", "Paul", "Tryone"];
for (var i = 0; i < students.length; i++) {
	console.log("47. " + students[i]);
}

// FUNCTIONS
// simple function that adds two numbers together
function addition(a, b) {
	return a + b;
}
console.log("48. addition() function demo: " + addition(15,20));

// simple log statement
function printHello() {
	console.log("Function was called");
}
// output
console.log("49. Demo of a function call: ");
printHello();

// this function accepts a parameter and iterated through an array
function listLoop(userList) {
	for(var i = 0; i < userList.length; i++) {
		console.log(userList[i]);
	}
}

var friends = ["Fred", "Daphne", "Velme", "Shaggy"];
console.log("50. Function with array demo: ");
listLoop(friends);

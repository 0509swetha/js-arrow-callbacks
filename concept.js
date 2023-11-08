1.WHAT IS JAVASCRIPT ?
    JavaScript is the Programming Language for the Web.
JavaScript can update and change both HTML and CSS.
JavaScript can calculate, manipulate and validate data.

2.VARIABLES IN JAVASCRIPT ?
    Numbers :
var x = 5;
var y = 6;
Strings:
var name = "swetha";
Objects:
var sample_obj = {
    name: "swetha",
    age: 25,
    gender: "female"
};
Arrays:
var array = ["swetha", "navya", 100];
Functions:
function myfunction(p1, p2) {
    return p1 * p2;
}

3.WHAT ARE JAVASCRIPT COMMENTS ?
    JavaScript comments can be used to explain JavaScript code, and to make it more readable.
JavaScript comments can also be used to prevent execution, when testing alternative code.

4.JAVASCRIPT VARIABLES ?
    Ways to Declare a JavaScript Variable:
Using var
    Using let
Using const
    Using nothing

5.WHAT IS MEANT BY VARAIBLES ?
    Variables are containers for storing data(storing data values).
In this example, x, y, and z, are variables, declared with the var keyword:
    var x = 5;
var y = 6;
var z = x + y;

6.WHAT IS MEANT BY LET ?
    The let keyword was introduced in ES6(2015).
Variables defined with let can not be redeclared.
Variables defined with let must be declared before use.
Variables defined with let have block scope.


7.WHAT IS MEANT BY CONST ?
    The const keyword was introduced in ES6(2015).
Variables defined with const cannot be Redeclared.
    Variables defined with const cannot be Reassigned.
        Variables defined with const have Block Scope.

8.WHAT ARE JAVASCRIPT OPERATORS ?
    1.Arithmetic Operators:

    + Addition
    - Subtraction
    * Multiplication
    ** Exponentiation(ES2016)
    / Division
    % Modulus(Division Remainder)
++Increment
--Decrement
2.Assignment Operators:
Operator  Example	   Same As
=        x = y      	x = y
+=       x+= y	       x = x + y
-=   	x -= y      	x = x - y
*=	    x *= y      	x = x * y
/=	    x / = y        	x = x / y
%=	    x %= y	        x = x % y
**=	    x **= y      	x = x ** y
3.Comparison Operators:
Operator	Description
==	        equal to
===	        equal value and equal type
!=	        not equal
!==     	not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	         less than or equal to
?	         ternary operator
4.String Operators:
let text1 = "20";
let text2 = "5";
let result = text1 < text2;

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

5.Logical Operators:
Operator	Description
&&	         logical and
||	        logical or
!	        logical not
6.Type Operators:
Operator	    Description
typeof	        Returns the type of a variable
instanceof  	Returns true if an object is an instance of an object type

9.WHAT ARE THE JAVSCRIPT DATA TYPES?

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


10.String
JavaScript strings are for storing and manipulating text.

EXMAPLE:
var name="swetha";
the string operations are:
1.string.length(used to find the length of the string)
console.log(name.length);
output:6
2.string.slice()(used to extract some portion of string and returns as a new string)
console.log(name.slice(2,3));
output:e
3.string.toUppercase()
console,log(name.toUppercase())
var text1="swetha";
var new_text=text1.toUpperCase();
console.log(new_text);
OUTPUT:SWETHA
4.string.toLowerCase()
var text1="SWETHA";
var new_text=text1.toUpperCase();
console.log(new_text);
OUTPUT:swetha
string.concat()(these method is used to join two are more strings)
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);
output:Hello World
string.trim()(this method used to remove spaces from both side of string)
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
output:Hello World!
string.charAt()(these method is used to extract a specific character at specified index)
let text = "HELLO WORLD";
let char = text.charAt(0);
console.log (char);
output:H
string[](these method is used to extract a specific character at specified index)
let text = "HELLO WORLD";
let char = text[0];
console.log(char);
output:H
string.split()(A string can be converted to an array with the split() method:)
let text = "HELLO WORLD";
console.log (text.split());
output:['HELLO WROLD']

FOR LOOP TO PERFORM VARIOUS STRING OPERATIONS:

1.LOOP THROUGH A STRING AND PRINT EACH CHARACTER:
let str="hello world";
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
output:
h
e
l
l
o

w
o
r
l
d
2.CONVERTING A STRING TO UPPERCASE:
let str="hello world";
let result="";
for(let i=0;i<str.length;i++){
    result +=str[i].toUpperCase();
}
console.log(result);
output:
HELLO WORLD

3.REVERSE A STRING:
let str="hello world";
let result="";
for(let i=str.length-1;i>=0;i--){
    result +=str[i];
}
console.log(result);
output:
dlrow olleh

4.REMOVE ALL WHITE SPACES FROM A STRING:
let str = "   hello    world   ";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    result += str[i];
  }
}
console.log(result);
OUTPUT:
helloworld
5.COUNT THE NUMBER OF OCCURRENCES OF A SPECIFIC CHARACTER IN A STRING:
let str = "hello world";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "o") {
    count++;
  }
}
console.log(count);
OUTPUT:
2

ARRAYS:
An array is a special variable, which can hold more than one value:
example:
let array=["swetha","navya","laddu","kunnu",20,30];
ARRAYS METHODS:
1.TO STRING()(These method converst the array into string with commas)
let array=["iam","studying","b.tech","final","year"];
console.log(array.toString());
output:
iam,studying,b.tech,final,year
2.JOIN()(THE JOIN METHOD RETURNS A NEW STRING BY concatenating all of the elements in array)
let array=["iam","studying","b.tech","final","year"];
console.log(array.join());
output:
iam,studying,b.tech,final,year
console.log(array.join(""));
output:
iamstudyingb.techfinalyear
console.log(array.join("-"));
output:
iam-studying-b.tech-final-year
3.POP()(removes the last element of array,and returns the removed element)
let array=["iam","studying","b.tech","final","year"];
console.log(array.pop());
console.log(array);
output:
["iam","studying","b.tech","final"];
4.PUSH()(this method adds a new element to the end of array )
let array=["iam","studying","b.tech","final","year"];
console.log(array.push("1,2"));
console.log(array);
output:
["iam","studying","b.tech","final","year",1,2];
5.SHIFT()(this method removes the first element of array)
let array=["iam","studying","b.tech","final","year"];
console.log(array.shift());
console.log(array);
output:
["studying","b.tech","final","year"];
6.UNSHIFT()(this method adds the element at the starting of array)
let arrary=["iam","studying","b.tech","final","year"];
console.log(array.unshift("currently"));
console.log(array);
output:
["currently","iam","studying","b.tech","final","year"];
7.DELETE[](element from array can be deleted by using delete operator)
let arrary=["iam","studying","b.tech","final","year"];
console.log(delete array[3]);
console.log(array);
output:
["iam","studying","b.tech","year"];
8.CONCAT()(this method joins two or more arrays and returns a new array)
let array1=[1,2,3];
let array2=[4,5,6,7,8];
let array3=[9,10,11,12];
let new_array=array1.concat(array2,array3);
console.log(new_array);
output:
[1,2,3,4,5,6,7,8,9,10,11,12]
9.SORT()(arranging a elements in accending/alphabetical order)
let array=[5,3,1,4,2];
console.log(array.sort());
output:
[1,2,3,4,5]
10.SPLICE(index,howmany,item1,...Block.itemx)(this method add/or remove array elements)
let array=[1,2,3,4,5];
array.splice(2,3,"a","b");
console.log(array);
output:
[1,2,"a","b"]
11.SLICE(start,end)(extract elemnts from array)
let array=[1,2,3,4,5];
let new_array=array.slice(0,3);
console.log(new_array);
output:
[1,2,3,4]
12.REVERSE()(reverse the order of the elements in array)
let array=[1,2,3,4,5];
console.log(array.reverse());
output:
[5,4,3,2,1]
13.isArray()(returns true if an object is array)
syntax:Array.isArray(obj);
let array=[1,2,3,4,5];
console.log(Array.isArray(array));
output:
true
14.INDEXOF()(RETURNS THE INDEX OF THE SPECIFIED VALUE)
let array=[1,2,3,4,5];
console.log(array.indexOf(2,0));
output:
1
ARRAY METHODS BY USING FOR LOOP:
1.PUSH()
let arr = [1, 2, 3];
for (let i = 0; i < 3; i++) {
  let newElement = i + 4;
  arr[arr.length] = newElement;
}
console.log(arr);
 Output: [1, 2, 3, 4, 5, 6]
 2.POP()
 let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (i === arr.length - 2) {
    arr.splice(i + 1, 1);
  }
}
console.log(arr); 
 Output: [1, 2, 3, 4]
 3.SHIFT()
 let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  arr.splice(0, 1);
}
console.log(arr); 
 Output: [2,3,4,5]
 4.UNSHIFT()
 let arr = [1, 2, 3];
for (let i = 2; i >= 0; i--) {
  arr.splice(0, 0, i + 4);
}
console.log(arr); 
Output: [6, 5, 4, 1, 2, 3]
5.MAP()
let arr = [1, 2, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i] * 2;
}
console.log(newArr); 
 Output: [2, 4, 6]

 OBJECTS:
 Objects are key : value pairs elements
 var sample_object = {
    "name": "swapna",
    "marks": 70,
    "company": "tcs",
    "location": "bangalore",
    "salary": "50k"
};
console.log("before adding===",sample_object);
sample_object["citizen"]="indian";
delete sample_object["location"];
console.log("after adding===",sample_object)
console.log(sample_object.name);
var keys = Object.keys(sample_object);
console.log("keys===", keys)
var sample_json=[{
    "name": "latha",
    "marks": 90,
    "company": "accenture",
    "location": "bangalore",
    "salary": "70k",
    "subject_marks":[{"maths":60,"science":40,"telugu":50}]
},
{
    "name": "swarupa",
    "marks": 80,
    "company": "wipro",
    "location": "hyd",
    "salary": "90k"
},
{
    "name": "swetha",
    "marks": "90",
    "company": "cognizant",
    "salary": "75k",
    "location": "banglore",
}
]


 console.log(sample_json);

 FUNCTIONS:

 function functionName(parameters) {
  // code to be executed
}
JavaScript functions are defined with the function keyword.
You can use a function declaration or a function expression.
function myFunction(a, b) {
  return a * b;
}
console.log(result);
output:
ab 

ANONYMOUS FUNCTION:
const x = function (a, b) {
  return a * b
};
console.log(return);
output:
ab 


example:
const multiplyNumbers = function(a, b) {
  return a * b;
}

function calculate(operation, a, b) {
  return operation(a, b);
}

console.log(calculate(addNumbers, 2, 3)); // Output: 5
console.log(calculate(multiplyNumbers, 2, 3)); // Output: 6


function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are the names listed in the function definition.
Function arguments are the real values passed to (and received by) the function.

The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".

In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.

Invoking a Function as a Function
Example
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);   // Will return 20

GLOBAL SCOPE:
in javascript variables declared outside of any function or block have global scope(i.e not inside a {}brackets)
var x=1;
function myFunction(){
  console.log(x);
}
myFunction();
output:1
In this code, the variable x is declared outside of the myFunction function, so it has global scope. The function myFunction is able to access the value of x and log it to the console.
var a=10;
let b=20;
const c=30;
{
    console.log(a);
    console.log(b);
    console.log(c);
}
output:
10
20
30
var a=10;
let b=20;
const c=30;
{
    console.log(a);
    console.log(b);
    console.log(c);
}
    console.log(a);
    console.log(b);
    console.log(c);
    output:
     10
20
30
10
20
30
BLOCKSCOPE:
JavaScript, variables declared using the let and const keywords have block scope. This means that they are only accessible within the block of code in which they are defined.

A block of code is defined by curly braces {}. For example:
{
  let x = 1;
  const y = 2;
  var z = 3;
}

console.log(z); // Output: 3
console.log(x); // Output: Uncaught ReferenceError: x is not defined
console.log(y); // Output: Uncaught ReferenceError: y is not defined
HOISTING:
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their respective scopes at runtime, regardless of where they are declared in the code. This means that variables and functions can be used before they are declared.

However, it is important to note that only the declaration of the variable or function is hoisted, not the assignment or initialization. For example:
console.log(x); // Output: undefined
var x = 1;
In this code, the var declaration of x is hoisted to the top of the scope, so x is defined (but not yet assigned a value) before it is logged to the console. The output is undefined, because the value of x has not yet been assigned.

Function declarations are also hoisted. For example:
myFunction();

function myFunction() {
  console.log('Hello!');
}
In this code, the function declaration of myFunction is hoisted to the top of the scope, so it can be called before it is declared. The output is 'Hello!'.

However, function expressions (functions assigned to variables) are not hoisted in the same way. For example:
myFunction(); // Output: Uncaught TypeError: myFunction is not a function

var myFunction = function() {
  console.log('Hello!');
}
In this code, the variable declaration of myFunction is hoisted, but the function expression assigned to it is not. Attempting to call myFunction before it is assigned a value will result in a TypeError.

It is generally considered good practice to declare all variables and functions at the top of their respective scopes, regardless of whether they will be hoisted or not, to avoid confusion and potential bugs.
DEEP COPY:
In Deep copy, the copy of the original object and the repetitive copies both are stored.
var details_array=[1,2,3,4,5];
var deep_copy=[...details_array];
 deep_copy.push(20,30,60);
 console.log("deepcopy===",deep_copy);
 console.log(details_array);
 output:
 deepcopy=== [
  1,  2,  3,  4,
  5, 20, 30, 60
]
[ 1, 2, 3, 4, 5 ]
SHALLOW COPY:
In Shallow copy, a copy of the original object is stored and only the reference address is finally copied. 
var details_array=[1,2,3,4,5];
console.log(details_array);
var numbers_array=details_array;
console.log(numbers_array);
numbers_array.push(7,8,9);
console.log("shallowcopy===",numbers_array);
console.log(details_array);
OUTPUT:
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
shallowcopy=== [
  1, 2, 3, 4,
  5, 7, 8, 9
]
[
  1, 2, 3, 4,
  5, 7, 8, 9
]
REST OPERATOR:
In JavaScript, the rest operator is denoted by three dots (...) and is used to represent an indefinite number of arguments as an array. The rest operator is typically used in function definitions to allow a function to accept an arbitrary number of arguments.
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
output:
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}
console.log(myBio("bada", "swetha", "student", "enginnering", "female"));
output:
[ 'student', 'enginnering', 'female' ]


function myTable(...values){
    for(var i=1;i<=10;i++){
      console.log("rest operator===",values[i]*8);
    }
  }
  myTable(1,2,3,4,5,6,7,8,9,10);
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
In the above example, the sum function accepts an arbitrary number of arguments using the rest operator ...numbers. The function then loops through each argument and adds them up to return the total sum.
DESTRUCTURING:
Array destructuring allows you to extract values from an array and assign them to individual variables in a single statement. Here is an example:
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: [3, 4, 5]
Object restructuring allows you to extract values from an object and assign them to individual variables with the same key names. Here is an example:

const person = { name: "John", age: 30, city: "New York" };
const { name, age, ...rest } = person;

console.log(name); // Output: "John"
console.log(age); // Output: 30
console.log(rest); // Output: { city: "New York" }

SPREAD OPERATOR:
spread syntax expands iterables into individual elements
function myBio(firstName, lastName, study) { 
  console.log(firstname,lastname,study)
}
myBio("bada", "swetha", "enginnering", );
output:
bada swetha engineering
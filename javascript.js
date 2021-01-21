// Welcome to javascript lesseons::::::


//Variable::

// var price = 121;

// console.log(price);

// console.log(typeof price);

/////////

//String ::::

// var myName = "Imran Khan";

// console.log(myName);

// console.log(typeof myName);

///////////

//Boolean ::: "True" or "False"

// var isHot = true;

// console.log(isHot);

// var isCold = false;

// console.log(isCold);

//////////////

//Make string uppercase::

// var promise = "I promise that I will Work Hard To Become a Programmer"

// promise = promise.toUpperCase();

// console.log(promise);

/////////////////

//Make string lowercase::

// var promise = "I promise that I will Work Hard To Become a Programmer"

// promise = promise.toLocaleLowerCase();
// console.log(promise);

//////////////////


// Identifying the position of a string using indexOf--- an index starts with 0
// and counts white-spaces.

// var promise = "I promise that I will Work Hard To Become a Programmer";

// promise = promise.indexOf("will");

// console.log(promise);

///////////////

// String split-- It divides a string 

// var promise = "I promise that I will Work Hard To Become a Programmer";

// promise = promise.split("I");

//   console.log(promise);


///////////

// Add number::

// var numer1 = 25;
// var number2 = 15.5;
// var total = numer1 + number2;
// console.log(total);

///////////////

// Convert float number to integer::


// var numer1 = 25;
// var number2 = 15.5;

// number2 = parseInt(number2);

// var total = numer1 + number2;

// console.log(total);


// Convert number to string

// var number1 = 25;

// number1 = ""+ number1;

// console.log(typeof number1);

// Using toFixed() keyword:: It displays certain values after desimal

// var number1 = .10;
// var number2 = .20;
// var total = number1 + number2;
// // console.log(total);

// total = total.toFixed(3);
// console.log(total);

// Using toPrecision() keyword:: It displays certain values as a whole or certain length of data.


// var number1 = 1.25;
// var number2 = 1.20;
// var total = number1 + number2;

// total = total.toPrecision(3);
// console.log(total);

////////////

// Math --- +, -, *, /, %

// Addition

// var number1 = 21;
// var number2 = 25;
// var total = number1 + number2;
// console.log(total);


// Deduction


// var number1 = 21;
// var number2 = 25;
// var total = number1 - number2;
// console.log(total);


// Multification

// var number1 = 21;
// var number2 = 25;
// var total = number1 * number2;
// console.log(total);


// Division


// var number1 = 21;
// var number2 = 25;
// var total = number1 / number2;
// console.log(total);

// Reminder

// var number1 = 21;
// var number2 = 25;
// var total = number1 % number2;
// console.log(total);

////////////////////

// Math-- Absolute():: It makes a number absolute

// var number = -5;
// var absoluteNumber = Math.abs(number);
// console.log(absoluteNumber);

/////////////

// Math -- Round() -- It rounds a number

// var number = 5.454545;
// var rounded = Math.round(number);
// console.log(rounded);

////////////

// Math - math.ceil()-- It rounds a numer to its hightest possible value


// var number = 5.090000;
// var result = Math.ceil(number);
// console.log(result);

///////////


// Math- math.floor() -- It rounds a number to its lowest possible value


// var number = 5.956789;

// var result = Math.floor(number);

// console.log(result);

///////////


//Conditionals- if statement-- single condition

// var price = 10;
// if(price == 10){

//     console.log("I will buy this product");

// }else{
//     console.log("I will not buy this product");
// }



/////////////




// Conditional -- if else statement--- double condition using &&-- In that case you have to
//             fullfill both condition otherwise result will be false. 



//  var price = 10;
//  var savingAmount = 10;

// if(price == 10 && savingAmount > 9){
//    console.log("I will buy this product");

// }else{
//     console.log("I will not buy this product");
//  }




/////////////////




//Conditionals with or || statement -- In that case only one condition must be truse

// var price = 10;
// var savingAmount = 10;

// if(price == 9 || savingAmount > 9){
//     console.log("I will buy this product");
// }
// else{
//     console.log("I will not buy this product");
// }

////////////

// Array

// var friendsAge = [27, 26, 29, 28,];
// console.log(friendsAge);

// friendsAge[1] = 35;

// console.log(friendsAge);

//////////

// Array push()-- It pushes new value as a last value:

//  var friendsAge = [27, 26, 29, 28,];
//  console.log(friendsAge);
//  console.log(friendsAge.length);

//  friendsAge.push(30);
//  friendsAge.push(31);
//  console.log(friendsAge);
// console.log(friendsAge.length);

////////////


// Aray- pop()--It removes the last element.

// var friendsAge = [27, 26, 29, 28,];
// friendsAge.pop();
// console.log(friendsAge);

///////////

// Array-shift()-- It removes the first element of an array

// var friendsAge = [27, 26, 29, 28,];

// friendsAge.shift();
// console.log(friendsAge);

/////////////


// Array - unshift-- It added element from beginning

// var friendsAge = [27, 26, 29, 28,];

// friendsAge.unshift(12);
// console.log(friendsAge);

/////////////

// Array -- slice()-- It slices element start value to end value

// var friendsAge = [27, 26, 29, 28,];

// var result = friendsAge.slice(1, 2);
// console.log(result);


//////////


// While loop


// var number = 0;
// while (number<15) {
//     console.log(number);
//     number++;
// }

/////////////


// For loop

// for(var i = 0; i<= 20; i++){

//     console.log(i);
// }


// For loop using array

// var nums = [11, 14, 28, 35, 64, 78, 85];

// for(var i = 0; i<=nums.length; i++){
//     console.log(nums);
// }


//////////


// Switch

// var num = 5;

// switch(num){
//     case 1000:
//         console.log("I'm 1000");
//         break;
//     case 100:
//         console.log("i am 100");
//         break;
//     case 10:
//         console.log("i am ten"); 
//         break;  
//         case 5:
//             console.log("i am five"); 
//             break; 

//      default:
//     console.log("i can't see anything");

// }

/////////////////



// Function - function can be called anytime from variable


// function myName (){
//     console.log("Md. Imran Khan");
//     console.log("I am working hard to become a programmer");
//     console.log("Will i reach my destination?");
// }

// myName();

// var paragraph = "lsjhjfjkhfjdhfjdhfjfhdfhdhdkfdkfdkjfdkfjkfjdkfjkdfjdkfjdk"

// console.log(paragraph);
// myName();

//////////////


// Function with parameter

// function add(num1, num2){
//     var result = num1 + num2;
//     return result;
// }

// var sum = add(15, 17);
// console.log(sum);

//////////////


// Object::

// var student1 = {name:"Md. Imran Khan", id:007, phone: 167};
// var student2 ={name:"Abul", id:0022, phone:712};

// var phoneNo1 = student1.phone;
// console.log(student1);
// console.log(student2);
// console.log(phoneNo1);


////////////////////


// Apply Js conversion of inch to feet using function

// function inchToFeet(inch){

//     var feet = inch/12;
//     return feet;


// }

// var firstFeet = inchToFeet(156);
// console.log(firstFeet);
// var secondFeet = inchToFeet(188);
// console.log(secondFeet);
// var thirdFeet = inchToFeet(200);
// console.log(thirdFeet);

//////////////


// Factorial using for loop and function

// var factorial = 1;
// for (var i = 1; i < 10; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);
// }


// function factorial(n) {

//     var factorial = 1;
//     for (var i = 1; i <= n; i++) {
//         factorial = factorial * i;

//     }
//         return factorial;
// }

//    var result = factorial(10);
//    console.log(result);


//////////////////


// Factorial using while loop and function

// 5! = 1*2*3*4*5

// var i = 1;
// var factorial = 1;
// while (i <= 25) {
//     factorial = factorial * i;

//     i++;

// }

// console.log(factorial);



// function factorial(n) {

//     var i = 1;
//     var factorial = 1;
//     while (i <= n) {
//         factorial = factorial * i;

//         i++;

//     }
//     return factorial;
// }

//  var result = factorial(50);
//  console.log(result);


///////////////////////


// Factorials::::

// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 3!*4
// 6! = (6-1)!*6
// 7! = (7-1)!*7
// 8! = (8-1)!*8
// 9! = (9-1)!*9
// 10! =(10-1)!*10
// n! =(n-1)!*n



// function factorial(n){
//     if(n == 0){
//         return 1;
//     }

//     else{

//         return n * factorial(n-1);
//     }
// }
//  var result = factorial(0);
//  console.log(result);




////////////////////


// Fibonacci sequence::
// 0, 1, 1, 2, 3, 5, 8, 13, 21-------
// 0, 1, 2, 3, 4, 5, 6, 7,   8-------

// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[2-2];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[2] = fibo[2-1] + fibo[2-2];

//var fibo = [0, 1];

// for(var i = 2; i<=10; i++){

//     fibo[i] = fibo[i-1] + fibo[i-2];
//     console.log(fibo[i], fibo[i- 1], fibo[i- 2]);
// }




// var fibo = [0, 1];
// function fibonacci(n) {
//     for (var i = 2; i <= n; i++) {

//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
//     }
//     return fibonacci;
// }

// var result = fibonacci(10);
// console.log(result);

///////////////////



// Febonacci Recursive


// function fibonacci(n){

//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }

//     else{

//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
//  var result = fibonacci(1);
//  console.log(result);


// Problem solution

// Swap

// var a = 5;
// var b = 7;

// console.log("Before swap a=", a, "b=", b);

// var temp = a;
// a = b;
// b = temp;
// console.log("After swap a=", a, "b=", b);

// var x = 5;
// var y = 7;

// x = x+y;
// y = x-y;
// x = x-y;
// console.log("After swap x=", x, "y=", y);


// var p = 5;
// var q = 7;
// [p, q] = [q, p];

// console.log("After swap p=", p, "q=", q);

////////////////////


// Random Number

// var num = 2.45961;

// var result = Math.round(num);
// var result2 = Math.floor(num);
// var result3 = Math.ceil(num);
// var randomNum = Math.random(num) * 6;
// var result4 = Math.round(randomNum);
// console.log(result4);


// for (var i = 0; i < 10; i++) {

//     var randomNum = Math.random(num) * 6;
//     var result4 = Math.round(randomNum);
//     console.log(result4);

// }

///////////////

//Max Number


// var business = 250;
// var minister = 350;
// var secretary = 150;

// if(business>minister){

//     console.log("business is bigger");

// }else{
//     console.log("minister is bigger");
// }


// var max = Math.max(business, minister, secretary);
// console.log(max);


///////////////////


// var marks = [89, 65, 25, 36, 45, 28, 79, 92 ,11, 36, 74, 39];

// var max = marks[0];

// for(var i=0; i<marks.length; i++){

//       var  element = marks[i];
//       if(element > max){

//         max = element;
//       }
// }


// console.log("Heighest value", max);

/////////////


// Sum


// var numbers = [12, 14, 16, 18, 20, 22, 24];

// var sum = 0;

// for(var i =0; i<numbers.length; i++){

//     var element = numbers[i];
    
//     sum = sum + element;
// }

//     console.log("Total number"= sum);


//     function sumNumber(n){

//         var sum = 0;

// for(var i =0; n<numbers.length; i++){

//     var element = numbers[n];

//     sum = sum + element;
// }
//     return sum;
//  }
 
 ////////////////


//  var num = [31, 12, 14, 36, 12, 69, 36, 48, 97, 89, 97];

//  var uniqueNumber = [];

//  for(var i = 0; i<num.length; i++){

//         var element = num[i];
//         var index = uniqueNumber.indexOf(element);

//         if(index == - 1){
//             uniqueNumber.push(element);
//         }

//  }

//  console.log(uniqueNumber);



 ///////////////////////




 
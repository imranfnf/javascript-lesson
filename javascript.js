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
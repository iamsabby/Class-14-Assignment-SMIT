// Question No 1

// function checkCharacterType(inputChar) {
//     // Check if the input is a single character
//     if (inputChar.length === 1) {
//         var charCode = inputChar.charCodeAt(0);

//         // Check if it's a number
//         if (charCode >= 48 && charCode <= 57) {
//             console.log(inputChar + " is a number.");
//         }
//         // Check if it's an uppercase letter
//         else if (charCode >= 65 && charCode <= 90) {
//             console.log(inputChar + " is an uppercase letter.");
//         }
//         // Check if it's a lowercase letter
//         else if (charCode >= 97 && charCode <= 122) {
//             console.log(inputChar + " is a lowercase letter.");
//         }
//         else {
//             console.log(inputChar + " is not a number, uppercase letter, or lowercase letter.");
//         }
//     } else {
//         console.log("Please enter only one character.");
//     }
// }

// checkCharacterType("5");

//Question No 2

// function compareIntegers(num1, num2) {
//     if (num1 === num2) {
//         console.log("The two integers are equal.");
//     } else if (num1 > num2) {
//         console.log(num1 + " is larger than " + num2 + ".");
//     } else {
//         console.log(num2 + " is larger than " + num1 + ".");
//     }
// }

// compareIntegers(55, 99); // Replace with your input integers

//Question No 3

// function checkNumber(number) {
//     if (number > 0) {
//         console.log(number + " is a positive number.");
//     } else if (number < 0) {
//         console.log(number + " is a negative number.");
//     } else {
//         console.log(number + " is zero.");
//     }
// }

// var userInput = prompt("Enter a number:"); // You can use an HTML input field for user input
// var parsedInput = parseFloat(userInput); // Convert the input to a number
// if (!isNaN(parsedInput)) {
//     checkNumber(parsedInput);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }

//Question No 4

// function isVowel(char) {
//     var vowels = "AEIOUaeiou";
//     if (char.length === 1) {
//         return vowels.includes(char);
//     } else {
//         return false;
//     }
// }

// var userInput = prompt("Enter a character:"); // You can use an HTML input field for user input
// if (userInput.length === 1) {
//     var result = isVowel(userInput);
//     console.log(userInput + " is a " + result + " vowel. ");
// } else {
//     console.log("Invalid input. Please enter a single character.");
// }

//Question No 5

// var Password = "Sabih132568";
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password.");
// } else if (userPassword === Password) {
//     console.log("Success");
// } else {
//     console.log("Incorrect");
// }

//Question No 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

//Question No 7

// var userInput = prompt("Time? (1-24)");
// var time = parseInt(userInput);

// if (isNaN(time)) {
//     console.log("Invalid input. Please enter a valid time.");
// } else if (time >= 0 && time < 12) {
//     console.log("Good morning!");
// } else if (time >= 12 && time < 17) {
//     console.log("Good afternoon!");
// } else if (time >= 17 && time < 21) {
//     console.log("Good evening!");
// } else if (time >= 21 && time <= 24) {
//     console.log("Good night!");
// } else {
//     console.log("Invalid input. Please enter a valid time.");
// }

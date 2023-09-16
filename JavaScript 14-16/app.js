//Question No 1

// var studentNames = [];
// console.log(studentNames);

//Question No 2

// var studentNames = new Array();
// console.log(studentNames);

//Question No 3

// var fruits = ["apple", "kela", "kharbooza", "orange"];
// console.log(fruits);

//Question No 4

// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

//Question No 5

// var booleanArray = [true, false, true, false, true];
// console.log(booleanArray);

//Question No 6

// var mixedArray = [1, "kela", true, null, { name: "Sabih", age: 21 }, [1, 3, 2, 5, 6, 8]];
// console.log(mixedArray);

//Question No 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// var qualificationsList = document.getElementById("qualificationsList");
// for (var i = 0; i < qualifications.length; i++) {
//     var listItem = document.createElement("li");
//     listItem.textContent = qualifications[i];
//     qualificationsList.appendChild(listItem);
// }

//Question No 8

// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 240, 480];
// var totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = ((studentScores[i] / totalMarks) * 100).toFixed(0);
//     console.log("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%");
// }

//Question No 10

// var studentScores = [320, 230, 480, 120];
// console.log("Scores of Students:", studentScores);
// studentScores.sort(function (a, b) {
//     return a - b;
// });
// console.log("Ordered Scores of Students:", studentScores);

//Question No 11

// var cities = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];
// var selectedCities = [];
// selectedCities = cities.slice(2, 4); // Copies elements at index 1, 2, and 3 (excluding 4)
// console.log("Cities list:");
// console.log(cities);
// console.log("Selected cities list:");
// console.log(selectedCities);

//Question No 12

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// console.log("Array:");
// console.log(arr);
// console.log("String:");
// console.log(singleString);

//Question No 13

// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// while (devices.length > 0) {
//     var nextDevice = devices.shift();
//     console.log("Out:", nextDevice);
// }

//Question No 14

// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// while (devices.length > 0) {
//     var lastDevice = devices.pop();
//     console.log("Out:", lastDevice);
// }

//Question No 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select id="manufacturerSelect">');
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
// document.write('</select>');

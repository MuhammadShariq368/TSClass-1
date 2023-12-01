// // Question 2//
// console.log("Hello Shariq would you like to learn some Phyton today?")
// // Question 3 //
// const Personname = "Muhammad Shariq";

// console.log(`Person name in lowercase: ${Personname.toLowerCase()}`);
// console.log(`Person name in uppercase: ${Personname.toUpperCase()}`);
// console.log(`Person name in titlecase: ${Personname.charAt(0).toUpperCase() + Personname.slice(1).toLowerCase()}`);
// // Question 4//
// let quote = "A person who never made a mistake never tried anything new.";
// let author = "Albert Einstein";

// console .log(`${author} once said "${quote}"`)

// // Question 5//
// let famous_person = "Albert Einstein";
// let Quote = "A person who never made a mistake never tried anything new.";
// let message = `${famous_person} once said "${Quote}"`

//  console.log(message);

//  // Question 6 //


// // Question 7 //
// // Addition //
// console.log(5+3);
// //Subtraction
// console.log(10 - 2);
// // Multiplication
// console.log(2 * 4);
// // Division
// console.log(16 / 2);

// // Question 8//
// console.log(5 + 3);
// console.log(5 + 3);
// console.log(5 + 3);
// console.log(5 + 3);

// // Question 9//
// let favoritenumber: number = 7;
// let messages: string = `My favorite number is ${favoritenumber}`;
// console.log(messages)

// // Question 10//
// // Program 1: Print "Hello Shariq"
// // Author: Muhammad Shariq
// // Date: 2023-11-24
// console.log("Hello Shariq")
// // This program prints the message "Hello Shariq" to the console.

// // Program 2: Calculate the sum of two numbers
// // Author: Muhammad Shariq
// // Date: 2023-11-24

// function sum(a: number, b: number): number {
//   return a + b;
// }

// // This program defines a function called 'sum' that takes two numbers as input and returns their sum.

// // Question 11//
// // Store names of friends in an array
// // const names: string[] = ["Hamza", "Khurram", "Rashid", "Shahid", "Shahad"];

// // // // Loop through each name and print it
// // for (const name of names) {
// //   console.log(name);
// // }

// // Question 12//
// let names: string[] = ["Hamza", "Khuram", "Shahad", "Faizan", "Sudais"];

// for (let name of names) {
//   console.log(`Hello, ${name}!`);
// }
// // Question 13 //
// let favoriteMotorcycles: string[] = ["Honda CBR650R", "Yamaha YZF-R6", "Kawasaki Ninja ZX-6R", "Ducati Monster 1200", "Suzuki GSX-R1000"];

// for (let motorcycle of favoriteMotorcycles) {
//   console.log(`I would love to own a ${motorcycle} someday.`);
// }
// // Question 14 //
// let dinnerGuests: string[] = ["Muhammad Sudais", "Muhammad Mansoor", "Muhammad Aqib"];

// for (let guest of dinnerGuests) {
//   console.log(`Dear ${guest}, I would be honored to have you join me for dinner. I hope you can make it!`);
// }

// // Question 15 //
// let dinnerGuest: string[] = ["Muhammad Sudais", "Muhammad Mansoor", "Muhammad Aqib"];

// // Remove one guest from the list
// const guestToRemove: string = dinnerGuest[1]; // Remove Muhammad Mansoor from the list
// dinnerGuest.splice(1, 1);

// // Add a new guest to the list
// dinnerGuest.push("Muhammad Talha");

// // Print a message to the guest who couldn't make it
// console.log(`Unfortunately, ${guestToRemove} is unable to attend the dinner.`);

// for (let guest of dinnerGuest) {
//   console.log(`Dear ${guest}, I would be honored to have you join me for dinner. I hope you can make it!`);
// }

// // Question 16 //
// let dinnerGuesttable = ["Muhammad Shariq", "Jhanzaib", "Iqbal"];

// // Add one new guest to the beginning of the array
// dinnerGuesttable.unshift("Mirza Baig");

// // Add one new guest to the middle of the array
// dinnerGuesttable.splice(2, 0, "Ifthikar");

// // Add one new guest to the end of the list using append()
// dinnerGuesttable.push("Muhammad Khalid");

// console.log("I found a bigger dinner table, so now more space is available!");

// for (let guest of dinnerGuesttable) {
//   console.log(`Dear ${guest}, I would be honored to have you join me for dinner. I hope you can make it!`);
// }
// // Question 17 //
// let dinnerGueststable = ["Muhammad Khalid", "Mirza Baig", "Ifthikar", "Jhanzaib", "Iqbal", "Muhammad Shariq"];

// // Remove guests until only two guests remain
// while (dinnerGueststable.length > 2) {
//   let removedGuest = dinnerGueststable.pop();
//   console.log(`Unfortunately, I can't invite you to dinner, ${removedGuest}. I'm so sorry!`);
// }

// console.log("Please join me for dinner, Muhammad Khalid and Mirza Baig!");

// dinnerGueststable.pop(); // Remove Muhammad Khalid
// dinnerGueststable.pop(); // Remove Mirza Baig

// console.log("Dinner guests list:", dinnerGueststable); // Empty list

// // Question 18 //
// let placesToVisit = ["New Zealand", "Japan", "Italy", "Turkey", "Albania"];

// console.log("Original order:");
// for (let place of placesToVisit) {
//     console.log(place);
// }

// console.log("\nAlphabetical order without modifying the original list:");
// let sortedPlaces = placesToVisit.slice(); // Create a copy of the original list
// sortedPlaces.sort();
// for (let place of sortedPlaces) {
//     console.log(place);
// }

// console.log("\nOriginal order:");
// for (let place of placesToVisit) {
//     console.log(place);
// }

// console.log("\nReverse alphabetical order without modifying the original list:");
// sortedPlaces.sort((a, b) => b.localeCompare(a)); // Sort in reverse alphabetical order
// for (let place of sortedPlaces) {
//     console.log(place);
// }

// console.log("\nOriginal order:");
// for (let place of placesToVisit) {
//     console.log(place);
// }

// console.log("\nReverse the order of the list:");
// placesToVisit.reverse();
// for (let place of placesToVisit) {
//     console.log(place);
// }

// console.log("\nOriginal order:");
// placesToVisit.reverse(); // Reverse back to the original order
// for (let place of placesToVisit) {
//     console.log(place);
// }

// console.log("\nSort the list alphabetically:");
// placesToVisit.sort();
// for (let place of placesToVisit) {
//     console.log(place);
// }

// console.log("\nSort the list in reverse alphabetical order:");
// placesToVisit.sort((a, b) => b.localeCompare(a)); // Sort in reverse alphabetical order
// for (let place of placesToVisit) {
//     console.log(place);
// }
// // Question 19 //
// let Guestdinnertable = ["Muhammad Sudais", "Muhammad Aqib", "Muhammad Iqbal"];

// console.log(`You are inviting ${Guestdinnertable.length} people to dinner.`);

// // Question 20 //

// // let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// // let rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Yellow"];
// // let countries: string[] = ["China", "India", "United States", "Indonesia", "Brazil"];
// // let cities: string[] = ["New York City", "Tokyo", "Delhi", "São Paulo", "Mexico City"];
// // let languages: string[] = ["Mandarin", "English", "Hindi", "Spanish", "Arabic"];

// // console.log("Mountains:");
// // for (let mountain of mountains) {
// //   console.log(mountain);
// // }

// // console.log("\nRivers:");
// // for (let river of rivers) {
// //   console.log(river);
// // }

// // console.log("\nCountries:");
// // for (let country of countries) {
// //   console.log(country);
// // }

// // console.log("\nCities:");
// // for (let city of cities) {
// //   console.log(city);
// // }

// // console.log("\nLanguages:");
// // for (let language of languages) {
// //   console.log(language);
// // }

// // Question 21 //

// // interface Mountain {
// //   name: string;
// //   height: number;
// //   location: string;
// // }

// // interface River {
// //   name: string;
// //   length: number;
// //   source: string;
// //   mouth: string;
// // }

// // interface Country {
// //   name: string;
// //   population: number;
// //   capital: string;
// //   continent: string;
  
// // }

// // interface City {
// //   name: string;
// //   population: number;
// //   stateProvince: string;
// //   country: string;
// // }

// // interface Language {
// //   name: string;
// //   nativeSpeakers: number;
// //   origin: string;
// // }

// // const mountEverest: Mountain = {
// //   name: "Mount Everest",
// //   height: 8848.86,
// //   location: "Nepal/China border"
// // };

// // const amazonRiver: River = {
// //   name: "Amazon River",
// //   length: 6400,
// //   source: "Cordillera Oriental of the Peruvian Andes",
// //   mouth: "Atlantic Ocean"
// // };

// // const china: Country = {
// //   name: "China",
// //   population: 1.444  ,
// //   capital: "Beijing",
// //   continent: "Asia"
// // };

// // const newYorkCity: City = {
// //   name: "New York City",
// //   population: 8.5 ,
// //   stateProvince: "New York",
// //   country: "United States"
// // };

// // const mandarin: Language = {
// //   name: "Mandarin",
// //   nativeSpeakers: 1.1 ,
// //   origin: "Northern China"
// // };

// // console.log("Mountain:");
// // console.log(mountEverest);

// // console.log("\nRiver:");
// // console.log(amazonRiver);

// // console.log("\nCountry:");
// // console.log(china);

// // console.log("\nCity:");
// // console.log(newYorkCity);

// // console.log("\nLanguage:");
// // console.log(mandarin);

// // Question 22 //
// const mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// try {
//   console.log("The fifth mountain is:", mountains[3]);
// } catch (error) {
//   console.error("An error occurred:", error);
// }

// Question 23 //

// let car = 'subaru';

// // Test 1: Check if car is equal to 'subaru'
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car !== 'subaru');

// // Test 2: Check if car is not equal to 'toyota'
// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');

// // Test 3: Check if car is strictly equal to 'subaru'
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru');

// // Test 4: Check if car is not strictly equal to 'toyota'
// console.log("Is car !== 'toyota'? I predict True.");
// console.log(car == 'toyota');

// // Test 5: Check if car is greater than 'honda'
// console.log("Is car > 'Caltus'? I predict True.");
// console.log(car > 'honda');

// // Test 6: Check if car is less than 'lexus'
// console.log("Is car < 'lexus'? I predict True.");
// console.log(car < 'lexus');

// // Test 7: Check if car is greater than or equal to 'acura'
// // console.log("Is car >= 'acura'? I predict True.");
// // console.log(car >= 'acura');

// // // Test 8: Check if car is less than or equal to 'bmw'
// // console.log("Is car <= 'bmw'? I predict True.");
// // console.log(car <= 'bmw');

// // // Test 9: Check if car is equal to 'subaru' or 'toyota'
// // console.log("Is car == 'subaru' || 'toyota'? I predict True.");
// // console.log(car == 'subaru' || 'toyota');

// // // Test 10: Check if car is not equal to 'subaru' and 'toyota'
// // console.log("Is car != 'subaru' && 'toyota'? I predict True.");
// // console.log(car != 'subaru' && 'toyota');

// // Question 24 //

// // String comparisons

// let car = 'subaru';
// let color = 'red';

// // Equality and inequality with strings

// console.log("\nString Comparisons:");
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// console.log("\nIs color != 'blue'? I predict True.");
// console.log(color == 'blue');

// // Lowercase function

// console.log("\nLowercase Function:");
// let names = 'ALEX';

// console.log("Is name.toLowerCase() == 'alex'? I predict True.");
// console.log( names.toLowerCase()== 'alex');


// // Numerical comparisons

// let age = 25;
// let height = 175;

// console.log("\nNumerical Comparisons:");
// console.log("Is age < 20? I predict True.");
// console.log(age > 20);

// console.log("\nIs height < 180? I predict True.");
// console.log(height < 180);

// console.log("\nIs age == 25? I predict True.");
// console.log(age >= 25);

// console.log("\nIs height <= 175? I predict True.");
// console.log(height <= 175);

// // "And" and "Or" operators

// console.log("\nLogical Operators:");
// let isStudent = true;
// let isTeacher = false;

// console.log("Is student and teacher? I predict False.");
// console.log(isStudent && isTeacher);

// console.log("\nIs student or teacher? I predict True.");
// console.log(isStudent || isTeacher);

// // Array membership

// let fruits = ['apple', 'banana', 'orange'];

// console.log("\nArray Membership:");
// console.log("Is 'apple' in fruits? I predict True.");
// console.log('apple' in fruits);

// console.log("\nIs 'grape' not in fruits? I predict True.");
// console.log('grape')

// Question 25//
// const alienColor: string = "green";

// if (alienColor === "green") {
//   console.log("You just earned 5 points!");
// } else {
//   console.log("No points for you!");
// }
// let alienColors: string = "red";

// if (alienColors === "red") {
//   console.log("You just earned 5 points!");
// } else {
// //   console.log("No points for you!");
// }
// let alienColor: string = "Yellow";

// if (alienColor !== "Yellow") {
//   console.log("You just earned 5 points!");
// } else {
//   console.log("No points for you!");
// }

// Question 26 //
// let alienColor: string = "green";

// if (alienColor === "green") {
//   console.log("You just earned 5 points for shooting the alien!");
// } else {
//   console.log("You just earned 10 points for shooting the alien!");
// }

// let alienColor: string = "red";

// if (alienColor === "green") {
//   console.log("You just earned 5 points for shooting the alien!");
// } else {
//   console.log("You just earned 10 points for shooting the alien!");
// }

// Question 27 //
// let alienColor: string = "green";

// if (alienColor === "green") {
//   console.log("You just earned 5 points for shooting the alien!");
// } else if (alienColor === "yellow") {
//   console.log("You just earned 10 points for shooting the alien!");
// } else if (alienColor === "red") {
//   console.log("You just earned 15 points for shooting the alien!");
// } else {
//   console.log("Unknown alien color. No points awarded.");
// }


// let alienColor: string = "yellow";

// if (alienColor === "green") {
//   console.log("You just earned 5 points for shooting the alien!");
// } else if (alienColor === "yellow") {
//   console.log("You just earned 10 points for shooting the alien!");
// } else if (alienColor === "red") {
//   console.log("You just earned 15 points for shooting the alien!");
// } else {
//   console.log("Unknown alien color. No points awarded.");
// }



// let alienColor: string = "red";

// if (alienColor === "green") {
//   console.log("You just earned 5 points for shooting the alien!");
// } else if (alienColor === "yellow") {
//   console.log("You just earned 10 points for shooting the alien!");
// } else if (alienColor === "red") {
//   console.log("You just earned 15 points for shooting the alien!");
// } else {
//   console.log("Unknown alien color. No points awarded.");
// }

// Question 28 //
// const age: number = 63;
// let stageOfLife: string = "";

// if (age < 2) {
//   stageOfLife = "baby";
// } else if (age < 4) {
//   stageOfLife = "toddler";
// } else if (age < 13) {
//   stageOfLife = "kid";
// } else if (age < 20) {
//   stageOfLife = "teenager";
// } else if (age < 65) {
//   stageOfLife = "adult";
// } else {
//   stageOfLife = "elder";
// }

// console.log("Based on your age of " + age + ", you are considered a(n) " + stageOfLife + ".");



// // Question 29 //
// let favoriteFruits: string[] = ["apples", "bananas", "oranges"];

// console.log("Checking for favorite fruits:");

// if (favoriteFruits.includes("apples")) {
//   console.log("You really like apples!");
// }

// if (favoriteFruits.includes("bananas")) {
//   console.log("You really like bananas!");
// }

// if (favoriteFruits.includes("oranges")) {
//   console.log("You really like oranges!");
// }

// if (favoriteFruits.includes("grapes")) {
//   console.log("You really like grapes!");
// }

// if (favoriteFruits.includes("strawberries")) {
//   console.log("You really like strawberries!");
// }

// Question 30 //

// const usernames = ["admin", "Shariq", "Arif", "Abid", "Ayesha"];

// for (const username of usernames) {
//   if (username === "admin") {
//     console.log(`Hello ${username}, would you like to see a status report?`);
//   } else {
//     console.log(`Hello ${username}, thank you for logging in again.`);
//   }
// }

// Question 31 //

// const usernames: string[] = []; // Empty array

// if (usernames.length === 0) {
//   console.log("We need to find some users!");
// } else {
//   for (const username of usernames) {
//     if (username === "admin") {
//       console.log(`Hello ${username}, would you like to see a status report?`);
//     } else {
//       console.log(`Hello ${username}, thank you for logging in again.`);
//     }
//   }
// }

// Question 32 //

// const currentUsers: string[] = ["admin", "Raja", "john", "Hifza", "Iqra"];
// const newUsers: string[] = ["Babar", "Aqsa", "john", "neha", "rashid"];

// for (const newUser of newUsers) {
//   let isUsernameTaken = false;

//   // Check if the username is already in the currentUsers list
//   for (const currentUser of currentUsers) {
//     if (newUser.toLowerCase() === currentUser.toLowerCase()) {
//       isUsernameTaken = true;
//       break;
//     }
//   }

//   if (isUsernameTaken) {
//     console.log(`Username '${newUser}' is already taken. Please enter a new username.`);
//   } else {
//     console.log(`Username '${newUser}' is available.`);
//   }
// }

// Question 33 //

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of numbers) {
//   let ordinalSuffix = "th";

//   if (number === 1) {
//     ordinalSuffix = "st";
//   } else if (number === 2) {
//     ordinalSuffix = "nd";
//   } else if (number === 3) {
//     ordinalSuffix = "rd";
//   }

//   console.log(`${number}${ordinalSuffix}`);
// }

// Question 34 //

// const favoritePizzas: string[] = ["fajita", "cheese", "Afghani"];

// for (const pizza of favoritePizzas) {
//   console.log(`I like ${pizza} pizza.`);
// }

// console.log("\nI really love pizza!");

// Question 35 //
// const friendlyAnimals: string[] = ["dog", "cat", "rabbit"];

// for (const animal of friendlyAnimals) {
//   console.log(`${animal} would make a great pet.`);
// }

// console.log("\nAny of these animals would make a great companion!");


// Question 36 //

"use strict";
// Question 2//
console.log("Hello Shariq would you like to learn some Phyton today?");
// Question 3 //
const Personname = "Muhammad Shariq";
console.log(`Person name in lowercase: ${Personname.toLowerCase()}`);
console.log(`Person name in uppercase: ${Personname.toUpperCase()}`);
console.log(`Person name in titlecase: ${Personname.charAt(0).toUpperCase() + Personname.slice(1).toLowerCase()}`);
// Question 4//
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said "${quote}"`);
// Question 5//
let famous_person = "Albert Einstein";
let Quote = "A person who never made a mistake never tried anything new.";
let message = `${famous_person} once said "${Quote}"`;
console.log(message);
// Question 6 //
// Question 7 //
// Addition //
console.log(5 + 3);
//Subtraction
console.log(10 - 2);
// Multiplication
console.log(2 * 4);
// Division
console.log(16 / 2);
// Question 8//
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// Question 9//
let favoritenumber = 7;
let messages = `My favorite number is ${favoritenumber}`;
console.log(messages);
// Question 10//
// Program 1: Print "Hello Shariq"
// Author: Muhammad Shariq
// Date: 2023-11-24
console.log("Hello Shariq");
// This program prints the message "Hello Shariq" to the console.
// Program 2: Calculate the sum of two numbers
// Author: Muhammad Shariq
// Date: 2023-11-24
function sum(a, b) {
    return a + b;
}
// This program defines a function called 'sum' that takes two numbers as input and returns their sum.
// Question 11//
// Store names of friends in an array
// const names: string[] = ["Hamza", "Khurram", "Rashid", "Shahid", "Shahad"];
// // // Loop through each name and print it
// for (const name of names) {
//   console.log(name);
// }
// Question 12//
let names = ["Hamza", "Khuram", "Shahad", "Faizan", "Sudais"];
for (let name of names) {
    console.log(`Hello, ${name}!`);
}
// Question 13 //
let favoriteMotorcycles = ["Honda CBR650R", "Yamaha YZF-R6", "Kawasaki Ninja ZX-6R", "Ducati Monster 1200", "Suzuki GSX-R1000"];
for (let motorcycle of favoriteMotorcycles) {
    console.log(`I would love to own a ${motorcycle} someday.`);
}
// Question 14 //
let dinnerGuests = ["Muhammad Sudais", "Muhammad Mansoor", "Muhammad Aqib"];
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. I hope you can make it!`);
}
// Question 15 //
let dinnerGuest = ["Muhammad Sudais", "Muhammad Mansoor", "Muhammad Aqib"];
// Remove one guest from the list
const guestToRemove = dinnerGuest[1]; // Remove Muhammad Mansoor from the list
dinnerGuest.splice(1, 1);
// Add a new guest to the list
dinnerGuest.push("Muhammad Talha");
// Print a message to the guest who couldn't make it
console.log(`Unfortunately, ${guestToRemove} is unable to attend the dinner.`);
for (let guest of dinnerGuest) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. I hope you can make it!`);
}
// Question 16 //
let dinnerGuesttable = ["Muhammad Shariq", "Jhanzaib", "Iqbal"];
// Add one new guest to the beginning of the array
dinnerGuesttable.unshift("Mirza Baig");
// Add one new guest to the middle of the array
dinnerGuesttable.splice(2, 0, "Ifthikar");
// Add one new guest to the end of the list using append()
dinnerGuesttable.push("Muhammad Khalid");
console.log("I found a bigger dinner table, so now more space is available!");
for (let guest of dinnerGuesttable) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. I hope you can make it!`);
}
// Question 17 //
let dinnerGueststable = ["Muhammad Khalid", "Mirza Baig", "Ifthikar", "Jhanzaib", "Iqbal", "Muhammad Shariq"];
// Remove guests until only two guests remain
while (dinnerGueststable.length > 2) {
    let removedGuest = dinnerGueststable.pop();
    console.log(`Unfortunately, I can't invite you to dinner, ${removedGuest}. I'm so sorry!`);
}
console.log("Please join me for dinner, Muhammad Khalid and Mirza Baig!");
dinnerGueststable.pop(); // Remove Muhammad Khalid
dinnerGueststable.pop(); // Remove Mirza Baig
console.log("Dinner guests list:", dinnerGueststable); // Empty list
// Question 18 //
let placesToVisit = ["New Zealand", "Japan", "Italy", "Turkey", "Albania"];
console.log("Original order:");
for (let place of placesToVisit) {
    console.log(place);
}
console.log("\nAlphabetical order without modifying the original list:");
let sortedPlaces = placesToVisit.slice(); // Create a copy of the original list
sortedPlaces.sort();
for (let place of sortedPlaces) {
    console.log(place);
}
console.log("\nOriginal order:");
for (let place of placesToVisit) {
    console.log(place);
}
console.log("\nReverse alphabetical order without modifying the original list:");
sortedPlaces.sort((a, b) => b.localeCompare(a)); // Sort in reverse alphabetical order
for (let place of sortedPlaces) {
    console.log(place);
}
console.log("\nOriginal order:");
for (let place of placesToVisit) {
    console.log(place);
}
console.log("\nReverse the order of the list:");
placesToVisit.reverse();
for (let place of placesToVisit) {
    console.log(place);
}
console.log("\nOriginal order:");
placesToVisit.reverse(); // Reverse back to the original order
for (let place of placesToVisit) {
    console.log(place);
}
console.log("\nSort the list alphabetically:");
placesToVisit.sort();
for (let place of placesToVisit) {
    console.log(place);
}
console.log("\nSort the list in reverse alphabetical order:");
placesToVisit.sort((a, b) => b.localeCompare(a)); // Sort in reverse alphabetical order
for (let place of placesToVisit) {
    console.log(place);
}
// Question 19 //
let Guestdinnertable = ["Muhammad Sudais", "Muhammad Aqib", "Muhammad Iqbal"];
console.log(`You are inviting ${Guestdinnertable.length} people to dinner.`);
// Question 20 //
// let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// let rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Yellow"];
// let countries: string[] = ["China", "India", "United States", "Indonesia", "Brazil"];
// let cities: string[] = ["New York City", "Tokyo", "Delhi", "São Paulo", "Mexico City"];
// let languages: string[] = ["Mandarin", "English", "Hindi", "Spanish", "Arabic"];
// console.log("Mountains:");
// for (let mountain of mountains) {
//   console.log(mountain);
// }
// console.log("\nRivers:");
// for (let river of rivers) {
//   console.log(river);
// }
// console.log("\nCountries:");
// for (let country of countries) {
//   console.log(country);
// }
// console.log("\nCities:");
// for (let city of cities) {
//   console.log(city);
// }
// console.log("\nLanguages:");
// for (let language of languages) {
//   console.log(language);
// }
// Question 21 //
// interface Mountain {
//   name: string;
//   height: number;
//   location: string;
// }
// interface River {
//   name: string;
//   length: number;
//   source: string;
//   mouth: string;
// }
// interface Country {
//   name: string;
//   population: number;
//   capital: string;
//   continent: string;
// }
// interface City {
//   name: string;
//   population: number;
//   stateProvince: string;
//   country: string;
// }
// interface Language {
//   name: string;
//   nativeSpeakers: number;
//   origin: string;
// }
// const mountEverest: Mountain = {
//   name: "Mount Everest",
//   height: 8848.86,
//   location: "Nepal/China border"
// };
// const amazonRiver: River = {
//   name: "Amazon River",
//   length: 6400,
//   source: "Cordillera Oriental of the Peruvian Andes",
//   mouth: "Atlantic Ocean"
// };
// const china: Country = {
//   name: "China",
//   population: 1.444  ,
//   capital: "Beijing",
//   continent: "Asia"
// };
// const newYorkCity: City = {
//   name: "New York City",
//   population: 8.5 ,
//   stateProvince: "New York",
//   country: "United States"
// };
// const mandarin: Language = {
//   name: "Mandarin",
//   nativeSpeakers: 1.1 ,
//   origin: "Northern China"
// };
// console.log("Mountain:");
// console.log(mountEverest);
// console.log("\nRiver:");
// console.log(amazonRiver);
// console.log("\nCountry:");
// console.log(china);
// console.log("\nCity:");
// console.log(newYorkCity);
// console.log("\nLanguage:");
// console.log(mandarin);
// Question 22 //
const mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
try {
    console.log("The fifth mountain is:", mountains[3]);
}
catch (error) {
    console.error("An error occurred:", error);
}

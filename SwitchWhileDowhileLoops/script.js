// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a,b) {
//    return a**b 
// }
// let a=power(2,3);
// console.log(a);


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

// function isLeapYear(year) {
//     // A year is a leap year if divisible by 4, 
//     // but not divisible by 100 unless it is also divisible by 400.
//     if ((year % 4 === 0 &&  year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example usage:
// let year = +prompt('enter year'); // You can replace this with any year to check
// if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function semiParameter(a,b,c) {
//     return  (a+b+c)/2; // we can directly return the calculation without variable assigning
// }


// function area (a,b,c,s) {
   
//     return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// }

// let a1 =semiParameter(+prompt('Enter first number'),+prompt('Enter second number'),+prompt('Enter third number'));
// document.write('Semiparameter of triangle is ' + a1 + '<br>');


// let b1=area(3,4,5,a1);
// document.write('Area of Triangle is ' + b1);


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// function average(student1,student2,student3) {
//     return ((student1+student2+student3)/3).toFixed(1);
// }

// function  percentage (student1,student2,student3,totalmarks) {
//     return ((student1+student2+student3)/(totalmarks*3 )*100).toFixed(1)  ;

// }

// function  mainfunction() {
//     let a=average(100,200,500);
//     document.write('Average of marks are ' + a + '<br>');
    
//     let b=percentage(100,200,500,700);
//     document.write('percentage of marks are ' + b + '%');

// }
// mainfunction();


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function indexOf(str,char) {
    
//     for (let index = 0; index < str.length; index++) {
//         if (str[index]===char) {
//             return index;
//         }
//     }
//     return -1;

    
// }

// let z=indexOf('naseemwali','a');
// console.log(z);

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function removeVowels(a) {
//    return a.replace(/[aeiou]/g,''); // 
// }


// let user=prompt('enter any word or sentence');
// let user1=user.toLowerCase()

// let c=removeVowels(user1)
// console.log(c);


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function countSuccessiveVowels(text) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < text.length - 1; i++) {
//         let firstChar = text[i];
//         let secondChar = text[i + 1];

//         // Check if both characters are vowels
//         if (vowels.includes(firstChar) && vowels.includes(secondChar)) {
//             switch (firstChar + secondChar) {
//                 case 'aa':
//                 case 'ae':
//                 case 'ai':
//                 case 'ao':
//                 case 'au':
//                 case 'ea':
//                 case 'ee':
//                 case 'ei':
//                 case 'eo':
//                 case 'eu':
//                 case 'ia':
//                 case 'ie':
//                 case 'ii':
//                 case 'io':
//                 case 'iu':
//                 case 'oa':
//                 case 'oe':
//                 case 'oi':
//                 case 'oo':
//                 case 'ou':
//                 case 'ua':
//                 case 'ue':
//                 case 'ui':
//                 case 'uo':
//                 case 'uu':
//                 // Add uppercase pairs if needed, e.g., 'AA', 'AE', etc.
//                     count++;
//                     break;
//                 default:
//                     // Do nothing for other characters
//                     break;
//             }
//         }
//     }

//     return count;
// }

// let sentence = "This is a beautiful view of the zoo";
// let result = countSuccessiveVowels(sentence);
// console.log("Number of successive vowels:", result);


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function converttometers(a) {
//     return a*1000;
// } 

// function converttofeet(a) {
//     return a*3280.84;
// }

// function converttoinches(a){
//     return a*39370.1;
// }

// function converttocentimeters(a) {
//     return a*100000;
// }

// let a=parseFloat(prompt('Enter distance in km'));

// let a1= converttometers(a);
// document.write('In meters ' + a1 + '<br>')

// let a2=converttofeet(a);
// document.write('In feet ' + a2 + '<br>');

// let a3=converttoinches(a);
// document.write('In inches ' + a3 + '<br>');

// let a4=converttocentimeters(a);
// document.write('In centimeters ' + a4 + '<br>');


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//     let overtimeRate = 12.00;
//     let regularHours = 40;
    
//     if (hoursWorked > regularHours) {
//         let overtimeHours = hoursWorked - regularHours;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0; // No overtime pay if hours worked are 40 or less
//     }
// }

// // Taking the number of hours worked as input from the user
// let hoursWorked = parseInt(prompt("Enter the number of hours worked: "));

// // Calculating overtime pay
// let overtimePay = calculateOvertimePay(hoursWorked);

// // Display the result
// if (overtimePay > 0) {
//     console.log("Overtime pay: Rs. " + overtimePay);
// } else {
//     console.log("No overtime pay, since hours worked are 40 or less.");
// }



// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// function calculateNotes(amount) {
//     let hundredNotes = Math.floor(amount / 100); // Number of 100s
//     amount = amount % 100; // Remaining amount after 100s
    
//     let fiftyNotes = Math.floor(amount / 50); // Number of 50s
//     amount = amount % 50; // Remaining amount after 50s
    
//     let tenNotes = Math.floor(amount / 10); // Number of 10s
    
//     return {
//         hundredNotes: hundredNotes,
//         fiftyNotes: fiftyNotes,
//         tenNotes: tenNotes
//     };
// }

// // Taking the amount as input from the user
// let amount = parseInt(prompt("Enter the amount to withdraw in hundreds: "));

// // Validating that the amount is a multiple of 10 (since we have denominations of 10, 50, and 100)
// if (amount % 10 === 0) {
//     // Calculate the notes
//     let notes = calculateNotes(amount);
    
//     // Displaying the result
//     console.log("Number of 100 Rs notes: " + notes.hundredNotes);
//     console.log("Number of 50 Rs notes: " + notes.fiftyNotes);
//     console.log("Number of 10 Rs notes: " + notes.tenNotes);
// } else {
//     console.log("Invalid amount. The amount should be a multiple of 10.");
// }


// EVENTS 

// 3. Display 10 student records in table and each row should contain a delete  button. If you click on a button to delete a record, entire row should be  deleted. 



  // Array to hold student records
//   let students = [
//     { id: 1, name: "John Doe", class: "10th" },
//     { id: 2, name: "Jane Smith", class: "9th" },
//     { id: 3, name: "Michael Brown", class: "8th" },
//     { id: 4, name: "Emily Davis", class: "7th" },
//     { id: 5, name: "Chris Johnson", class: "6th" },
//     { id: 6, name: "Jessica Lee", class: "5th" },
//     { id: 7, name: "David Wilson", class: "4th" },
//     { id: 8, name: "Sarah Moore", class: "3rd" },
//     { id: 9, name: "Daniel Taylor", class: "2nd" },
//     { id: 10, name: "Sophia Anderson", class: "1st" }
// ];

// // Function to create table rows
// function populateTable() {
//     const tableBody = document.querySelector("#studentTable tbody");
//     tableBody.innerHTML = ""; // Clear the table before populating

//     students.forEach((student, index) => {
//         let row = document.createElement("tr");

//         row.innerHTML = `
//             <td>${student.id}</td>
//             <td>${student.name}</td>
//             <td>${student.class}</td>
//             <td><button onclick="deleteRow(${index})">Delete</button></td>
//         `;

//         tableBody.appendChild(row);
//     });
// }

// // Function to delete a row
// function deleteRow(index) {
//     students.splice(index, 1); // Remove the student from the array
//     populateTable(); // Re-populate the table after deletion
// }

// // Initial population of the table
// populateTable();





//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout
// 5. Show a counter in browser. Counter should increase on click on increase  button and decrease on click on decrease button. And show updated counter  value in browser.


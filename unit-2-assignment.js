/* Unit 2 Assignment - Basics PT 2: Objects & Functions, Types & Interfaces. */

/* Question 1 // Write a function called "addObjectProperty". Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object. */
// const person1 = {
//     name: 'Joe Blow',
//     role: 'schlub'
//   };
//   const person2 = {
//     name: 'Mr. Burns',
//     role: 'supervisor'
//   };
//   addObjectProperty(person1, 'manager', person2);
//   console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

//   function addObjectProperty(obj1, key, obj2) {
//     obj1[key] = obj2;
  // }


/* Question 2 // Write a function called "isPersonOldEnoughToDrive". Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
Notes:
    - The legal driving age in the United States is 16. */
// const obj = {
//   age: 16
// };
// const output = isPersonOldEnoughToDrive(obj);
// // console.log(output); // --> true

// function isPersonOldEnoughToDrive(person) {
//     return person.age >= 16;
// }


/* Question 3 // Write a function called "isPersonOldEnoughToVote". Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
Notes:
    - The legal voting age in the United States is 18. */

// const obj = {
//   age: 19
// };
// const output = isPersonOldEnoughToVote(obj);
// console.log(output); // --> true

// function isPersonOldEnoughToVote(person) {
//     return person.age >= 18;
//   }


/* Question 4 // Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: 1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.
Example input: */
// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
 // Function's return value (output):
// {
//   Queen : 'Beyonce'
// }
/* Do not change the input array. Assume all elements in the input array will be of type 'string'. Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.
E.g. it should handle input like: */
// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
// Function's return value (output):
// {
//   Kevin : 'Spacey'
// }
// function transformFirstAndLast(array) {
//     const object = {};
//     object[array[0]] = array[array.length - 1];
//     return object;
//   }
// const arrayList = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// const arrayList2 = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
// console.log(transformFirstAndLast(arrayList))
// console.log(transformFirstAndLast(arrayList2))


/* Question 5 // Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input: */
// obj1 = {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// }
// // Function's return value (output) : ['name', 'age', 'hasPets']

// /* Do not use "Object.keys" to solve this prompt.
// Note that your function should be able to handle any object passed in it.
// E.g. it should also handle an input like: */
// obj2 = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }
// // Function's return value (output): ['a', 'number', 'hungry', 'grammyWins'] */

// function getAllKeys(obj) { // function wrote
//     let newArray = []; // made empty array called newArray
//     for (let key in obj) { // for ... in loop to loop through keys in an object
//         newArray.push(key); // pushing keys to newArray
//     }
//     return newArray;
//   }
// console.log(getAllKeys(obj2))


/* TYPESCRIPT // Question 6 // Complete the minimumValue function so that it returns the minimum of two values. If the values are the same, return either. Write out some pseudocode before trying to solve the problem to get a good feel for how to solve it. */

// function minimumValue(value1: number, value2: number) {
    // TODO: Implement the minimumValue function
    // if value 1 is less than value 2, value 1 = min
    // if value 2 is less than value 1, value 2 = min
    // if value 1 = value 2, value 1 or value 2 = min
//     if (value1 < value2) {
//         return value1;
//     }
//     if (value2 < value1) {
//         return value2;
//     }
//     else {
//         return value1 | value2;
//     }
// }


/* TYPESCRIPT // Question 7 // Complete the isDivisibleBy3 function to return the word "fizz" if the value in the number parameter is divisible by 3. Otherwise, just return the number. You can use the test number % 3 == 0 to test if a number is divisible by 3. */
// function isDivisibleBy3(number: number) {
//     // TODO: Implement the logic here
//     if (number % 3 == 0) {
//         return "fizz";
//     } else {
//         return number;
//     }
// }


/* TYPESCRIPT // Question 8 // Complete the addCsvLines function which accepts an array as its only parameter. Each item in the array is a comma-separated string of numbers. The function should return a new array with each entry being the corresponding sum of the numbers in the comma-separated string.
These kinds of strings are called CSV strings, or comma- separated values strings.
Examples:
    - input: []
      output: []

    - input: ["3", "1,9"]
      output: [3, 10]

    - input: ["8,1,7", "10,10,10", "1,2,3"]
      output: [16, 30, 6]
      Look up the string split function to find out how to split a string into pieces.
      Write out your own pseudocode to help guide you. */

// function addCsvLines(csvLines: string[]): number []{
//     // TODO: Implement the function
//     // this function accepts an array as its only parameter. Each item in the array is a comma-separated string of numbers
//     // return new array w/ each array being sum of comma-separated string.
//     let sumOfStrings: number[] = []; // setting sumOfStrings as empty array
//     for (let csvLine of csvLines) { // loops through the length of the argument
//     // if there is only one number in the current element, convert it to a number and push it to to accumulator
//     // console.log("csvline:", csvLine);
//     //if the csvLine has multiple numbers, turn them into numbers, and then add them together
//         if(csvLine.includes(',')) {
//             let arrayOfStrings = csvLine.split(",");
//             let acc = 0 // acc = accumulator
//             for(let i = 0; i < arrayOfStrings.length; i++) { // accessing each string inside the array
//                 let currentElement = arrayOfStrings[i];
//                 let convertedNumber = parseInt(currentElement); // converting each string to a number
//                 acc = acc + convertedNumber; // adding them all together
//             }
//             sumOfStrings.push(acc)
//         } else {
//             //if there is only one number in given string, then turn it into a number and push it to sumOfStrings
//             sumOfStrings.push(parseInt(csvLine));
//         }
//     }
//     return sumOfStrings;
// }


/*  TYPESCRIPT // Question 9 // Write a function that meets these requirements.
Name: usernameFromEmailco
Parameters: a valid email address as a string
Returns: the username portion of the email address
The username portion of an email is the substring of the email address that appears before the @
Examples =
    * input:   "basia@yahoo.com"
    returns: "basia"
    * input:   "basia.farid@yahoo.com"
    returns: "basia.farid"
    * input:   "basia_farid+test@yahoo.com"
    returns: "basia_farid+test" */

    // function usernameFromEmail(email: string): string {
    //     let emailName = email.split('@');
    //     let answer = emailName[0];
    //     return answer;
    // }


/* TYPESCRIPT // Question 10 // Write a function that meets these requirements.
Name: simpleRoman
Parameters: one parameter that has a value from 1 to 10, inclusive
Returns: the Roman numeral equivalent of the parameter value
All examples =
    * input: 1
    returns: "I"
    * input: 2
    returns: "II"
    * input: 3
    returns: "III"
    * input: 4
    returns: "IV"
    * input: 5
    returns: "V"
    * input: 6
    returns: "VI"
    * input: 7
    returns: "VII"
    * input: 8
    returns: "VIII"
    * input: 9
    returns: "IX"
    * input: 10
    returns: "X" */
    // function simpleRoman(number: number): string{
    //     const numberToRomanNumeral: {[key: number]: string} = {
    //         1: "I",
    //         2: "II",
    //         3: "III",
    //         4: "IV",
    //         5: "V",
    //         6: "VI",
    //         7: "VII",
    //         8: "VIII",
    //         9: "IX",
    //         10: "X",
    //     };
    //     return numberToRomanNumeral[number];
    // }
    // console.log(simpleRoman(5));
    // Parameters: one parameter that has a value from 1 to 10, inclusive

    // Returns: the Roman numeral equivalent of the parameter value


    /* TYPESCRIPT // Question 11 // Creating the Employee Interface and Factory Function
    1. Interface: Employee
        - Define an interface named "Employee" with the following properties and methods:
        - firstName: a string
        - lastName: a string
        - getFullname(): a method that returns the full name as a string
        - getEmail(): a method that returns the email as a string
    2. Factory Function: createEmployee
        - Create a function named "createEmployee" that takes two parameters: firstName (string) and lastName (string).
        - Inside the function, return an object that adheres to the "Employee" interface.
        - Assign the provided firstName and lastName to the corresponding properties.
        - Implement the "getFullname" method inside the object by concatenating the firstName and lastName properties.
        - Implement the "getEmail" method inside the object by concatenating the lowercased firstName, a period, lowercased lastName, and "@company.com".
    3. Example Usage
        - Use the "createEmployee" function to create an employee instance.
        - Call the "getFullname" and "getEmail" methods on the employee instance to validate that they produce the expected outputs. */
        // interface Employee {
        //     // Define the properties of the interface
        //     firstName: string;
        //     lastName: string;
        //     getFullname():string;
        //     getEmail(): string;
        // }

        // const createEmployee = (firstName: string, lastName: string): Employee => {
        //     // Implement the properties and methods of the class
        //     return {
        //         firstName: firstName,
        //         lastName: lastName,

        //         getFullname: function() {
        //             return this.firstName + " " +this.lastName;
        //         },
        //         getEmail: function() {
        //             const name = (this.firstName + "." + this.lastName).toLowerCase();
        //             return name + "@company.com";
        //         }
        //     }
        // };


 /*  TYPESCRIPT // Question 12 // Problem: Display Book Information
 You are given an interface Book that defines the properties of a book including its title, author, and ISBN. You are also provided with an array books containing multiple book objects.
Your task is to implement a function called displayBookInfo that takes an array of Book objects as input and displays the information for each book in the array. The function should print the title, author, and ISBN of each book, separating the information with line breaks. */
// interface Book {
//     title: string;
//     author: string;
//     ISBN: string;
//   }

//   const books: Book[] = [ // books = array of two objects
//     { title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     ISBN: "978-0-7432-7356-5" },

//     { title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     ISBN: "0-06-112008-1" },
//   ];

//   function displayBookInfo(bookList: Book[]): void {
//     // TODO: Implement the displayBookInfo function
//     for (const book of bookList) {
//         console.log(`Title: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.ISBN}\n-----------`)
//       }
//   }

//   displayBookInfo(books);


/* Question 13 // Write a function called "isPersonOldEnoughToDrinkAndDrive".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
Notes:
    - The legal drinking age in the United States is 21.
    - The legal driving age in the United States is 16.
    - It is ALWAYS illegal to drink and drive in the United States.

const obj = {
  age: 45
};
const output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false */
// function isPersonOldEnoughToDrinkAndDrive(person) {
//     return false;
// }


/* Question 14 // Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford',
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.
Note that the input may have a different number of elements than the given sample.
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that. */
// let array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
// function fromListToObject(array) { // function = takes in an array of arrays
//     newObject = {} // create empty object to store new values
//     for (let i = 0; i<array.length; i++) { // loop through array
//         let newArray = array[i];
//         newObject[newArray[0]] = newArray[1];
//     }
//     return newObject;
// }
// let object = fromListToObject(array);
// console.log(object)


/* Question 15 // Write a function called "listAllValues" which returns an array of all the input object's values.
Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]

Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 11, true, 1] */
// let input = { // input = object with values inside
//     name : 'Krysten',
//     age : 33,
//     hasPets : false
// }

// function listAllValues(obj) { // function will return an array of the input onject's values
//     let newArray = []; // create new empty array
//     for (let key in obj) { // for...in loop to loop through object // checking for key in object
//         if (obj.hasOwnProperty(key)) { // if the object has a key...
//             newArray.push(obj[key]); // push the object's key to the new array
//         }
//     } // goes through entire object and then...
//     return newArray // returns the new array that is now full
//   }
// listAllValues(input)
// // console.log(listAllValues(input))


/* TYPESCRIPT // Question 16 // Complete the maxOfThree function so that it returns the maximum of three values.
If two values are the same maximum value, return either of them.
If all of the values are the same, return any of them*/




/* TYPESCRIPT // Question 17 // Complete the fizzbuzz function to return
    - The word "fizzbuzz" if number is evenly divisible by by both 3 and 5
    - The word "fizz" if number is evenly divisible by only 3
    - The word "buzz" if number is evenly divisible by only 5
    - The number if it is not evenly divisible by 3 nor 5
** Write out some pseudocode before trying to solve the problem to get a good feel for how to solve it.** */
// function fizzbuzz(number: number) {
//     // TODO: Implement the fizzbuzz function
//     // return "fizzbuzz" if number is evenly divisible by 3 and 5
//     if(number % 3 === 0){
//         if(number % 5 === 0) {
//         return "fizzbuzz";
//     }}
//     // return "fizz" if number is evenly divisible by only 3
//     if(number % 3 === 0) {
//         return "fizz";
//     }
//     // return "buzz" if number is evenly divisible by only 5
//     if(number % 5 === 0) {
//         return "buzz";
//     }
//     // return the number if it is not evenly divisible by 3 or 5
//     else {
//         return number;
//     }
// }

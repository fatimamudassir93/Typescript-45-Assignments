// define variables
let mango = "mango";
let uppercaseMango = "MANGO"
let hundred = 100;
let thousand = 1000;
let vegetables  = ["onion", "tomato", "potato"];

// test for equality and in equality.
console.log("is mango equals to mango");
console.log(mango == "mango");
console.log("\n mango is not equals to mango");
console.log(mango != "mango");
// test using lower case functions
console.log(" \n is MANGO is equals to mango after converting into lowercase");
console.log(uppercaseMango.toLowerCase()== "mango");
console.log(" \n is MANGO is not equals to mango after converting into lowercase");
console.log(uppercaseMango.toLowerCase()!= "mango");
// Numerical tests.
console.log("\n Is hundred is equals to thousand?");
console.log(hundred== thousand);
console.log("\n Is hundred is not equals to thousand?");
console.log(hundred != thousand);

console.log("\n is hundred is greater than thousand");
console.log( hundred > thousand);

console.log("\n is hundred is less  than thousand");
console.log( hundred < thousand);1

console.log("\n is thosand is greater than or equals to thousand");
console.log( thousand >= thousand);

console.log("\n is hundred is less  than or equals to 150");
console.log( hundred <= thousand);

// Tests using and and or operators.
console.log("\n hundred is not equals to thousand and thousand is greater than 100000");
console.log(hundred != thousand && thousand > 1000000)
// using and operator...
console.log("\n hundred is not equals to thousand and thousand is greater than 100000");
console.log(hundred != thousand && thousand > 1000000)
 
// Using || OR operator..
console.log("\n Is thousand is equals to hundred or hundred is greater than thousand");
console.log(thousand == hundred || hundred > thousand);

console.log("\n Is thousand is equals to hundred or hundred is less than thousand");
console.log(thousand == hundred || hundred < thousand);

// test wether include in array or not

console.log("\n Is cocumber is include in array ");
console.log(vegetables.includes("cocumber"));

console.log("\n Is tomato is include in array ");
console.log(vegetables.includes("tomato"));








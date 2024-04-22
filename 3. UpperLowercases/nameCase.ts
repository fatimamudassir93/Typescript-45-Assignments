// store a person name in variable.
let personName: string = "Ayesha Mudassir";
// in lower case
console.log("lowercase:", personName.toLowerCase());
// in uppercase
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

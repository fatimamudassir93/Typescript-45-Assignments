// store a person name in variable.
var personName = "Ayesha Mudassir";
// in lower case
console.log("lowercase:", personName.toLowerCase());
// in uppercase
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));

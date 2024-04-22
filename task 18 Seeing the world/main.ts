let placesToVist : string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];
console.log("original order :", placesToVist);
console.log("Alphabatical order:", [...placesToVist].sort());
console.log("original order :", placesToVist);
console.log("reverse order:", [...placesToVist].sort().reverse());
console.log("original order after reverse sorting", placesToVist);
placesToVist.reverse();
console.log("Reverse order:", placesToVist);
placesToVist.reverse();
console.log("back to origianl order:", placesToVist);
placesToVist.sort();
console.log("sorted in alphabatical order:", placesToVist);
placesToVist.sort((a,b)=> b.localeCompare(a));
console.log("sorted in reverse alphabatical order:", placesToVist)


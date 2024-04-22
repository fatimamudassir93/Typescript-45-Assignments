var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVist = ["Tokyo", "Pakistan", "America", "China", "Japan"];
console.log("original order :", placesToVist);
console.log("Alphabatical order:", __spreadArray([], placesToVist, true).sort());
console.log("original order :", placesToVist);
console.log("reverse order:", __spreadArray([], placesToVist, true).sort().reverse());
console.log("original order after reverse sorting", placesToVist);
placesToVist.reverse();
console.log("Reverse order:", placesToVist);
placesToVist.reverse();
console.log("back to origianl order:", placesToVist);
placesToVist.sort();
console.log("sorted in alphabatical order:", placesToVist);
placesToVist.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabatical order:", placesToVist);

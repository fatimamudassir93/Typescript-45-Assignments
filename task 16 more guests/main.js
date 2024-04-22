var guestArr = ["Rimsha", "Mantasha", "Asma", "Ammarah", "Minahil"];
var canNotAttend = "Mantasha";
var newGuest = "komal";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", I found a bigger dining table so im going to invite more people")); });
// Add new guest to beggining of your array.
var guestBeg = "Ayesha";
guestArr.unshift(guestBeg);
console.log(guestArr);
// middle guest:
var middleGuest = "Aminah";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// use append
guestArr.push("Fatima");
console.log(guestArr);
// part 5
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", You are invited in my expanded list of friends")); });

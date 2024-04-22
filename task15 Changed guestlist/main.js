var guestArr = ["Rimsha", "Mantasha", "Asma", "Ammarah", "Minahil"];
var canNotAttend = "Mantasha";
var newGuest = "komal";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner")); });

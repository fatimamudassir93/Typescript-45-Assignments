//  Creating an array
var userNames = ["Ammarah", "Rimsha", "Mantasha", "Minahil", "Admin"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thankyou for logging in again."));
    }
});

var userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty, we needc to find some users");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ",thankyou for logging in again."));
        }
    });
}

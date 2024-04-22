var guests = ["Ammarah", "Rimsha", "Mantasha", "Amna", "Minahil"];
console.log("Unfortunately,The dinner table did't arrive. so i can invite only two people");
while (guests.length > 2) {
    var removeGuest = guests.pop();
    if (removeGuest !== undefined) {
        console.log("sorry, ".concat(removeGuest, ", we can't invite you"));
    }
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guests, ", you both are  invited for the dinner"));
});
guests.splice(0, guests.length);
console.log("updated list of guest", guests);

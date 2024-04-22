let guests: string[] = ["Ammarah", "Rimsha", "Mantasha", "Amna", "Minahil"];
console.log(`Unfortunately,The dinner table did't arrive. so i can invite only two people`)
while (guests.length > 2 ) {
    const removeGuest : string| undefined = guests.pop();
    if( removeGuest !== undefined) {
        console.log(`sorry, ${removeGuest}, we can't invite you`);
    }

}
guests.forEach(guest => {
    console.log(`Dear ${guests}, you both are  invited for the dinner`);
})
guests.splice(0, guests.length)
console.log("updated list of guest", guests);


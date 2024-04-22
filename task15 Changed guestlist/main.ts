let guestArr : string[] = ["Rimsha", "Mantasha", "Asma", "Ammarah", "Minahil"];
let canNotAttend : string = "Mantasha";
let newGuest : string = "komal";
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
guestArr.map((items)=> console.log(`Dear ${items}, you are invited to the dinner`)); 
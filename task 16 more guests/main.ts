let guestArr : string[] = ["Rimsha", "Mantasha", "Asma", "Ammarah", "Minahil"];
let canNotAttend : string = "Mantasha";
let newGuest : string = "komal";
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
guestArr.map((items)=> console.log(`Dear ${items}, I found a bigger dining table so im going to invite more people`));
// Add new guest to beggining of your array.

let guestBeg : string = "Ayesha";
guestArr.unshift(guestBeg);
console.log(guestArr)

// middle guest:
let middleGuest : string = "Aminah";
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr);

// use append

guestArr.push("Fatima")
console.log(guestArr)

// part 5
guestArr.map((items)=> console.log(`Dear ${items}, You are invited in my expanded list of friends`));



//  Creating an array
let userNames = ["Ammarah", "Rimsha", "Mantasha", "Minahil", "Admin"];

userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`hello ${oneUser},thankyou for logging in again.`);
    }
})

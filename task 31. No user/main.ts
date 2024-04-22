let userNames = ["Ammarah", "Rimsha", "Mantasha", "Minahil", "Admin"];
if (userNames.length === 0 ){
    console.log("your array is empty, we need to find some users")
}else{
    userNames.forEach(oneUser => {
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }else{
            console.log(`hello ${oneUser},thankyou for logging in again.`);
        }
    })
}
let current_user: string[]= ['AyeSha','AmNa','RiMsha','MiNahil', 'AlI'];
let new_users: string[]= ['RiMsha','komal', 'MiNahil','Fatima', 'Mudassir'];
new_users.forEach(newUserName => {
    let lowerCase : string = newUserName.toLowerCase();
    if(current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUserName} is not available, Please write a different username`);
    }
else{
    console.log(`The username ${newUserName} is available`);
}
})
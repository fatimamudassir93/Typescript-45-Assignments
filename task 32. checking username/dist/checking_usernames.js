"use strict";
let current_user = ['AyeSha', 'AmNa', 'RiMsha', 'MiNahil', 'AlI'];
let new_users = ['RiMsha', 'komal', 'MiNahil', 'Fatima', 'Mudassir'];
new_users.forEach(newUserName => {
    let lowerCase = newUserName.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUserName} is not available, Please write a different username`);
    }
    else {
        console.log(`The username ${newUserName} is available`);
    }
});

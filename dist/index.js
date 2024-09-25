"use strict";
//--------------------
// Sets in typescript
//--------------------
const names = new Set();
names.add('john');
names.add('mary');
names.add('david');
names.add('john');
// names.add(123)
console.log(names);
const user1 = { email: 'john@gmail.com', score: 10 };
const user2 = { email: 'mary@gmail.com', score: 20 };
const users = new Set();
users.add(user1);
users.add(user2);
users.add(user1);
// users.add('hello')
console.log(users);
//---------------------------
// Sets as function arguments
//---------------------------
function logUserEmails(users) {
    users.forEach(user => console.log(user.email));
}
// logUserEmails(['hello'])
logUserEmails(users);

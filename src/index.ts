//--------------------
// Sets in typescript
//--------------------

const names = new Set<string>()

names.add('john')
names.add('mary')
names.add('david')
names.add('john')
// names.add(123)

console.log(names);


//-----------------------
// Sets with custom tupes
//-----------------------
interface User{
  email: string
  score: number
}


const user1: User = {email: 'john@gmail.com', score: 10}
const user2: User = {email: 'mary@gmail.com', score: 20}

const users = new Set<User>()
users.add(user1)
users.add(user2)
users.add(user1)
// users.add('hello')

console.log(users);



//---------------------------
// Sets as function arguments
//---------------------------

function logUserEmails(users: Set<User>): void{
  users.forEach(user => console.log(user.email))
}

// logUserEmails(['hello'])

logUserEmails(users)
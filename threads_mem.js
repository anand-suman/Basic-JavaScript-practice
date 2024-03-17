// two type of memory
/*
stack (primitive), heap (Non-Primitive)

*/

let myName = "anand bhai wala code"

let anothername = myName
anothername="anand ka second copy"

console.log(myName);
console.log(anothername);


let user = {
    email: "anandraj0705@gamil.com",
    upi: "user@ybl"
}

let user2 = user
user2.email = "aman.cute987@gamil.com"
// user2 = "anandsuman0705@gamil.com"

console.log(user);
console.log(user2);
//singleton
//object.create

//object literals

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Anand",
    "full name": "Anand suman",
    age: 23,
    location: "Hajipur",
    email: "anandraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // object 

console.log(JsUser.email);
console.log(JsUser.name);
console.log(JsUser["full name"]);
console.log(JsUser["email"])
// console.log(JsUser["email"])


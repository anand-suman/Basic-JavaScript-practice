//singleton
//object.create

//object literals

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Anand",
    "full name": "Anand suman",
    [mySym] : "My symbol",
    age: 23,
    location: "Hajipur",
    email: "anandraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // object 

// console.log(JsUser.email);
// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"])
// console.log(JsUser[mySym]);
JsUser.email = "anand@hotmail.com"// for change the object content of the difined content
//Object.freeze(JsUser)// to freez the objects it meaning is that we cant change the objects value
JsUser.name = "Chhotu"
// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser);

// console.log(JsUser["email"])


// ============================================= fuction ======================================

JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greeting_2 = function(){
    console.log(`Hello ${this.name} bhaiya`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting_2());
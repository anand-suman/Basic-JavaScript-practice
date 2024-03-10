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
// console.log(JsUser.greeting());
// console.log(JsUser.greeting_2());

//Singleton 
// const tindetUser = new object()

const tinderUser = {}

tinderUser.id = "sabman_123"
tinderUser.name = "Sabnam"
tinderUser.isLloggedIn = false

// console.log(tinderUser);


const nested_obj = {
    email: "suchita@nitw.com",
    fullname: {
        userfullname: {
            firstname: "suchita",
            lastname: "chaudhary"
        }
    }
}

// console.log(nested_obj.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: " b"}
const obj2 = {3: "c", 4: " d"}
const obj3 = {5: "e", 6: " f"}

//const obj4 = {obj1, obj2, obj3}
// simply marge all the objeect as it is
//console.log(obj4);
/*
    output:-
    obj1: { '1': 'a', '2': ' b' },
    obj2: { '3': 'c', '4': ' d' },
    obj3: { '5': 'e', '6': ' f' }
*/

// const obj4 = Object.assign({},obj1, obj2, obj3)
// marge all the elements of object into one objects
// console.log(obj4);
/* 
    output:- 
    { '1': 'a', '2': ' b', '3': 'c', '4': ' d', '5': 'e', '6': ' f' }
*/

const obj4 = {...obj1, ...obj2, ...obj3}
// same as above one
//console.log(obj4);
/*
    output:-
    { '1': 'a', '2': ' b', '3': 'c', '4': ' d', '5': 'e', '6': ' f' }
*/


// to get the value of database genrally in form of array

const get_ds = [
    {
        email: "anandraj0807@gmail.com",
        name: "Anand bhaiya1"
    },
    {
        email: "anandraj0807@gmail.com",
        name: "Anand bhaiya2"
    },
    {
        email: "anandraj0807@gmail.com",
        name: "Anand bhaiya3"
    },
    {
        email: "anandraj0807@gmail.com",
        name: "Anand bhaiya4"
    },
    {
        email: "anandraj0807@gmail.com",
        name: "Anand bhaiya5"
    },
    {
        email: "anandraj0807@gmail.com",
        name: "Anand bhaiya6"
    }
]
// console.log(get_ds[0].name);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Anand"
}

// we can access any element in the object by the . oprater but ther is another method called de formatin (" iss methos me nam wagara change kar sakte hai koi bara nam hai toh choota nam v likhh sakte hai simen bs {} yadh rakhna hai")

//course.courseInstructor

const {courseInstructor: teacher} = course

// console.log(courseInstructor);
console.log(teacher);


//============================================== API===========================================

// object bina nam ka ho toh jesen bolte hai us ko jesan bolte hai

// jesan use bolte hai jo api se data aata hai






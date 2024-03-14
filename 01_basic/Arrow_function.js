const user = {
    username: "Anand",
    Price: "999",


    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);
    }
}// this kay word bahut hi intresting hai iss liye dhyan se

// user.welcomeMessage()
// user.username = "suman"// contex change karana bol te hai iss ko

// user.welcomeMessage()

//console.log(this);// ye return kare ga empty object

// function thiskakhela(){
//     let username = "Nalini "
// console.log(this.username);//undefined print kare ga functin ke andaer use kar rhe hai iss liye

// }
// thiskakhela()


// aab arrow function ka khela dekh na hai

const chai = () => {
    let username = "Alka kasyap"
    console.log(this);// abhi v isska output empty object hi ho ga 
}

// chai()

//const addtwo = (num1,num2) => (num1+num2)
//console.log(addtwo(5,6));// abhi isska output 11 hoga qki iss lo () me rap kiya gya hai ager {} rhata toh return stetment dena jaruri tha

// const addtwo = (num1,num2) => (username : "Suchita")
// console.log(addtwo(5,6));// error hai type annotations can only be used in typeScript files .



// const addtwo = (num1,num2) => ({username: "Suchita"})
// console.log(addtwo(5,6));// idhar koi problem nhi hai sab thik hai output ayega.

// const myArray = [2,3,4,54]

function thiskakhela(){
    // let username = "Nalini "
console.log(this);//undefined print kare ga functin ke andaer use kar rhe hai iss liye

}
thiskakhela()






































// myArray.forEach()// baad me dekhna hai
/*
  Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

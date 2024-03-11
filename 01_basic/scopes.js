// me jada kuchhnhi karna bs let, var or const  ka scops dekhna hai

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c); 

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Anand"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one() 

if (true) {
    const username = "Anand"
    if (username === "Anand") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// hosting bolte hai niche wale code pe

addTwo(5)// ye error dega defind karne ke alag tarika ke karan error aata hai
const addTwo = function(num){
    return num + 2
}



// console.log("A");
// console.log("B");
// console.log("C");
// console.log("D");
// console.log("E");
// console.log("F");
// console.log("G");

function sayMyname(){
console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
console.log("F");
console.log("G");
    for(let i=0;i<=5;i++)
    {
        console.log("Anand Bhaiya ", i, "jay ho");
    }

}

// sayMyname()// calling the function
// sayMyname // refrence of function

// function addtwoNum(num1,num2)
// {
//     console.log(num1+num2);
// }

// addtwoNum(4,6)// output 10
// addtwoNum(4,"5")// output 45
// addtwoNum(4,"a")// output 4a
// addtwoNum(4,null)// output 4

function addtwoNum(num1,num2)
{
    // let result = num1 + num2
    // return result

    return num1+num2
}

// const result = addtwoNum(5,3)
// console.log("result: ", result);


// console.log(addtwoNum(5,3));

function loginUserMassage(username)
{
    if(!username)
    {
        console.log("ye burbak username toh dall")
        return
    }
    return `${username} login kar re baba`
}
// console.log(loginUserMassage("Anand"));
// console.log(loginUserMassage());


// add to cark wala funtion
function calculatecartPrice(...num1){
    return num1
}

function calculatecartPrice(...num1){
    return num1
}

//console.log(calculatecartPrice(200,400,600,800,900));

const user ={
    username: "Anand suman",
    prices: 199
}

function handlObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handlObject({
    username: "sam",
    prices: 399
})

const myNewArray = [200, 400, 100, 600] 

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

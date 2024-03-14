//===================================== FOREACH FUCTION ====================================


const coding = ["js","ruby","java","puthon", " ", "cpp"]

// coding.forEach(function(val) {
//     console.log(val)
// });

/*
    (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.


*/

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item)
// {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// } )


const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "puthon",
        languageFileName: "py"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    },
]
// mycoding.forEach( (item) => {
//     console.log(item.languageName)
//     console.log(item.languageFileName)
// } )

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);//undefined it means that forEach does not return any values


//====================================== FILTER FUNCTION ===================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num==7
// } )

// // console.log(newNums)

// myNums.forEach( (num) => {
//     if(num > 8)
//     {
//         newNums.push(num)
//     }
// } )  // intresting hai iss me kya hua na ki idhar phale wala me filter laga uss ke baad push hua.

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === "History" )

  userBooks= books.filter( (bk)=> {
    return bk.publish >= 1995 && bk.genre === "History"
  } )
  /**
   * method) Array<{ title: string; genre: string; publish: number; edition: number; }>.filter(predicate: (value: {
    title: string;
    genre: string;
    publish: number;
    edition: number;
}, index: number, array: {
    title: string;
    genre: string;
    publish: number;
    edition: number;
}[]) => unknown, thisArg?: any): {
    title: string;
    genre: string;
    publish: number;
    edition: number;
}[] (+1 overload)
Returns the elements of an array that meet the condition specified in a callback function.

@param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.


   * 
   * 
   */


//   console.log(userBooks);







//======================================== FOR IN FUNCTION =================================


const myObject = {
    js: "javaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift bt apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

for (const key in coding) {
    //console.log(coding[key])
}

// const map =new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// map.set('PKY', "Pakistan")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

/*
Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

The specification requires maps to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).


*/


// ====================================== FOR OF ===========================================


//for of 

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);    
}

// Maps

const map =new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('PKY', "Pakistan")
map.set('IN', "India")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// for (const [key] of map) {
//     console.log(key);
// }


// for (const [value] of map) {
//     console.log(value);
// }// idhar bydifolt key hi lega

// for (const [key, value] of map) {
//     //console.log(value);
// }
// idhar value value print hoga 

const myObject1={
    game: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject1) {
//         console.log(key, ':-', value);
//     }

    //TypeError: myObject1 is not iterable
    //at Object.<anonymous


//==================================== MULTIPLE FUNCTION ===================================


const newNums = myNums
                        .map((num)=>num*10)
                        .map((num) => num+1 )
                        .filter( (num)=>num >= 40 )


// console.log(newNums);


//====================================== REDUCEFUNCTION ====================================



const myNums2 = [1,2,3]

// const myTotal = myNums2.reduce(function (acc,curr){
    
//     console.log(`acc:${acc} and curr: ${curr}`);
    
//     return acc+curr},0)



// const myTotal = myNums2.reduce( (acc,curr)=> acc+curr,0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetoPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(pricetoPay);

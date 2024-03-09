// Array
/*
=> JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
=> JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
=> JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
=> JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).



*/


const myArr = [0, 2, 3, 4, 5]

const myHeros = ["Anand", "prince", "Suchita"]

const maArr2 = new Array(1, 3, 4, 6, 7, 7)

// console.log(myArr);

// console.log(myArr[2]);

// Array methods


//console.log(myArr.toString()); // it will convert the array into the string
// console.log(myHeros);
// console.log(myHeros.toString());
myArr.push(8);// it will simply push the element in the last of the array

// console.log(myArr);
myArr.push(9); // push the element at the end of last

// myArr.push(13);

 myArr.pop() //it will simply pop  the last element of the array
// console.log(my)

myArr.unshift(10) //it will simply push the element into front(1st positon) of the array

myArr.shift() //it will simply pop  the first element of the array

// console.log(myArr);



// console.log(myArr.includes(4));// it will give the elements from 0 to pass index
// console.log(myArr.indexOf(3));//it will give the elemnts of given index
// console.log(myArr.includes(4));
const newArr = myArr.join()//Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log("A ", myArr)
const myn1 = myArr.slice(0, 3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// console.log(myn1);

// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)//Returns a new array with some elements removed and/or replaced at a given index, without modifying the original array.
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(myn2);

// console.log("C ", myArr);


//+++++++++++++++++++++++++++++++++++++ 2nd Array class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 const marvel_herose = ["thor","Ironman", "spiderman"]
 const dc_herose = [ "superman", "flash", "batman"]

 marvel_herose.push(dc_herose)//Appends new elements to the end of an array, and returns the new length of the array, it will combain to array as next element

//  console.log(marvel_herose)
//  console.log(marvel_herose.length)
//  console.log(marvel_herose[3][2])

// const all_herose=marvel_herose.concat(dc_herose)
// console.log(all_herose)

const all_new_herose = [... marvel_herose, ...dc_herose]

// console.log(all_new_herose);


const amother_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_another_arr = amother_array.flat(Infinity)

// console.log(real_another_arr); 


// console.log((Array.isArray("Anand")))


// console.log((Array.from("Anand")))
// console.log((Array.prototype("Anand")))
// console.log((Array.from({name: "Anand"}))) // intresting

let score1 = 100
let score2 = 200
let score3 = 200
let score4 = 200
let score5 = 200

// console.log(Array.of(score1, score2,score3,score4,score5,))


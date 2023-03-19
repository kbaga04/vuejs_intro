// This is a simple promise example:
//
// let prom = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Success')
//     }
//     else {
//         reject('Failed')
//     }
// });

// prom.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This in in the catch ' + message)
// })

//Example of a code using callbacks
// const userThere = true
// const userProductive = true

// function checkProductivity(callback, errorcallback) {
//     if(!userThere) {
//         errorcallback({
//             name: 'User not there',
//             message: ':('
//         });
//     }
//     else if(!userProductive) {
//         errorcallback({
//             name: 'User is there',
//             message: ':|'
//         })
//     }
//     else {
//         callback({
//             name: 'User is being productive',
//             message: ':)'
//         })
//     }
// }

// checkProductivity((message) => {
//     console.log('Success: ' + message.name + ' ' + message.message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// });

// Now we are using the same example, but in promise functions

// let pro = new Promise((success, fail) => {
//     const userThere = true
//     const userProductive = true

//     if(userProductive) {
//         success("User is Productive")
//     }
//     else if(userThere) {
//         success("User is There")
//     }
//     else {
//         fail("User if not there")
//     }
// });

// pro.then((message) => {
//     console.log("Result: " + message)
// }).catch((message) => {
//     console.log("Result: " + message)
// });

// Some other things to note about promises
// Promise.all([]).then({}) will work on multiple promises at once and output the result of all of them
// Promise.race([]).then({}) will work on multiple promises at once and output the result of the first one that resolves


// // ARRAY METHODS

// const testArr = [
//     { name: 'Java',     rank: 3},
//     { name: 'C++',      rank: 6},
//     { name: 'C',        rank: 4},
//     { name: 'Python',   rank: 2},
//     { name: 'JavaScript', rank: 1},
//     { name: 'HTML/CSS', rank: 5},
//     { name: 'Rust', rank: 7},
// ]
// console.log(testArr)

// // .filter() method filters all the elements that meets the contstraint
// const filtItem = testArr.filter((langs) => {
//     return langs.rank <= 5; // returns only the top 5 languages
// })
// console.log(filtItem)

// // .map() method takes one array and converts it to a new array based on what we ask for
// const mapItem = testArr.map((langs) => {
//     return langs.name
// })
// console.log(mapItem)

// // .find() finds object with the given specification
// const findItem = testArr.find((langs) => {
//     return langs.name === 'JavaScript'
// })
// console.log(findItem)

// // forEach() method works like a for loop but for each element in an array

// // .some() method returns true if any element in the array satisfies the given condition
// const highRank = testArr.some((langs) => {
//     return langs.rank <= 1
// })
// console.log(highRank)

// //.every() works like .some() method but every element in the array has to satisfy the condition

// // .reduce() takes the array and does operations which it then stores in a different variable
// // similar to doing operations on array through for loop
// const totalRank = testArr.reduce((currentSum, langs) => {
//     return langs.rank + currentSum
// }, 0) // Also need to specify starting index
// console.log(totalRank)

// //.includes() method works on regular arrays (not objects) where it searches for a given element
// const newTestArr = [100,200,300,400,500,600,700]
// const checkTH = newTestArr.includes(200)
// console.log(checkTH)


// Async Await methods are promises but better

// var sample = [1, 2, 3];

// sample.forEach(function(elem, index) {
//     console.log(elem + ' comes at ' + index);
// });

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// nums.forEach(function(el, i) {
//     console.log(el, i);
// })

// nums.forEach(function(el, i) {
//     console.log('Index: ' + i);
//     // el++;
//     --el;
//     console.log(el);
//     // console.log(el, i);
// });


// let result = nums.filter(function(elem) {
//     console.log(elem)
//     return elem < 7
// })

// console.log(nums);
// let result = nums.filter(elem => elem !== 4);
// console.log(result);
// console.log(typeof(result));
// console.log(Array.isArray(result));


// let mapped = nums.map(function(elem) {
//     return elem*10;
// })
// console.log(mapped);

// let mapPlusString = nums.map(function(index, elem) {
//     return 'Номер элемента: ' + elem + ', индексом: ' + index;
// })

// console.log(mapPlusString);

// let filterMap = nums.map(function(elem) {
//     return elem < 6
// })
// console.log(filterMap);
// (10)[true, true, true, true, true, false, false, false, false, false]
// Интересно

let mapedArray = [];

let toArray = nums.map(function(elem) {
    if(elem < 8) {
        mapedArray.push(elem);
    }
    return mapedArray;
    // (10)[Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)]
})
console.log(toArray);
// (10)[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

console.log(mapedArray);
(7)[1, 2, 3, 4, 5, 6, 7]


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
//    return elem < 7;
// })

let result = nums.filter(elem => elem !== 4);
console.log(result);
console.log(typeof(result));
console.log(Array.isArray(result));




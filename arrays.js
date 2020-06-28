var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var people = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Stella',
        age: 40
    },
    {
        name: 'Eric',
        age: 200
    },
    {
        name: 'Perzh',
        age: 50
    },
    {
        name: 'Yanukovich',
        age: 60
    },
    {
        name: 'Jerry',
        age: 30
    }
]

/*                 FOREACH           */


// nums.forEach(function(elem, index) {
//     console.log(elem + ' comes at ' + index);
// });

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


/*                 FILTER          */


// let result = nums.filter(function(elem) {
//     console.log(elem)
//     return elem < 7
// })

// console.log(nums);
// let result = nums.filter(elem => elem !== 4);
// console.log(result);
// console.log(typeof(result));
// console.log(Array.isArray(result));

/*                 MAP                */
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

// let mapedArray = [];

// let toArray = nums.map(function(elem) {
//     if(elem < 8) {
//         mapedArray.push(elem);
//     }
//     return mapedArray;
//     // (10)[Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)]
// })
// console.log(toArray);
// (10)[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// console.log(mapedArray);
// (7)[1, 2, 3, 4, 5, 6, 7]


/*                 REDUCE           */

// будем сокращать массив до одного простого значения
let sum = nums.reduce(function(sum, elem) {
    return sum + elem;
})
console.log(sum);
// sum = 0 + 1 => sum =  0 + 1 + 2, = sum = 0 + 1 + 2 + 3 etc...
// 55

let sumPeopleAge = people.reduce(function(age, elem) {
//    return age + elem.age;

/*      ||     */

   return age + elem['age'];
});
console.log(sumPeopleAge);
// [object Object]40200506030
// [object Object]40200506030
// console.log(people['age']);
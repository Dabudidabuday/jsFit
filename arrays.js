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

var products = [
    {
        name: 'varezhka',
        price: 200
    },
    {
        name: 'myshka',
        price: 110
    },
    {
        name: 'sosiski',
        price: 50
    },
    {
        name: 'hlebushek',
        price: 30
    },
    {
        name: 'ochki',
        price: 10
    },
    {
        name: 'vzdryzhni',
        price: 25
    },
    {
        name: 'kapustochka',
        price: 5
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
// let sum = nums.reduce(function(sum, elem) {
//     return sum + elem;
// })
// console.log(sum);
// // sum = 0 + 1 => sum =  0 + 1 + 2, = sum = 0 + 1 + 2 + 3 etc...
// // 55

// let sumPeopleAge = people.reduce(function(age, elem) {
// //    return age + elem.age;

// /*      ||     */

//    return age + elem['age'];
// });
// console.log(sumPeopleAge);
// [object Object]40200506030
// [object Object]40200506030
// console.log(people['age']);



// var reducers = {
//     rubles: function(state, item) {
//         return state.rubles += item.price;
//     },
//     dollars: function (state, item) {
//         return state.dollars += item.price / 71.6024
//     },
//     euros: function (state, item) {
//         return state.euros += item.price / 79.0133
//     },
//     yens: function (state, item) {
//         return state.yens += item.price / 0.6341
//     },
//     pounds: function (state, item) {
//         return state.pounds += item.price / 101.7829
//     },
// }

// var combineReducers = function(reducers) {
//     return function(state, item) {
//         return Object.keys(reducers).reduce()
//     }
// }


// fetch("https://vape-shop.herokuapp.com/catalog", { method: "GET" })
//     .then(response => response.json())
//     .then(function (data) {
//         let products = data.products;

//         // console.log(products, "Исходный массив");

//         // products.forEach(function (item, index, array) {
//         //     // посмотри тут по отдельности, что находится в переменных item,
//         //     // index, array, выведя их в консоль. Потом напиши форич сам, удалив этот.
//         //     // Это просто цикл, перебор массива, он ничего не возвращает

//         //     // console.log(array);
//         // });

//         // products.forEach(function(item, index, array) {
//         //     console.log(item);
//         //     console.log(index);
//         //     console.log(array);
//         // })

//         // let filteredProducts = products.filter(function (item, index, array) {
//         //     // filter возвращает новый массив, только из элементов, для
//         //     // которых этот колбэк возвращает true. Ниже его можно увидеть в консоль логе.
//         //     // Напиши тут, что бы фильтровались только предметы, которые есть в наличии.
//         //     // Обязателен оператор return;

//         //     return item.isAvailable === true
            
//         // });




//         // let productsPrices = products.map(function (item, index, array) {
//         //     // map возвращает так же новый массив, из результатов применения
//         //     // колбэка к каждому его элементу (на каждой итерации).
//         //     // Тут количество элементов не изменится, просто получим новый массив чего-то

//         //     return item.price;
//         // });

//         // console.log('Совокупная стоимость: ' + sumPrices);
//         // console.log(filteredProducts, "Показываем только айтемы в наличии");
//         // console.log(productsPrices, "Показываем цены всех айтемов");


//         // let filteredProducts = products.filter(function(item, index, array) {
//         //     return item.price > 100;
//         // })
//         // console.log('Отфильтрованные товары свыше 100: ' + filteredProducts);

//         // let mappedProducts = filteredProducts.map(function(item, index, array) {
//         //     return item.price
//         // })

//         // console.log('Только цены: ' + mappedProducts);

//         // let sumProducts = mappedProducts.reduce(function(sum, item) {
//         //     return sum + item;
//         // }) 

//         // console.log('Сумма: ' + sumProducts);

        
//         // console.log('Initial array: ', products);

//         // let filteredProducts = products.filter(item => item.price > 100);
//         // console.log('Price > 100', filteredProducts);

//         // let mappedProducts = products.map(item => item.price);
//         // console.log('Only price', mappedProducts);

//         // let sumPrices = mappedProducts.reduce((sum, item)  => sum + item);
//         // console.log('Total price', sumPrices);

//         // let sum = products
//         //     .filter(item => item.price > 100)
//         //     .map(item => item.price)
//         //     .reduce((sum, item) => sum + item);

//         // console.log(sum);
//     })


    
let numArr = [2, 4, 6, 8, 10];
let secArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filtered = numArr.filter(function(item, index, array) {
//     let comparisonArr = secArr.filter()
// })


// Тебе нужно не используя метод.sort(),
// расположить элементы внутри этого массива в порядке возрастания.
// Подсказка: тебе нужно будет циклами обходить массив, 
// проверяя текущий элемент с идущим вслед за ним(например текущий 2 сверяем с 3м), 
// и если следующий элемент меньше текущего - менять их местами.

// let filtered = array.forEach(function(el, i, array) {
    
    
//     let result = el - nextitem;
    
//     if(result > 0) {
//         array.remove(nextEl);
//         array.push(nextEl);
//     }
// });

// console.log('Сортировка массива циклами', filtered);



// for (let i = 0; i < array.length; i++) {
//     let current = array[i];
//     let nextItem = array[i+1];
//     // console.log('Текущий элемент', current);
//     // console.log('Следующий элемент', nextItem); 
//     let result =  current - nextItem;
//     let prevItem = array[i - 1];
    

//     let isLess = Boolean;
//     let prevItem = array[i-1];

//   do {

//       if (result > 0) {
//           let temp = current;
//           // console.log('Temp', temp);
//           array[i] = array[i + 1];
//           array[i + 1] = temp;
//           console.log('Операцие по зомещению', array);
//       } else if (result < 0) {
//           console.log('Без замены', array);

//           // console.log('Temp2', temp2);
//       }

//   } while (isLess = true);
// }

// let array = [5, 2, 9, 12, 7, 4, 11, 3, 1];
// console.log('Исходный масссив', array);


// let swapped = Boolean;

// while (swapped) {
//     swapped = false;

//     for (let i = 0; i < array.length; i++) {
//         let current = array[i];
//         let nextItem = array[i + 1];
//         let result = current - nextItem;

//         if (result > 0) {
//             let temp = current;

//             array[i] = nextItem;
//             array[i + 1] = temp;
//             console.log(array);

//             swapped = true;
//         }
//     }
// }





// Это делается уже на следующей итерации фора
// За одну итерацию ты меняешь один раз
// А понять сколько раз такой фор будет выполняться
// Тебе поможет логическая переменная
// Там в любом случае нужен иф, но только один, вложенный в фор
// Как у тебя
// А этот фор в свою очередь будет вложен в уайл
// Который будет зависеть от логической переменной, которая сразу в уайле становится фолс, 
// что бы прекратить цикл если не надо, а потом  становится тру внутри ифа в самом конце
// swapped например
// Если в массиве ни разу следующий элемент не будет больше текущего,
// то соответственно иф не выполняется, и записанное в нём присваивание тру для флажка swapped
// А если выполняется, то уайл соответственно выполняется ещё раз, запуская вложенный фор, который у тебя уже написан
// Эта логическая переменная - индикатор, сколько нужно выполняться сортировке



// приходит массив с элементами, внутри randomNumbers;

// нужно упорядочить его

// 1. Берем a
// 2. Берем a+1
// 3. Отнимаем 1 - (a+1)

// 7,2

// a = 7;
// b = 2;
// 7 - 2 = 5;
// результат > 0, значит элемент справа меньше, чем элемент слева и их нужно заменить

// Теперь нужно понять насколько глубоко нужно свапать b

// Если предыдущий элемент больше текущего, то их нужно поменять местами

// b = 2;
// c = 11;

// 2 - 11 = -9;
// Результат меньше нуля, значит предыдущий больше уже свапнутого, и их нужно свапнуть дальше

// || 

// prevItem = 5;
// current = 2;

// prevItem - current = 3;
// Результат больше нуля, значит нужно их заменить;




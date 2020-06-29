const clients = [
    {
        id: 1,
        name: 'Kaiman',
        age: 6,
    },
    {
        id: 2,
        name: 'Pahom',
        age: 200
    },
    {
        id: 3,
        name: 'Dzhigurda',
        age: 45
    },
    {
        id: 4,
        name: 'Yanukovich',
        age: 60
    },
    {
        id: 5,
        name: 'Yakubovich',
        age: 60
    },
    {
        id: 6,
        name: 'Zoro',
        age: 20
    },
    {
        id: 7,
        name: 'Luffy',
        age: 17
    }
];


// 1. Получить массив всех id клиентов
let getId = clients.map(item => item.id);
console.log('Clients ID: ', getId);


// 2. Сгрупировать всех клиентов по возврасту
let sortByAge = function() {
    let youngerGroup = clients.filter(item => item.age == 25);
    let olderGroup = clients.filter(item => item.age == 60);
    let sorted = { youngerGroup, olderGroup };

    return sorted;
}
console.log('Sorted by age: ', sortByAge());


// 3. Отфильтровать всех клиентов, кто старше 18
let children = clients.filter(item => item.age < 18);
console.log('Children:', children);


// 4. Функция которая ищет среди клиентов по аргументу ввиде объекта.
// Возвращать результат первого совпадения.
// Условия поиска объединяются логическим И
// Использовать.every, .find

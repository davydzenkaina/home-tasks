const myStreet = 'Pushkina'
const numBuilding = 65
const isAdress = true

// Выполнить сложение различных типов(string+boolean, string+number, number+boolean) 

console.log(myStreet + isAdress)
console.log(myStreet + numBuilding)
console.log(numBuilding + isAdress)

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

console.log(myStreet * isAdress)
console.log(myStreet * numBuilding)
console.log(numBuilding * isAdress)

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log(myStreet / isAdress)
console.log(myStreet / numBuilding)
console.log(numBuilding / isAdress)

//На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения
// количества принятых груш и яблок
//1:
function sumFruits(apples, pear) {
  return apples + pear
}
const takenFruits = sumFruits(50, 30)
console.log(takenFruits)
//2:
const fruitsSum = (peaches, apricots) => peaches + apricots
console.log(fruitsSum(50, 30))

//В терминале оплаты сохранено ваше имя, напишите функцию для определения имени
// в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

function login(name) {
  const myName = 'Inna'
  if (myName === name) {
    console.log('Привет', name)
  } else {
    console.log('Нет такого имeни')
  }
}
login('Inna')

//Создать объект car, добавить к нему свойство color со значением 'черный'
//Изменить свойство color объекта car на 'зеленый'
//В объект car добавить свойство power, которое является функцией и 
//выводит в консоль мощность двигателя

const car = {
  color: 'black',
  power: function () {
    console.log('engine power')
  }
}
car.color = 'green'
console.log(car)//{ color: 'green', power: [Function: power] }
car.power()

//Напишите функцию вычисления типа аргумента и вывод типа в консоль

function showType(argument) {
  console.log(typeof argument)
}
showType(6)

// Напишите функцию, которая определяет является ли число простым или нет


function  isPrime(params) {
 for (let i = 2; i < params; i++)
  if (params % i === 0) return false
  return params > 1
}
 console.log(isPrime(7))

//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль 
//названия каждого фильма

const movies = ['The fifth element', 'Home alone', 'Mary Poppins']
movies.forEach(item => console.log(item))

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

const cars = ['Mazda', 'Mersedes', 'Lada']
const joinCars = cars.join(',').split(',')
console.log(joinCars)

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

const friends = ['Helen', 'Mark', 'Serg']
friends.map(item => 'Hello' + item)

//Преобразовать числовой массив в Boolean

console.log(Boolean([1, 2, 3]))

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

let arr = [1, 6, 7, 8, 3, 4, 5, 6]
arr.sort((a, b) => b - a)
console.log(arr)

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

const fib = [1, 6, 7, 8, 3, 4, 5, 6]
const filteredNumbers = fib.filter(num => num > 3)
console.log(filteredNumbers)

//Написать функцию, которая принимает два параметра - массив и число и выводит элемент
// массива равный числу

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function showAlementOfArr(arr, num) {
  console.log(arr[num])
}
showAlementOfArr(array, 4)

//﻿Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

let a = 20
for (let i = 10; i <= a; a--) {
  console.log(a)
}

//Реализовать цикл, который выводит в консоль простые числа

nextPrime:
for (let i = 2; i < 10; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime
  }
  console.log(i)
}

//Реализовать цикл, который выводит в консоль нечетные числа

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i <= num.length; i++) {
  const a = num[i]
  if (a % 2) {
    console.log(a)
  }
}

//Создать 2 объекта: animal и cat, объект animal добавить свойство move,
//объект cat должен наследовать свойство move

const animal = new Object({
  cize: 'small',
  move: function () {
    console.log('Move!')
  }
})

const cat = Object.create(animal)
cat.name = 'Baby'
cat.move()

//Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, 
//которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'

const str = 'ahb acb aeb aeeb adcb axeb'
let result = str.match(/a.b/g)
console.log(result)

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
//1:
const str1 = '2+3 223 2223'
let result1 = str1.match(/2\+3/)
console.log(result1)
//2:
console.log('2+3 223 2223'.match(/2\+3/))

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль
//1:
const d = new Date()

console.log(d.getFullYear())
console.log(d.getMonth() + 1)
console.log(d.getDate())
console.log(d.getDay())

//2:Получить день, месяц и год текущей даты 
function addLeadingZero(d1) {
  return (d1 < 10) ? '0' + d1 : d1
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Friday', 'Tousday', 'Friday', 'Saturday ']

function getUserTime(t = new Date()) {
  let y = t.getFullYear()
  let m = addLeadingZero(t.getMonth() + 1)
  let d = addLeadingZero(t.getDate())
  let d1 = days[t.getDay()]

  console.log(y, m, d, d1)
  return `${y}.${m}.${d} (${d})`
}

console.log(getUserTime())

//В try catch конструкцию завернуть код: console.log(a), let a = 3.
// И вывести ошибку – ‘let перед использованием нужно объявить’.

try {
  console.log(a3)
  const a3 = 3
} catch (error) {
  console.log('Let перед использованием нужно объявить')
}

// При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'

try {
  const b = 1
  const c = 0
  const v = b / c
  if (v === Infinity) {
    throw new DivideError('деление на ноль')
  }
  console.log(v)
} catch (error) {
  console.log('на ноль делить нельзя')
}
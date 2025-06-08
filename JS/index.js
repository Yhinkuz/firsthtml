// //Data types
// //Primitive
// //String
// let name = 'John Doe'
// console.log(name)

// //Number
// let age = 31
// console.log(age)

// //Boolean
// let isMarried = true
// console.log(isMarried)

// //Null
// let userInfo = null
// console.log(userInfo)

// //Undefined
// let date;
// console.log(date);

// Non-primitive Data types
// Date data type
// let timeDate = new Date()
// let hour = new Date().getMonth() + 1
// console.log(timeDate);
// console.log(hour);

// function data type
// Fuction Declaration
// function login(email, password){
//   console.log('Your email('+ email+ ')' + ' and password (' + password + ') are correct');
// }
// login('john@gmail.com', 12345)

// function addNum(a, b){
//   console.log(a + b)
// }
// addNum(15, 10)

// Function expression
// const addNum = (a, b)=>{
//   console.log(a + b);
// }
// addNum(9, 7)

// Array data type
// lenght   1   2   3   4
// let colours = ['white', 'blue', 'red', 'orange']
//  index   0,  1,  2,  3
// console.log(array1.length)
// console.log(array1[2])
// colours.pop() - to remove last element in the array
// console.log(colours);
// colours.push('grey')
// console.log(colour)
// colours.shift() - to remove first element in the array
// console.log(colours)
// console.log(colours.unshift())
// colours.unshift('violet') - to add first element in the array
// console.log(colours)

// Nested Objects
// const person = {
//   name: 'Jene',
//   age: 25,
//   inStudent: true,
//   religion: 'Christian',
//   country: 'Armenia',
//   profession: {
//     title: 'SE',
//     company: 'Google',
//     mode: 'Remote',
//     level: 'Tier 1',
//     jobDesc: {
//       started: '2023/07/12',
//       endDate: 'currently works here',
//       qualification: 'ISQBT'
//     }
//   }
// }
// console.log(person.country, person.profession.company, person.profession.jobDesc.qualification)
// console.log(person['isStudnet'], person.age)

// Nested Arrays
// const properties = [
//   'shoes',
//   cars=['lamborghini', 'porshe', benz=['AMG', 'GLE', 'GLK'], 'Toyota'],
//   companies=['TechHub', 'school', 'saloon', factories=['salt', 'cement', 'flour', 'sugar'], 'restaurant'],
//   house=['Penthouse', 'bungalow', 'duplex', multiStorey=['4', '3', '5']]
// ]
// console.log(properties[1][2][2], properties[2][3][3], properties[2][4], properties[3][3][1])
// console.log(benz[2], factories[3], companies[4], multiStorey[1])

// const players = [
//   {
//     id: 1,
//     name: 'Lionel Messi',
//     country: 'Argentina',
//     club: 'Inter Miami'
//   },
//     {
//     id: 2,
//     name: 'Cristiano Ronaldo',
//     country: 'Portugal',
//     club: 'Al Nassr'
//   },
//   {
//     id: 3,
//     name: 'Bruno Fernadez',
//     country: 'Portugal',
//     club: 'Manchester United'
//   },
//   {
//     id: 4,
//     name: 'Luca Modric',
//     country: 'C',
//     club: 'Real Madrid'
//   }
// ]

// console.log(players[0].name, players[0].club, players[2].name, players[2].club)

// Objects of Arrays
// const things = {
//   colours: ['white', 'black', 'orange', 'purple'],
//   cars: ['Toyota', 'Audi', 'Nissan', 'Honda'],
//   fruits: ['Apples', 'Banana', 'Mango', 'Berries']
// }

// console.log(things.colours[3], things.cars[3], things.fruits[2])

// // Arithmetic operators
// console.log(5 + 7);
// console.log(15 + 7);
// console.log(12 * 2);
// console.log(10 + 3);
// console.log(9 % 2);  // modulus operator
// console.log(5 ** 4); // exponential operator

// // Shorthand operators
// let total = 0 
// let price = 50
// total += price
// console.log(total)

// Assignment operation
// let x = 10

// comparison operators
// console.log(5 == '5');
// console.log(5 != 8)
// console.log(7 === 9)
// console.log(8 !== 8)
// console.log(10 > 5)
// console.log(7 < 3)
// console.log(3 >= 8)
// console.log(5 <= 9)

// logical operators
// And operators
// let x = 10
// let y = 1
// console.log(x == 5 && y > 3);

// Or operator ||
// console.log(x >= 5 || y > 3);

// string operators
// string concatenation
// let school = 'Gomycode'
// let address = '230 Herbert Macaulay way'
// let direction = 'I attend ' + school + ' at ' + address
// console.log(direction)

// // Template literal
// let navi = `I attend ${school} at ${address}`
// console.log(navi)

// conditional statement
// if statement
// let name = 'Jenny'
// if(name == 'James'){
//   console.log(`My name is ${name}`)
// }
// else if(name == 'Micky'){
//   console.log(`My name is ${name}`)
// }
// else if(name == 'Jenny'){
//   console.log(`My name is ${name}`)
// }
// else{
//   console.log('name does not match')
// }

// Switch Statement
// function decodeColour(){
//   let colour = prompt('Choose a colour')
//   switch(colour){
//     case 'white': alert('You chose white');
//     break;
//     case 'black': alert('You chose black');
//     break;
//     case 'blue': alert('You chose blue');
//     break;
//     case 'green': alert('You chose green');
//     break;
//     default:
//       alert('You chose an invalid colour')
//   }
// }
// decodeColour()

// Ternary operation
// let marks = prompt('Enter your score');
// let result = (marks >= 40) ? 'Pass' : 'Fail'
// alert(result)

// Chained Ternary Operator
// let score = 30
// let result = (score <= 40) ? 'You failed' : (score > 40 && score <=75) ? 'You passed' : (score > 75 && score <= 100) ? 'You did extremely well' : 'You did not write the exam'
// console.log(result)

// Increment Operators ++
// let number = 5
// number++
// console.log(number)

// Decrement Operators --
// let numbers = 5
// numbers--
// console.log(numbers)

// Iteration
// Loops
// While Loop
// let num = [3, 5, 8, 2]
// let sum = 0
// let i = 0
// while(i < num.length){
//   sum += num[i]
//   i++
// }
// console.log(sum);


// Do-While Loop
// let num = [3, 5, 8, 2]
// let sum = 0
// let i = 0
// do{
//   sum += num[i]
//   i++
// }while(i > num.length)
// console.log(sum);

// For Loop
// let num = [3, 5, 8, 2]
// let sum = 0
// for(let i = 0; i < num.length; i++){
//   sum += num[i]
// }
// console.log(sum);




//
// Prompt the user for length and width, then calculate and log the area
// function area(){
//   let lenght = prompt('enter the lenght')
//   let width = prompt('enter the width')
//   let area = (lenght * width)
//   alert(area)
// }
// area()

// Prompt the user for a number of display whether it's even or odd.
// Prompt the user to enter a number
let num = prompt("Enter a number:");

// Convert the input to a number
num = Number(num);

// Check if the input is a valid number
if (isNaN(num)) {
  alert("That's not a valid number!");
} else {
  // Check if the number is even or odd
  if (num % 2 === 0) {
    alert(num + " is even.");
  } else {
    alert(num + " is odd.");
  }
}



// Compare two numbers and display the larger one
// function compare(num1, num2){
//   let big = num1
//   let sml = num1
// if(big = sml){
//     console.log(big)
//   } else{console.log(sml)}
// }
// compare(90, 50)

// Ask for username and password. Validate them
// function Validate(){
//   let username = prompt('enter the username')
//   let password = prompt('enter the password')
//   let result = ('login successful')
//   alert(Validate)
// }
// Validate()

// subtract numbers in an array

  // let num = [20, 10]
  // let result = num.reduce((acc, nums) => acc - nums)
  // console.log(result)
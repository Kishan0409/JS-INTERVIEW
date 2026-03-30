// console.log("hi");

// Q. diff berween == and === in operator ??

// console.log(5 == "5") // true 
// console.log(5 === "5")// false

// Q1. Reverse a string??

//   let str = "hello";

//   function reverseString(str)  {
//     return str.split("").reverse().join("")
//   }
//   const result =  reverseString(str);
//   console.log(result);

 // other method using loops 

//   function reverseString(str) {
//      let reversed = "";
//      for(let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//      }
//      return reversed;
//   }

//   const result = reverseString(str);
//   console.log(result);

//  Q2. Find the maximum number in an array??? 

//  let arr = [3,6,7,8,9,45,67,89];

//  const maxArray = Math.max(...arr);
//  console.log(maxArray);

// other method while using loops 

let arr = [3,6,7,8,9,45,67,89];
 let maxval = arr[0];
 for(let i = 1; i< arr.length ; i++) {
    if(arr[i] > maxval) {
        maxval = arr[i]
    }
 }
 console.log(maxval);


  

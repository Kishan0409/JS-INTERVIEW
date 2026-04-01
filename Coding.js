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

// let arr = [3,6,7,8,9,45,67,89];
//  let maxval = arr[0];
//  for(let i = 1; i< arr.length ; i++) {
//     if(arr[i] > maxval) {
//         maxval = arr[i]
//     }
//  }
//  console.log(maxval);

// Q3.Count characters in a string ?

//  let str = "my name iskishan"

//     let count = {}

//     for(let char of str) {

//         if(char === " ") continue
//         count[char] = (count[char] || 0) +1
//     }
//     console.log(count);


//  Q4.Check for palindrome ??
   
//    const str = "madamjj"

//    function palindrome(str) {
//     const result = str.split("").reverse().join("")
//     return str === result;
//    }
//    console.log(palindrome(str));

// Q5.Find duplicates in an array ??

//   let arr = [1, 2, 3, 2, 4, 5, 1];

//   let duplicates = arr.filter((item,index) => arr.indexOf(item)!== index)
//   let result = [...new Set(duplicates)]
//   console.log(result);

 // Q6. flatten an array ??
//      let arr = [1, 4, 5, 6, [4, 7, 8, 9, 8, 6], [5, 7] ]
//   const result  = arr.flat(Infinity);
//   console.log(result);

// Q7. Swap two numbers without third variable ??

//   let a = 10;
//   let b = 20 ;

//   a = a+b;
//   b = a-b;
//   a = a-b;

//   console.log(a,b);

// Q8.Write a JavaScript function to find the second largest number in an array.?
//    let arr = [10, 5, 20, 8, 12, 30, 30,30]  
  
//   function secondLargest(arr) {
//     let result = [...new Set(arr)] 
//     result.sort((a,b) => b-a) 

//     return result[1]
//   }
//   console.log(secondLargest(arr));

// Q9.Write a JavaScript function to count the number of vowels in a string.
    //   let str = "kishan Rai"

    //   function count(str) {
    //    str = str.toLowerCase()
    //    const vowels = ['a','i','e','o','u']
    //    let count = 0;
    //   for(let char of str) {
    //     if(vowels.includes(char)) {
    //         count++
    //     }
    //   }
    //   return count ; 
    //   }
    //   console.log(count(str));

    // Q10. FIND THE MINIMUM NUMBER IN THE ARAAY ??
         let arr = [10, 25, 5, 67, 99, 32]

         let result  = Math.min(...arr);
         console.log(result);
        // Alternative method using loop
        let minval = arr[0];
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < minval) {
                minval = arr[i];
            }
        }
        console.log(minval);
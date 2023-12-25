function getElementWidth(content, padding, border) {
    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding);
    border = Number.parseFloat(border);
    return content + padding * 2 + border * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));



// function checkAge(age) {
//   if(age >= 18) {
//    return "You are an adult"
//   }
// }
// console.log(checkAge(17));
// console.log(checkAge(32));
// console.log(checkAge(15));




// // function checkStorage(available, ordered) {
// //   if (available < ordered) {
// //     return "Not enough goods in stock!"
// //   }
// //   else {
// //     return "Order is processed, our manager will contact you"}
// // }
// // console.log(checkStorage(15, 20));
// // console.log(checkStorage(20, 20));
// // console.log(checkStorage(25, 20));
// // console.log(checkStorage(35, 20));



// function checkStorage(available, ordered) {
//   if(ordered === 0) {
//     return "There are no products in the order!";
//   }
//   else if(ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   }
//   else {
//     return "The order is accepted, our manager will contact you"
//   }
// }
// console.log(checkStorage(150, 0));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(150, 250));
// console.log(checkStorage(150, 5));



// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return  password === correctPassword ? "Access granted" : "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("jque"));



// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//       break;
//     case "professional":
//       return 20;
//       break;
//     case "organization":
//       return 50;
//       break;
//     default :
//       return "Invalid subscription type!"
//   }
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("org"))




// const screenWidth = 1201;
// const sm = 320;
// const md = 768;
// const lg = 1200;
// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }




// function isNumberInRange(start, end, number) {
//   if (number >= start && number <=end) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(10, 30, 10));



// function checkAccess(subType) {
//   if (subType === "pro" || subType === "vip") {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(checkAccess("pro"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("start"));
// console.log(checkAccess("false"));



// ne poluchilos
// function toggleModalVisibility(isVisible) {
//   if (isVisible = !false ) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(toggleModalVisibility(false));
// console.log(toggleModalVisibility(true))



// function getSubstring(string, length) {
//   return string.slice(0, length)
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));



// function normalizeInput(input, to) {
//   if(to === "upper") {
//     return input.toUpperCase()
//   }
//   else if(to === "lower") {
//     return input.toLowerCase()
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"))



// function checkForName(fullName, firstName) {
//   const fullNameLowerCase = fullName.toLowerCase();
//   const firstNameLowerCase = firstName.toLowerCase();
//   if(fullNameLowerCase.includes(firstNameLowerCase)) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));




// function checkFileExtension(fileName, ext) {
//   if(fileName.endsWith(ext)) {
//     return "File extension matches";
//   }
//   else {
//     return "File extension does not match";
//   }
// }
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("styles.css", ".js"));


// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i ++ ) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(4));


// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i +=2 ) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(12));


// const start = 6;
// const end = 17;
// let number;
// for (number = start; number <= end; number ++) {
//   if (number % 5 === 0){
//     break;
//   }
// }
// console.log(number)


// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");

// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }
// const result = findNumberFromFive(10, 8);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);


// function findNumber(start, end, divisor) {
//   for (let number = start; number <= end; number ++) {
//     if (number % divisor === 0) {
//       return number
//     }
//   }
// }
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(16, 25, 3));



// function createArrayOfNumbers(min, max) {
//   const numbers = []
//   for(let i = min; i < max; i+=1) {
//     numbers.push(i)
//   }
//   return numbers
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(1, 8));
// console.log(createArrayOfNumbers(5, 10));



// function calculateTotalPrice(order) {
//   let total = 0;
//   for(let i = 0; i < order.length; i++) {
//     total += order[i];}
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));


// function getEvenNumbers(start, end) {
//   const numbers = [];
//   for(let i = start; i <= end; i++) {
//     if(i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));



// function checkStorage(storage, item) {
//   const itemLowerCase = item.toLowerCase();
//   if (storage.includes(itemLowerCase)) {
//     return `${itemLowerCase} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
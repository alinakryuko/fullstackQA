// 1. Sum of numbers
const N = parseInt(prompt("Enter a number:"), 10);

let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log("Sum:", sum);

// 2. Factorial
function factorial(N) {
  if (N < 0) return "Not defined for negative numbers";

  let result = 1;
  for (let i = 2; i <= N; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // 120

// 3. Maximum Value Search
const arr = [3, 7, 2, 9, 4];

let max = arr[0]; // assume first element is the largest

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Maximum value:", max);

// 4. Minimum Value Search
const arr = [3, 7, 2, 9, 4];

let min = arr[0]; // assume first element is the smallest

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("Minimum value:", min);

// 5. Palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

const input = prompt("Enter a string:");

if (isPalindrome(input)) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}

// 6. Element Search
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // element found, return its index
    }
  }
  return -1; // element not found
}

const numbers = [10, 20, 30, 40];

console.log(findIndex(numbers, 30)); // 2
console.log(findIndex(numbers, 50)); // -1

// Code your solution here!
// Write a recursive function to print out all of the characters in a string.

function printString(n){
    let substring;
    console.log(n[0]);
    if (n.length>1){
      substring = n.substring(1, n.length);
      printString(substring);
    }else {
      return;
    }
};
printString('tacotuesday');


// Once we've verified that our solution works, let's move it over to our `index.js` file and start attacking the remaining challenges in this lab.

// ## Additional string challenges

// 1. Write out a recursive function to reverse a string.
function reverseString(string) {
    let substring;
    if (string.length > 0){
      let rev = string[string.length - 1];
      substring = string.substring(0, string.length - 1);
      return rev + reverseString(substring);
    } else {
      return "";
    }
};
reverseString('big cow party here');

// 2. Write out a recursive function to see if a word is a palindrome.
function checkPalindrome(str) {
  let string = str.toLowerCase()
  let len = string.length
  if (len <= 1) {
    return true;
  }
  if (string[0] === string[len - 1]){
    return checkPalindrome(string.substring(1,len-1))
  } else {
    return false;
  }
}
checkPalindrome('pooooooop')

// ## Array challenges

// Arrays are another type of recursion-happy data structure. This is because, similar to the string–substring relationship, the properties of an array can be thought of as a series of sub-arrays or, in the context of our `printString()` code above, a combination of sub-arrays and a final element.

// 1. Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(arr, index) {
  if (index <= 0){
    return arr[0];
  }
  return addUpTo(arr, index - 1) + arr[index];
}

// 2. Write a recursive function to find the largest integer in an array.
function maxOf(arr) {
  let max = arr[arr.length - 1];
  
  if (arr.length === 1) {
    return max;
  }
  if (max > arr[arr.length - 2]){
    arr.splice(arr.length - 2, 1);
  } else {
    arr.splice(arr.length - 1, 1);
  }
  return maxOf(arr)
}

// 3. Write out a function to see if an array includes a given element.
function includesNumber(arr, n) {
  if (arr.length === 1 && arr[0] != n) {
    console.log("Element not found")
    return false;
  }
  if (arr[arr.length -1] === n){
    console.log("Element found")
    return true;
  } else {
    arr.pop()
    return includesNumber(arr, n)
  }
}


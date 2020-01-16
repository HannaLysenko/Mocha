function sum (a, b){
  return a + b;
}

function mult (a, b){
  return a * b;
}

function isAdult (age){
  if (age >= 18) return true;
  else if (age < 18 && age > 0) return false;
  else return undefined;
}

function isPalindrome(str){
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return (str === newStr);
}

function isOddNumber (x){
  return (x % 2 === 1) || (x % 2 === -1) && (typeof x === 'number');
}

function isEvenNumber (x){
  return (x % 2 === 0) && (typeof x === 'number');
}

function sortArrayUp (arr){
  return arr.sort();
}

function indexOfFirstNegative(arr){
  for ( let i = 0; i < arr.length; i++){
    if (arr[i] < 0) return i;
  }
}

function arraySum (arr){
  let n = 0;
  for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] != 'number') return 'Array contains NaN';
    n = n + arr[i];
  }
  if(arr.length == 0) return ('Array is empty');
  else return n;
}

function valueIsNaN(v){
  return v !== v;
}



module.exports = {sum, mult, isAdult, isPalindrome, isOddNumber, isEvenNumber, sortArrayUp, indexOfFirstNegative, arraySum, valueIsNaN};

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

function isOddNumber (num){
  return (num % 2 !== 0);
}

function isEvenNumber (num){
  return (num % 2 === 0);
}

function sortArrayUp (arr){
  return arr.sort();
}

module.exports = {sum, mult, isAdult, isPalindrome, isOddNumber, isEvenNumber, sortArrayUp};

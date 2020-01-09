function sum (a, b){
    return a + b;
}

function mult(a, b){
    return a * b;
}

function isAdult(age){
    if(age >= 18) return true;
    else return false;
}

function isPalindrome(str){
    let srt1 = '';
    for (let i = 0; i < str.length; i++){
        str1 += str[i];
    }
    return (str === str1);
}

function isOddNumber(num){
    return (num % 2 !== 0);
}

function isEvenNumber(num){
    return (num % 2 === 0);
}

function sortArrayUp(arr){
    return arr.sort();
}

module.exports = {sum,   mult, isAdult, isPalindrome, isOddNumber, isEvenNumber, sortArrayUp};

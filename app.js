//  Q1 in proplem solving Fibonacci Series:

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
      let nTerms=7;
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }

////////////////////////////////////////////////////////

//  Q2 in proplem solving The sum of Array Elements in recursive:

function sumArray(arr) {
    if(arr.length === 0) {
        return 0;
    }
    else {
        return arr[0] + sumArray(arr.slice(1));
    }
} let arr1=[1,2,3,4,5,6,7,8,8];
console.log(sumArray(arr1));

////////////////////////////////////////////////////////
   //Q3 in proplem solving reverse string 

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
 
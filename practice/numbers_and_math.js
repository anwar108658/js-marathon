
isNaN("hello");

// console.log(Number.isFinite("hello"));


// q-1 :  How would you generate a random integer between 50 and 100, including both 50 and 100?

(function randomNumBtwn50To100(params) {
    const max = 100
    const min = 50
    // console.log(Math.floor(Math.random() * (max - min + 1)) + min);
})();


// q-2 :  Write a function that determines whether a number is even or odd?

function isEven(number) {
    return number % 2 === 0 ? "even" : "odd";
}
// console.log(isEven(3))


// q-3 :  Write a function that returns the largest of three numbers.

function largestNum(...params) {
    const numVal = [...params]
    let num = 0
    for (let i = 0; i < numVal.length; i++) {
        if (numVal[i] > num) {
            num = numVal[i]
        }
    }
    return num
}

// console.log(largestNum(1,3,7,5,7,9))

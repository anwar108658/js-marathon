let str = "Hello";
str[0] = "Y";
// console.log(str);


const str1 = "Hello World";
// console.log(str1.indexOf(" "));


const str2 = "JavaScript";
// console.log(str2.slice(4));


//  reverse string

const q1 = "javaScript"
let reversStr = ""

for (let i = 0; i < q1.length; i++) {
    reversStr = q1[i] + reversStr
}
// console.log(reversStr)

// count char

const q2 = "1 1 1"
let i1 = 0
let count1 = 0

while (i1 < q2.length) {
    if (q2[i1] !== " ") {
        count1++
    }
    i1++
}

// console.log(count1)

// how many a

const q3 = "JavaScript is amazing"
let count2 = 0


for (let i = 0; i < q3.length; i++) {
    if (q3[i] == "a") {
        count2++
    }
}
// console.log(count)

// capital first char each word

const q4 = "hello world"
const result1 = q4.split(' ').map(i => i[0].toUpperCase()+i.slice(1)).join(" ")
// console.log(result1)

// palindrome

const q5 = "madam"
let result2 = q5.split('').reverse().join('')
 if (q5 == result2) {
    // console.log("palindrome")
}else{
    // console.log("not palindrome")
 }

//  remove space

const q6 = "Java Script Is Easy"
let result3 = q6.split(' ').join('')
// console.log(q6.charAt(1))
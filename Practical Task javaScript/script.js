
"use strict"
// //1. Write a program to display current date in dd/mm/yyyy and mm-dd-yy format 

// var today = new Date();

// var todayDate = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
// var day = today.getDate();
// var month = today.getMonth();
// var year = today.getFullYear();

// console.log("ToDay Date is :" + todayDate)
// console.log(month + "-" + day + "-" + year);

// //=========================end ============================

// // 2. Write a program to display file's extension from any filepath.
// // Example: filepath= C:/Programmer/pictures/monkey.jpg
// // Output should be: jpg 

// function getExtension(path) {
//     var basename = path.split(/[\\/]/).pop(),
//         // (supports `\\` and `/` separators)
//         pos = basename.lastIndexOf(".");

//     if (basename === "" || pos < 1)
//         return "";
//     console.log(pos + 1)
//     return basename.slice(pos + 1);
// }
// console.log(getExtension("C:/Programmer/pictures/monkey.jpg"));

// //======================================================


// //3.Write a JavaScript program to remove a character at the specified position of a given string and return the new string. // 15 monits

// let name = prompt("Enter Name and its Remove Specific (t) Carector and return new String Without (t) Charactor");
// let name2 = name.split("t")
// let aa = name2.toString();

// console.log(aa.replaceAll(',', '') + " position " + Number(name.indexOf("t") + 1))


// //===============================================================

// //4. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7 

// let no = prompt("Enter Number its chacke  multiple of 3 or a multiple of 7 ")

// let getno = Number(no);
// console.log(getno)
// function getnumber(x) {

//     if (x % 3 == 0) {
//         console.log("this no multiple of 3")
//         return true
//     } else if (x % 7 == 0) {
//         console.log("this no multiple of 7")
//         return true
//     } else {
//         console.log("this not multiple of 3 or 7")
//         return false
//     }
//     // if (x % 3 == 0 || x % 7 == 0) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// }
// console.log(getnumber(getno));

// //5. Write a JavaScript program to check whether given 5 numbers between range of 50...99. 

// let aary = new Array();

// let noarray = []

// for (let i = 0; i <= 4; i++) {
//     aary = prompt("Enater 5 Numbers and it chack numbers between range of 50...99")
//     //  console.log(aary)
//     noarray.push(aary)


//     if (aary <= 50 || aary > 99) {
//         console.log(aary + " Is Out Of Range")
//     } else {
//         console.log(aary + " is inside range")
//     }
// }
// console.log("Your Array  " + noarray)



// return a new array of strings




// //7. Write a program to reverse a given String 
// function reverseString(str) {
//     const arrayStrings = str.split("");
//     console.log("arrayStrings :" + arrayStrings)
//     const reverseArray = arrayStrings.reverse();
//     console.log(reverseArray)
//     const joinArray = reverseArray.join("");
//     console.log("YOur Join array Function" + joinArray)
//     return joinArray;
// }
// const string = prompt('Enter a string: ');
// const result = reverseString(string);
// console.log(result);

//8. Write a program to convert a given seconds to hours and minutes

// let hours, minits, seconds;

// let givsecond = prompt("Enter Second :")

// hours = givsecond / 3600;

// minits = (givsecond - (3600 * hours) / 60);

// console.log(hours + " Hours and " + minits + " Minutes")

// //9. Write a program to convert the letters of a given String in alphabetical order 

// function alphbatOrder(str) {
//     return str.split("").sort().join("");
// }

// let alpha = prompt("Enter String it Convert Alphabatic Order ")
// console.log(alphbatOrder(alpha))

//10. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1. 

// let namelist = ["mayank", "ravi", "sandeep", "drishti", "romil"];

// let array = new Array();
// array.push(namelist[0])
// array.push(namelist[4])
// console.log(array)

// //11. Write a program to round off the decimal value from given array 

// let noround = [2245.6268, 6654.6832, 4125.5542, 3698.3987, 2999.9974]
// for (let i = 0; i < noround.length; i++) {
//     console.log(Math.round(noround[i]));
// }

//12. Write a program to create a new array from sum of two array's each element. 

// let array1 = [2, 6, 8, 4]

// let array2 = [1, 0, 3, 9]
// let result = new Array()

// result.push(Number(array1[0]) + Number(array2[0]))
// result.push(Number(array1[1]) + Number(array2[1]))
// result.push(Number(array1[2]) + Number(array2[2]))
// result.push(Number(array1[3]) + Number(array2[3]))
// console.log(result)

// // let result = new Array()
// // for (let i = 0; i < array1.length; i++) {
// //     for (let j = 0; j < array2.length; j++) {

// //         result.push(Number(array1[i]) + Number(array2[j]))

// //     }

// // }

// // console.log(result)

// //13. Write a program to calculate average marks and total grade for marks of a student in each subject: 

// let subjectlist = [["Maths", 88], ["Science", 92], ["History", 83], ["English", 63], ["Hindi", 76]]
// let total = 0;
// let avg = 0.0;

// for (let i = 0; i < subjectlist.length; i++) {
//     let specisubject = subjectlist[i]
//     console.log(specisubject[1])
//     total = total + specisubject[1]
// }
// console.log("Toatal Marks :" + total)

// console.log("Total Subject : " + subjectlist.length)
// avg = total / 5
// console.log("avge", avg)

// if (avg > 100) {
//     console.log("Grad A")
// } else if (avg > 90) {
//     console.log("Grad B")
// } else if (avg > 80) {
//     console.log("Grad C")
// } else if (avg > 70) {
//     console.log("Grad D")
// } else if (avg > 60) {
//     console.log("Gtrad F ")
// } else {
//     console.log("Bhai 60 Niche Maja na avi ho ")
// }



// F :avg<60, D :avg<70, C:avg <80, B: avg<90, A: avg<100

//6. Write a program to check whether a specified character exists in a String value or not, if yes then display its position:
let getstring = prompt("Enter your Name it Chack in your Name T or not ")

let nowsyring = getstring.split("")

console.log(getstring.indexOf("t") + 1)
console.log(nowsyring)


for (let i = 0; i < nowsyring.length; i++) {
    if (nowsyring[i] == 't') {
        console.log("t is in" + getstring + "position " + i)

    } else {

        console.log("t is not in  " + getstring)
    }
}
// console.log(nowsyring)




// function nameFull(name, last) {
//     return "My name is" + " " + name + " " + last;
// }
// console.log(nameFull("Marina", "Stevanovic"));


// function draw(velicine) {
//     for (let i = 0; i < velicine; i++) {
//         if (i === 0 || i === velicine - 1) {
//             console.log("*****");
//         } else {
//             console.log("*   *");
//         }
//     }
// }
// draw(10);

//PRVO VEZBANJE

//Prvi zadatak

// function maxNumber(a, b) {
//     return a > b ? a : b
// }
// console.log(maxNumber(5, 6));


//Drugi zadatak

// function givenNumber(a) {
//     a % 2 === 0 ? console.log("even") : console.log("odd");
// }

// givenNumber(4);

//Treci zadatak

// function threeDigit(a) {
//     return (a / 100 >= 1 && a/1000 < 1) ? console.log("yes") : console.log("no");  
// }
// threeDigit(22);


//Cevrti zadatak

// function arithmetic(a, b, c, d) {
//     var res = (a + b + c + d) / 4
//     console.log(res);
//     return res
// }

// arithmetic(5, 6, 7, 48);


//Peti zadatak

// function square(size) {
//     var star = ""
//     for (var i = 1; i <= size; i++) {
//         for (var j = 1; j <= size; j++)
//             if (i === 1 || i === size || j === 1 || j === size) {
//                 star += "*"
//             } else {
//                 star += " "
//             } star += "\n"
//     } return star

// }
// console.log(square(5));


//Sedmi zadatak

// function numOfDigits(a) {
//     return ("" + a).length
// }
// console.log(numOfDigits(786));

//Osmi zadatak

// var a = [2, 7, 7, 5, 8, 3];test
// var e = 7;test
// ternary b += elementNiza === e ? 1 : 0 test

// function count(a, c) {
//     var b = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === c) {
//             b++;
//         }
//     } return b;
// }
// console.log(count([3, 3, 3, 5], 3));


//Deveti zadatak

// var a = [3,4,5,6,7,8];

// function oddSum() {
//     var cnt = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] % 2) cnt += a[i] 
//     }
//     return cnt
// }
// console.log(oddSum(a)); 

//Deseti zadatak

// function letterA(a){
//     var cnt = 0;
//     for (var i = 0; i < a.length; i++) {
//      if(a[i] === "a" || a[i] === "A"){
//          cnt++
//      } 
//     } return cnt
// }
// console.log(letterA(['a','s','d','a','a','A','h']));


//Jedanaesti zadatak

// function printOut(str, num) {
//     var cnt = '';
//     for (let i = 0; i < num; i++) {
//         cnt += str
//     } return cnt
// }

// console.log(printOut('abc',4)); 


//DRUGO VEZBANJE

//Prvi zadatak

// function checkInput(a) {
//     if (typeof a === "string") {
//        return "true";
//     }else{
//         return "false";
//     }  
// }
// console.log(checkInput(675));


//Drugi zadatak

// function checkInput(a){
//     if(a === ""){
//         return "true"
//     }else{
//         return "false"
//     }
// }
// console.log(checkInput(""));


//Treci zadatak

// function ha(b) {
//     var str = "";
//     for (let i = 0; i < b; i++) {
//         str += "xa"
//     } return str
// }
// console.log(ha(4));


//Cetvrti zadatak

// function occu(a, n) {
//     var cnt = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 'n') cnt++
//     } return cnt
// }
// console.log(occu("hokaennnnnndndfwn", "n"));


//Peti zadatak

// function firstOccu(str, lett) {                 func check(str,a){
//     var b = -1;                                 var i =0;  
//     for (let i = 0; i < str.length; i++) {      while(str[i] !== a){
//         if (str[i] === lett) {                  i++
//             b = i;                              if(i > str.length) return -1
//             break                               }
//         }                                       return i;
//     }                                           }
//     return b
// }

// console.log(firstOccu("jahduhuhuajifiaaa", "a"));


//Sedmi zadatak

// function convertToArray(str) {
//     var newArra = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "") {
//             newArra[newArra.l] = null
//         } else {
//             newArra[newArra.length] = str[i]
//         }
//     } return newArra;
// }

// console.log(convertToArray("hftyhdrf hkhvf"))


//Osmi zadatak

// function isPrime(num){
//     if(typeof num !== "number") return false
//     if(num <=1) return false
//     for (let i = 2; i < num; i++) {
//         if(num % i === 0) return false 
//     }return true
// }

// console.log(isPrime(13));


//Deveti zadatak

// function separateStr(str, s) {
//     var output = "";
//     if (s === undefined) s = "_";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             output += s
//         } else {
//             output += str[i]
//         }
//     } return output
// }
// console.log(separateStr("marina marina", "+"));


//Deseti zadatak

// function getCharacter(str, n) {
//     if (str.length <= n) return str
//     var output = "";
//     for (let i = 0; i < n; i++) {
//         output += str[i]
//     }return output + "..."
// }

// console.log(getCharacter("uifugunn", 3));


//Jedanesti zadatak

// var test = ["1", "21", undefined, "42", "1e+3", Infinity]

// function arrayOfNumbers(arr) {
//     var output = [];
//     for (let i = 0; i < arr.length; i++) {
//         var c = arr[i] * 1
//         if (c !== c || c === -Infinity || c === Infinity)
//             continue;
//         output[output.length] = c
//     } return output
// }

// console.log(arrayOfNumbers(test));


//Dvanesti zadatak

// function caltYears(year, sex) {
//     var age = 2021 - year;
//     var ageLimit = sex === "m" ? 65 : 60

//     if (age >= ageLimit){
//         console.log("Retired");
//     }else{
//         console.log(ageLimit - age);
//     }
// }


// caltYears(1994, "m");


//Trinesti zadatak

// function humanizeNumber(num) {
//     var string =  num + ''
//     if (string[string.length - 1] * 1 > 3 || string[string.length -1] === "0" || string[string.length -2] === "1") {
//         return string + "th"
//     } else if (string[string.length - 1] === "1") {
//         return string + "st"
//     } else if (string[string.length - 1] === "2") {
//         return string + "nd"
//     } else if (string[string.length - 1] === "3") {
//         return string + "rd"
//     }
// }

// console.log(humanizeNumber(2230)); 


//TRECE VEZBANJE

//Prvi zadatak

// function insert(str1, str2, pos) {
//     var output = '';
//     pos = pos === undefined ? 1 : pos
//     for (let i = 0; i < str1.length; i++) {
//         if (i === pos) {
//             output += str2
//         }
//         output += str1[i]
//     } return output
// }
// console.log(insert("My random string", "js ",10));


//Drugi zadatak

// function tReX(niz) {
//     var output = '';
//     for (let i = 0; i < niz.length; i++) {
//         var element = niz[i] + ' '
//         if (element === undefined ||
//             element === null ||
//             element !== element ||
//             element === Infinity){
//             continue
// }
//         output += element
//     } return output
// }
// var test = [NaN, 0, 15, false, -22, '', undefined, 47, null]
// console.log(tReX(test));


//Treci zadatak

// function filter(niz){
//     var output = [];
//     for (let i = 0; i < niz.length; i++) {
//         if(niz[i]){
//         output[output.length] = niz[i];
//         }
//     }return output
// }
// console.log(filter([NaN, 0, 15, false, -22, '', undefined, 47, null]));


//Cetvrti zadatak

// function reverse(num) {
//     var strNum = "" + num;
//     var output = "";
//     for (let i = strNum.length - 1; i >= 0; i--) {
//         output += strNum[i]
//     } return output
// }
// console.log(reverse(12345));


//Peti zadatak

// function getLast(niz, n) {
//     n = n === undefined ? 1 : n;
//     var output = [];

//     for (let i = niz.length - n; i < niz.length; i++) {
//         output[output.length] = niz[i]
//     } return output
// }
// console.log(getLast([1, 2, 3, 4, 5, 6, 7],3));


//Sesti zadatak

// function dino(num, ele) {
//     var output = [];
//     ele = ele === undefined ? null : ele

//     for (let i = 0; i < num; i++) {
//         output[i] = ele
//     } return output;
// }

// console.log(dino(4));


//Sedmi zadatak

// function isPerfect(num) {
//     if (num < 1) return false
//     var suma = 1;

//     for (let i = 2; i < num / 2; i++) {
//         if (num % i === 0) {
//             suma += i
//         }
//     }return num === suma
// }

//     console.log(isPerfect(496));


//Osmi zadatak

// function find(sen, word) {
//     var searchIndex = 0
//     var count = 0

//     for (let i = 0; i < sen.length; i++) {
//         if (sen[i] === word[searchIndex]) {
//             searchIndex++
//             if (searchIndex === word.length) {
//                 searchIndex = 0
//                 count++
//             }
//         }
//     } console.log("The word" + word + "was found " + count + " times");
// }
// find("The quick brown fox jumps over the lazy dog", " fox ")


//Deveti zadatak

// function hideEmail(str) {
//     var output = "";
//     var shouldCopy = true;
//     for (let i = 0; i < str.length; i++) {
//         if (i === 3) {
//             shouldCopy = false
//             output += "..."
//         }
//         if (str[i] === "@") shouldCopy = true

//         if (shouldCopy) {
//             output += str[i]
//         }
//     } return output
// }
// console.log(hideEmail("marina@gmail.com"));


//Deseti zadatak

// function dino(niz) {
//     var maxFrequency = 0
//     var maxElement = null;
//     var counter = 0;
//     var alreadyChecked = []
//     for (let i = 0; i < niz.length; i++) {

//         for (let j = i; j < niz.length; j++) {
//             if (niz[j] === currentElement) {
//                 counter++
//             }
//         }

//         if (counter > maxFrequency) {
//             maxFrequency = counter
//             maxElement = niz[i]
//         }
// counter = 0
//     }return maxElement
// }




// function getCounter(counters, element) {
//     for (let i = 0; i < counters.length; i++) {
//         if (counters[i][0] === element) {
//             return counters[i]
//         }
//     } return null
// }

// function dino(niz) {
//     var counter = [
//         [currentElement, counter],
//     ]
//     for (let i = 0; i < niz.length; i++) {
//         var currentElement = niz[i];
//         var counter = getCounter(counters, currentElement)
//         if (counter) {
//             counter[1] = counter[1] + 1
//         } else {
//             counters[counter.length] = [currentElement, 1]
//         }
//     }
//     var max = 0;
//     var maxElement;
//     for (let i = 0; i < counters; i++) {
//         if (counters[i][1]) {
//             max = counters[i][0]
//             maxElement = counters[i][0]
//         }
//     } console.log(counters,max,maxElement);
// }


//PETO VEZBANJE

//Prvi zadatak

// function swap(niz) {
//     var min = niz[0];
//     var max = niz[0];
//     var posMin = 0;
//     var posMax = 0;

//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] > max) {
//             max = niz[i]
//             posMax = i
//         }
//         if (niz[i] < max) {
//             min = niz[i]
//             posMin = i
//         }
//     }
//     niz[posMin] = max
//     niz[posMax] = min
//     return niz
// }
// console.log(swap([3, 500, 12, 149, 53, 414, 1, 19]));


//Drugi zadatak

// function doStuff(niz) {
//     var output = []
//     for (let i = 0; i < niz.length; i++) {
//         output[i] = niz[i] / 2 + 5 || 20;
//     }
//     return output
// }
// console.log(doStuff([3,500,-10,149,53,414,1,19]));
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
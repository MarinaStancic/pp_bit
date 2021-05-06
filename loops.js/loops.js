// var a = [3, 5, 6, 7];
// var result = []
//1.  for(var i = 0; i < a.length; i++){
//     a[i] +=1   
// }

//2. for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//         result[result.length] = a[i]
//     }
// }
// console.log(result);


//Prvi zadatak

// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (var i = 0; i < array.length; i++) {
//     var element = array[i]
//     if (element % 2 === 0) {
//         console.log(element + "Even!");
//     } else {
//         console.log(element + "Odd!");
//     }
// }


//Drugi zadatak

// var sum = 0;
//  for (var i = 3; i < 1000; i++) {
//      if (i % 3 === 0 && i % 5 === 0) {
//     sum = sum + i
//      }
//  }
// console.log(sum);


// Treci zadatak

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var sum = 0;
// var product = 1;


// for (var i = 0; i < array.length; i++) {
//   sum = sum + array[i] 
//   product = product * array[i]
// }
// console.log(sum);
// console.log(product);


//Cetvrti zadatak

// var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined]
// var stringFromArray = "";

// for (var i = 0; i < x.length; i++) {
//     var element = x[i]
//     stringFromArray += element
// }
// console.log(stringFromArray);


//Peti zadatak

// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];

// for (var i = 0; i < a.length; i++) {
//     for(var j = 0;j< a[i].length; j++){
//         console.log(a[i][j]);
//     }
// }


//Sesti zadatak


// var sum = 0;

// for (var i = 0; i <= 20; i++) {
//     sum = sum + (i * i)
// }
// console.log(sum);


//Sedmi zadatak

// var grades = [80, 77, 88, 95, 68];

// for (var i = 0; i < grades.length; i++){
//     var element = grades[i]
//     if(element > 90){
//       console.log("A");
//     }else if(element>80){
//         console.log("B");
//     }else if(element>70){
//         console.log("C");
//     }else if(element>60){
//         console.log("D");
//     }else{
//         console.log("F");
//     }
// }

//Osmi zadatak

// for (var i = 1; i < 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
//     }

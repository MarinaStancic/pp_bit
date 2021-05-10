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

function square(size) {
    var star = ""
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++)
            if (i === 1 || i === size || j === 1 || j === size) {
                star += "*"
            } else {
                star += " "
            } star += "\n"
    } return star

}
console.log(square(5));




// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards(gifts) {
    let newArray = [];
     for (let i = 0; i < gifts.length; i++) { 
 newArray.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
debugger;
}
return newArray
}

writeCards(gifts);
let num = 0;
function countDown(num) {
    let countup = 0;
while (countup < 11) {
  console.log(countup++);
}
}
console.log("num")
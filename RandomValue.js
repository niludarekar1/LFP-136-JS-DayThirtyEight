
const prompt = require("prompt-sync")();
var a,b;
// input // Function to generate random number 
function randomNumber1(min,max) { 
    //min = Math.ceil(min);
    //max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
  
// Function call
//a = parseInt(prompt ("Enter 1st noumber: "));
//b = parseInt(prompt ("Enter 2nd noumber: "));
//console.log("Random Number between" +a + "and" +b) ;
console.log( randomNumber1(100,200) ); 
//console.log( randomNumber2() );
//console.log( randomNumber3() );  


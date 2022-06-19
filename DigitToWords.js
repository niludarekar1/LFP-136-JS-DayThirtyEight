const prompt = require("prompt-sync")();
function printValue(digit)
{
 
    // Switch block to check for each digit c
    switch (digit)
    {
 
    // For digit 0
    case 0:
        console.log("Zero ");
        break;
 
    // For digit 1
    case 1:
        console.log("One ");
        break;
 
    // For digit 2
    case 2:
        console.log("Two ");
        break;
 
    // For digit 3
    case 3:
        console.log("Three");
        break;
 
    // For digit 4
    case 4:
        console.log("Four");
        break;
 
    // For digit 5
    case 5:
        console.log("Five");
        break;
 
    // For digit 6
    case 6:
        return console.log("Six ");
        break;
 
    // For digit 7
    case 7:
         console.log("Seven ");
        break;
 
    // For digit 8
    case 8:
        console.log("Eight ");
        break;
 
    // For digit 9
    case 9:
        console.log("Nine ");
        break;
    }
}
a = parseInt(prompt ("Enter number: "));
printValue (a);
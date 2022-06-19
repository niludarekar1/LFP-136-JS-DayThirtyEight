const prompt = require("prompt-sync")();
function printValue(digit)
{
 
    // Switch block to check for each digit c
    switch (digit)
    {
 
    // For digit 0
    
    // For digit 1
    case 1:
        console.log("Sunday");
        break;
 
    // For digit 2
    case 2:
        console.log("Monday");
        break;
 
    // For digit 3
    case 3:
        console.log("Tuesday");
        break;
 
    // For digit 4
    case 4:
        console.log("Wednesday");
        break;
 
    // For digit 5
    case 5:
        console.log("Thursday");
        break;
 
    // For digit 6
    case 6:
        return console.log("Friday");
        break;
 
    // For digit 7
    case 7:
         console.log("Saturday");
        break;
    }
}
a = parseInt(prompt ("Enter number: "));
printValue (a);
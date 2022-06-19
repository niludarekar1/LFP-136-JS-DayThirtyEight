const prompt = require("prompt-sync")();
var num;
num = parseInt(prompt ("Enter number: "));
palindrome(num);
function palindrome(n){
var r,sum=0,temp;
        //It is the number variable to be checked for palindrome

        temp=n;
        while(n>0){
            r=n%10;  //getting remainder
            sum=(sum*10)+r;
            n=n/10;
        }
        if(temp==sum)
         console.log("palindrome number ");
        else
            console.log("not palindrome");
    }
   
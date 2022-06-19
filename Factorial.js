function Factorial(num){
var i,fact=1;
       // var number=5;//It is the number to calculate factorial
        for(i=1;i<=num;i++){
            fact=fact*i;
        }
        return fact;
        }
        console.log("Factorial of : "+(Factorial(5)));
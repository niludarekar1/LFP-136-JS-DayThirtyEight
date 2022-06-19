function coinFlip(){
if (Math.random() < 0.5)
   return console.log("Heads");
else
    return console.log("Tails");
}

console.log( coinFlip() );
const prompt = require("prompt-sync")();
var year;
year = parseInt(prompt ("Enter Year : "));
var leap = false;

        if (year % 4 == 0) {

            if (year % 100 == 0) {

                if (year % 400 == 0)
                    leap = true;
                else
                    leap = false;
            }
               else
                leap = true;
        }

        else
            leap = false;

        if (leap)
            console.log(year + " is a leap year.");
        else
            console.log(year + " is not a leap year.");
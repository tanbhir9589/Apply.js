// iteration method


//for loop using

// let factorial = 1;
// for (var i= 1; i <= 5 ; i++) {
//      factorial = factorial*i;
//      console.log(factorial);
    
// }


// function using


function checkfactorial(n) {
             let factorial =1;
         for (var i = 1; i <= n ; i++) {
               factorial = factorial * i; 
            }
        return factorial;
    
}
var result = checkfactorial(10);
console.log(result);

// while loop using

var i=1;
var fact =1;
while (i <= 5) {
    fact = fact * i;
    i++;
}
console.log(fact);

// while loop function using 


function checkfact(n) {
    var i=1;
    var fact =1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;

}
var result = checkfact(15);
console.log(result);



// recurion method 

function recurionFact(x) {
    
     if ( x === 0) {
         return 1;
     }
     return x * recurionFact(x-1);
}
var checkresult = recurionFact(20);
console.log(checkresult);



    

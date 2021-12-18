    // iterative method 

     var fibo = [0,1];
     for (i=2;i<=10;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];

    }
     console.log(fibo);


// using funtion 
function fiboncc(n) {

         var fibo = [0,1];
        for (i=2;i<=n;i++){
            fibo[i] = fibo[i-1] + fibo[i-2];

        }
        return fibo;
    
}
var result = fiboncc(15);
console.log(result);



// recurcion method 


function finbonicc(x) {
    if (x == 0){
        return 0;
    }
    if (x == 1){
        return 1;
    }
    else
      return finbonicc(x-1) + finbonicc(x-2);
}
var check = finbonicc(5);
console.log(check);


// recursion array fibonicce

function fibonicc(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1){
        return [0, 1];
    }
    else
       var fi = finbonicc( n-1 );
       var newElement = fi[ n-1 ] + fi[ n-2 ];
       fi.push(newElement);
       return fi;
    
}
var check = fibonicc(15);
console.log(check);
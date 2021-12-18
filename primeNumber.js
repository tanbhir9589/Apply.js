function isPrime(n) {
      for(i = 2; i < n; i++){
        if (n % i == 0) {
            return 'not prime';
        }
      }
      return ' prime';
      
    
}
var result = isPrime(79);
console.log(result);
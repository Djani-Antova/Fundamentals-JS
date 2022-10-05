function primeNumberChecker(number) {

    let isPrime = false;

    let i = 2;
    while (number > i) {
        if (number % i !== 0) {
            isPrime = true;
            
           
        } else {
            isPrime = false;
            break;
        }
        i++;
    }
    console.log(isPrime);
}
primeNumberChecker(81)
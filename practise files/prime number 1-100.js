function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let count = 0;
let num = 2;
while (count < 100) {
  if (isPrime(num)) {
    console.log(num);
    count++;
  }
  num++;
}

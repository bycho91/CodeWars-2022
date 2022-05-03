function isPrime(num) {
  for (let i = 2, sq = Math.sqrt(num); i <= sq; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

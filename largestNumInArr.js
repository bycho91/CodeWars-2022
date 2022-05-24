function largestOfFour(arr) {
  let bigs = [];

  arr.forEach((a) => {
    let biggest = a[0];

    for (let i = 1; i <= a.length - 1; i++) {
      biggest = Math.max(biggest, a[i]);
    }
    bigs.push(biggest);
  });
  return bigs;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).*/

function isTriangle(a, b, c) {
  // sum of two shorter sides must be greater than the longest side
  let result1 = a + b > c;
  let result2 = b + c > a;
  let result3 = a + c > b;

  return result1 && result2 && result3;
}

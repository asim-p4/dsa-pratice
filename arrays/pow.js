// 🔢 50. Pow(x, n)
// Difficulty: Medium
// Platform: LeetCode
// Asked in: Oracle, Microsoft, Salesforce, Meta, Citadel, JPMorgan Chase, LinkedIn, Google, Amazon

// 2¹⁰ = (2⁵)²
// 2⁵ = 2 × 2⁴
// 2⁴ = (2²)²
// 2² = (2¹)²
// If n is even: xn=(x^2)n/2
// If n is odd: xn=x⋅x^n−1

// when n is odd:
// if (n % 2 === 1)
//   result *= x;
// Because when n is odd: x5=x.x^4
// So we take one x out and reduce power.
// Then:
// x *= x;
// n = Math.floor(n / 2);

//time O(logn), space O(1)
function pow(x, n) {
  // If exponent is 0, answer is always 1
  if (n === 0) return 1;

  // If exponent is negative,
  // convert it into positive and invert x
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;

  // Loop until n becomes 0
  while (n > 0) {
    // If n is odd
    // multiply result by current x
    if (n % 2 === 1) {
      result *= x;
    }

    // Square the base
    x *= x;

    // Divide exponent by 2 (integer division)
    n = Math.floor(n / 2);
  }

  return result;
}

pow(2, 10);

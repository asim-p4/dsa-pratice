function PiramidPattern() {
  const n = 4;

  for (let i = 0; i < n; i++) {
    for (let k = i; k < n - 1; k++) {
      console.log(" ");
    }
    for (let l = 0; l < i + 1; l++) {
      console.log(l + 1);
    }

    for (let j = n + i; j > n; j--) {
      console.log(j - 4);
    }
  }
  return <div>App</div>;
}

// function diamond() {
//   const n = 4;
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j < n - i; j++) {
//       console.log("o");
//     }
//     console.log("*");
//     if (i > 0) {
//       for (let k = i; k <= 2 * i - 2 + i; k++) {
//         console.log("i");
//       }
//       console.log("*");
//     }
//   }
//   for (let a = 0; a < n - 1; a++) {
//     for (let b = 0; b < a + 1; b++) {
//       console.log("out");
//     }
//     console.log("*");
//     if (a !== n - 2) {
//       for (let c = 0; c < 2 * (n - 2 - a) - 1; c++) {
//         console.log("in");
//       }
//       console.log("*");
//     }
//   }
//   return <div>App</div>;
// }

// function butterfly() {
//   const n = 4;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       console.log("*");
//     }
//     for (let k = n + 2; k > 2 * i; k--) {
//       console.log("p");
//     }
//     for (let l = 0; l <= i; l++) {
//       console.log("*");
//     }
//   }

//   for (let a = 0; a < n; a++) {
//     for (let b = a; b < n; b++) {
//       console.log("*");
//     }

//     for (let c = 0; c < 2 * a; c++) {
//       console.log("p");
//     }

//     for (let e = a; e < n; e++) {
//       console.log("*");
//     }
//   }

//   return <div>App</div>;
// }

// function prime(n) {
//   let a = [];

//   if (n <= 1) return a;

//   for (let k = 2; k <= n; k++) {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(k); i++) {
//       if (k % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       a.push(k);
//     }
//   }
//   return a;
// }

// function nthFibonacciNumber(n) {

//   if (n === 1) return 0;

//   if (n === 2) return 1;
//   console.log("cool");

//   let a = 0,
//     b = 1;
//   for (let i = 3; i <= n; i++) {
//     [a, b] = [b, b + a];
//   }
//   return b;
// }

// function App() {
//   const [value, setValue] = useState(null);
// const parsed = parseInt(value);
//   const fibonacci = nthFibonacciNumber(parsed);

//   return (
//     <>
//       <input
//         type="number"
//         placeholder="enter your number"
//         onChange={(e) => setValue(e.target.value)}
//       />
//       {value && value >= 1 && (
//         <div>
//           {value}th fibonacchi number is {fibonacci}
//         </div>
//       )}
//     </>
//     // <div>
//     //   {fibonacci.map((value, index) => (
//     //     <ul key={index}>
//     //       <li key={index}>{value}</li>
//     //     </ul>
//     //   ))}
//     // </div>
//   );
// }

// function decimalToBinary(num) {
//   let answer = 0;
//   let power = 1;

//   while (num > 0) {
//     let bin = num % 2;
//     num = Math.floor(num / 2);

//     answer += bin * power;
//     power *= 10;
//   }

//   return answer;
// }
// function BinaryToDecimal(num) {
//   let answer = 0;
//   let power = 1;

//   while (num > 0) {
//     let bin = num % 10;
//     answer += bin * power;

//     num = Math.floor(num / 10);
//     power *= 2;
//   }

//   return answer;
// }
// function App() {
//   // const decimalNumber = 10;
//   const binaryNumber = 11000;
//   // const converted = decimalToBinary(decimalNumber);
//   const converted = BinaryToDecimal(binaryNumber);
//   return <div>{converted}</div>;
// }

// function isNumberPowerOfTwo(n) {
//   if (((n - 1) & n )=== 0) return true;
//   return false;
// }

// function reverseNumber(n) {
//   if (n === 0) return 0;
//   let newNumber = 0;
//   let sign = n < 0 ? -1 : 1;
//   n = Math.abs(n);
//   while (n > 0) {
//     let dight = n % 10;
//     n = Math.floor(n / 10);
//     newNumber = newNumber * 10 + dight;
//   }
//   return newNumber * sign;
// }

// function App() {
//   let str1 = [0, 1, 1, 2, 3, 5, 5, 1, 7, 0, 0, 0, 0, 0];
//   let str2 = [0, 1, 1];
//   let final = [];

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j] && !final.includes(str1[i])) final.push(str1[i]);
//     }
//   }
//   console.log(final);

//   return <div></div>;
// }

// function reverseArray(nums) {
//   let maxSubstring = 0;
//   for (let start = 0; start < nums.length; start++) {
//     let sum = 0;
//     for (let end = start; end < nums.length; end++) {
//       sum += nums[end];
//       maxSubstring = Math.max(maxSubstring, sum);
//     }
//   }
//   return maxSubstring;
// }

// function reverseArray(nums) {
//   let maxSum = -Infinity;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     console.log("code");

//     maxSum = Math.max(maxSum, sum);
//     if (sum < 0) sum = 0;
//   }
//   return maxSum;
// }

// function pairSum(nums) {
//   let i = 0;
//   let j = nums.length - 1;
//   let sum = 5;
//   let pair;

//   while (i < j) {
//     if (nums[i] + nums[j] < sum) {
//       i++;
//     }
//     if (nums[i] + nums[j] > sum) {
//       j--;
//     }
//     if (nums[i] + nums[j] == sum) {
//       return (pair = `${i}, ${j} `);
//     }
//   }
//   return pair;
// }

//n(logn) for unsorted
// function majorityValue(nums) {
//   let freq = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) freq++;
//     if (freq > Math.floor(nums.length/2)) return nums[i];
//     if (nums[i] !== nums[i - 1]) freq = 1;
//   }
//   return undefined;
// }

//(n) for unsorted
// function majorityValue(nums) {
//   let freq = 0;
//   let ans = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (freq === 0) {
//       ans = nums[i];
//     }
//     if (ans === nums[i]) {
//       freq++;
//     } else {
//       freq--;
//     }
//   }

//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === ans) {
//       count++;
//     }
//   }
//   if (count > Math.floor(nums.length / 2)) {
//     return ans;
//   } else {
//     return -1;
//   }

// }

//logn
// function powerCalculation(num, power) {
//   if (num === 0) return 0;
//   if (num === 1) return 1;
//   if (num === -1 && power % 2 === 0) return 1;
//   if (num === -1 && power % 2 !== 0) return -1;
//   if (power === 1) return num;
//   if (power === 0) return 1;

//   let binary = Number(power.toString(2));
//   console.log(binary);

//   let ans = 1;
//   if (power < 0) {
//     binary = -binary;
//     num = 1 / num;
//   }

//   while (binary > 0) {
//     if (binary % 2 === 1) ans *= num;
//     num *= num;
//     console.log("step");

//     binary = Math.floor(binary / 10);
//   }
//   return ans;
// }

//(n)
// function buySell(stock) {
//   let bestBuyingDay = stock[0];
//   let profit = 0;
//   for (let i = 1; i < stock.length; i++) {
//     if (stock[i] > bestBuyingDay) {
//       profit = Math.max(profit, stock[i] - bestBuyingDay);
//     }

//     bestBuyingDay = Math.min(bestBuyingDay, stock[i]);
//   }
//   return profit;
// }

//(n^2)
// function maxContainerArea(level) {
//   let maxArea = 0;
//   for (let i = 0; i < level.length - 1; i++) {
//     for (let j = i + 1; j < level.length; j++) {
//       let width = j - i;
//       let height = Math.min(level[i], level[j]);
//       let currentArea = width * height;
//       maxArea = Math.max(maxArea, currentArea);
//     }
//   }
//   return maxArea;
// }

//(n) binary search
// function maxContainerArea(level) {
//   let maxArea = 0;
//   let left = 0;
//   let right = level.length - 1;
//   while (left < right) {
//     let width = right - left;
//     let height = Math.min(level[left], level[right]);
//     let currentArea = width * height;
//     maxArea = Math.max(maxArea, currentArea);
//     level[left] < level[right] ? left++ : right--;
//   }

//   return maxArea;
// }

//(n^2)
// function productArrayWithoutDivision(level) {
//   let array = Array.from({ length: level.length }, () => 1);
//   for (let i = 0; i < level.length; i++) {
//     for (let j = 0; j < level.length; j++) {
//       if (i !== j) array[i] *= level[j];
//     }
//   }

//   return array;
// }

//(n)time (1)space
// function productArrayWithoutDivision(level) {
//   let ans = Array.from({ length: level.length }, () => 1);

//   for (let i = 1; i < level.length; i++) {
//     ans[i] = ans[i - 1] * level[i - 1];
//   }
//   let suffix = 1;
//   for (let i = level.length - 2; i >= 0; i--) {
//     suffix *= level[i + 1];
//     ans[i] *= suffix;
//   }

//   return ans;
// }

//(n)time (n)space
// function productArrayWithoutDivision(level) {
//   let prefix = Array.from({ length: level.length }, () => 1);
//   let suffix = Array.from({ length: level.length }, () => 1);
//   let ans = Array.from({ length: level.length }, () => 1);
//   for (let i = 1; i < level.length; i++) {
//     prefix[i] = prefix[i - 1] * level[i - 1];
//   }
//   for (let i = level.length - 2; i >= 0; i--) {
//     suffix[i] = suffix[i + 1] * level[i + 1];
//   }
//   for (let i = 0; i < level.length; i++) {
//     ans[i] = prefix[i] * suffix[i];
//   }
//   return ans;
// }

//logn
// function targetIndexInSortedArray(level, target) {
//   let start = 0;
//   let end = level.length - 1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (target < level[mid]) {
//       end = mid - 1;
//     } else if (target > level[mid]) {
//       start = mid + 1;
//     } else return mid;
//   }

//   return "nothing";
// }S

//logn
// function targetIndexInRotatedSortedArray(level, target) {
//   let start = 0;
//   let end = level.length - 1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);

//     if (target === level[mid]) return mid;

//     if (level[mid] > level[start]) {
//       console.log("mid is greater");

//       if (level[start] <= target && target <= level[mid]) {
//         console.log("target is in value upper");
//         end = mid - 1;
//       } else {
//         console.log("target is not in value upper");
//         start = mid + 1;
//       }
//     } else {
//       console.log("mid is small");

//       if (level[mid] <= target && target <= level[end]) {
//         console.log("target is in value lower");
//         start = mid + 1;
//       } else {
//         console.log("target is not in value lower");
//         end = mid - 1;
//       }
//     }
//   }
//   return "nothing";
// }

//logn
// function targetValueInMountainArray(level) {
//   let start = 1;
//   let end = level.length - 2;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);

//     if (level[mid - 1] < level[mid] && level[mid] > level[mid + 1]) {
//       return level[mid];
//     }
//     if (level[mid - 1] < level[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// }

//nlogn
// function isValid(level, mid, std) {
//   let students = 1;
//   let pages = 0;
//   for (let i = 0; i < level.length; i++) {
//     if (level[i] > mid) {
//       console.log("big number");
//       return false;
//     }
//     if (pages + level[i] <= mid) {
//       pages += level[i];
//     } else {
//       students++;
//       pages = level[i];
//     }
//   }
//   return students <= std ? true : false;
// }
// function distributionMinOfMax(level, std) {
//   if (std > level.length) return -1;
//   console.log("sleep");
//   let start = 0;

//   let sum = 0;
//   for (let i = 0; i < level.length; i++) {
//     sum += level[i];
//     if (level[i] > start) start = level[i];
//   }
//   let end = sum;
//   let ans = -1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     console.log("awak3e");

//     if (isValid(level, mid, std)) {
//       console.log("valid");

//       ans = mid;
//       end = mid - 1;
//     } else {
//       console.log("invalid");

//       start = mid + 1;
//     }
//   }
//   return ans;
// }

//nlogn
// function isValid(level, mid, aggCow) {
//   let cows = 1;
//   let distance = level[0];

//   for (let i = 1; i < level.length; i++) {
//     if (level[i] - distance >= mid) {
//       cows++;
//       distance = level[i];
//     }
//   }

//   return cows >= aggCow;
// }
// function distributionOfMinOfMaxOfAgressiveCow(level, aggCow) {
//   if (aggCow > level.length) return -1;

//   level.sort((a, b) => a - b);

//   let start = 1;
//   let end = level[level.length - 1] - level[0];
//   let ans = -1;

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);

//     if (isValid(level, mid, aggCow)) {
//       ans = mid;
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return ans;
// }

//(n^2)
// function bubbleSort(level) {
//   let isSwaped = false;
//   for (let i = 0; i < level.length - 1; i++) {
//     for (let j = 0; j < level.length - i - 1; j++) {
//       if (level[j] > level[j + 1]) {
//         let tem = level[j];
//         level[j] = level[j + 1];
//         level[j + 1] = tem;
//         isSwaped = true;
//       }
//       if (!isSwaped) return level;
//     }
//   }

//   return level;
// }

//(n^2)
// function selectionSort(level) {
//   for (let i = 0; i < level.length; i++) {
//     let smallest = i;

//     for (let j = i + 1; j < level.length; j++) {
//       if (level[j] < level[smallest]) smallest = j;
//     }

//     if (smallest !== i) {
//       [level[smallest], level[i]] = [level[i], level[smallest]];
//     }
//   }
//   return level;
// }

//(n^2)
// function insertionSort(level) {
//   for (let i = 1; i < level.length; i++) {
//     let start = level[i];
//     let prev = i - 1;
//     while (prev >= 0 && start < level[prev]) {
//       level[prev + 1] = level[prev];
//       prev--;
//     }
//     level[prev + 1] = start;
//   }
//   return level;
// }

// [2, 1, 0, 2, 1, 0, 2, 2, 0, 1, 0, 1, 0, 0]
//(n)
// function sort(level) {
//   let low = 0;
//   let mid = 0;
//   let high = level.length - 1;

//   while (low <= high) {
//     if (level[mid] === 0) {
//       [level[mid], level[low]] = [level[low], level[mid]];
//       low++;
//       mid++;
//     } else if (level[mid] === 1) {
//       mid++;
//     } else {
//       [level[mid], level[high]] = [level[high], level[mid]];
//       high--;
//     }
//   }

//   return level;
// }

//   const level = [1, 3, 5, 0, 0, 0];
//   const n = 3;
//   const level2 = [2, 4, 6];
//   const m = 3;
//(n)
// function mergeSort(level, level2, n, m) {
//   let i = n - 1;
//   let j = m - 1;
//   let index = n + m - 1;

//   while (i >= 0 && j >= 0) {
//     if (level[i] > level2[j]) {
//       level[index--] = level[i--];
//     } else {
//       level[index--] = level2[j--];
//     }
//   }

//   while (j >= 0) {
//     level[index--] = level2[j--];
//   }

//   return level;
// }

//(n)
// function sort(level) {
//   let pivot = -1;
//   for (let i = level.length - 2; i >= 0; i--) {
//     if (level[i] < level[i + 1]) {
//       pivot = i;
//       break;
//     }
//   }

//   if (pivot === -1) return level.sort((a, b) => a - b);

//   for (let i = level.length - 1; i > pivot; i--) {
//     if (level[i] > level[pivot]) {
//       [level[i], level[pivot]] = [level[pivot], level[i]];
//       break;
//     }
//   }

//   let i = pivot + 1;
//   let j = level.length - 1;
//   while (i <= j) {
//     [level[i], level[j]] = [level[j], level[i]];
//     i++;
//     j--;
//   }
//   return level;
// }

// function App() {
//   let s = "abc";
//   let s2 = "cba";
//   let matching = true;

//   const freq = Array.from({ length: 26 }, () => 0);
//   let match = Array.from({ length: 26 }, () => 0);

//   for (let i = 0; i < s.length; i++) {
//     freq[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
//   }

//   for (let j = 0; j <= s2.length - s.length; j++) {
//     match.fill(0);
//     matching = true;

//     let a = j;
//     let b = j + s.length;

//     while (a < b) {
//       match[s2[a].charCodeAt(0) - "a".charCodeAt(0)]++;
//       a++;
//     }

//     for (let i = 0; i < freq.length; i++) {
//       if (freq[i] !== match[i]) {
//         matching = false;
//         break;
//       }
//     }

//     if (matching) return "match";
//   }

//   return "no match";
// }

//  const str = "   as for     the             ";
//time&space(n)
// function reverse(str) {
//   let newStr = str.split("").reverse().join("").trim() + " ";

//   let ans = " ";
//   let i = 0;
//   let word = "";
//   while (i < newStr.length) {
//     if (newStr[i] !== " ") {
//       word += newStr[i];
//       i++;
//     } else {
//       ans += " " + word.split("").reverse().join("");
//       word = "";
//       i++;
//     }
//   }

//   return ans.trim().toString();

//   //  return str.trim().split(/\s+/).reverse().join(" ");
// }

// const ary = ["a", "a", "b", "b", "c", "c", "c", "c", "c"];
// time(n) & space(1)
// function stringCompression(str) {
//   let index = 0;
//   let count = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       if (count === 1) {
//         str[index++] = str[i];
//       } else {
//         str[index++] = str[i - 1];
//         let inStr = count.toString();
//         for (let j = 0; j < inStr.length; j++) {
//           str[index++] = inStr[j];
//           count = 1
//         }
//       }
//     }
//   }
//   console.log(index);
//   return str.slice(0,index).length
// }

//time(n√n) space(1)
// function countPrimeNumberInRange(str) {
//   let count = 0;
//   for (let i = 2; i < str; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       count++;
//     }
//   }
//   return count;
// }

//time(nlog(logn)) space(n)
// function countPrimeNumberInRange(num) {
//   let ary = Array.from({ length: num}, () => true);
//   let count = 0;

//   for (let i = 2; i < num; i++) {
//     if (ary[i]) {
//       count++;
//       for (let j = i * 2; j < num; j = j + i) {
//         ary[j] = false;
//       }
//     }
//   }
//   return count;
// }

//time(n) space(1)
//   const grid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// function dignalSum(dp, n) {
//   let dignalSum = 0;
//   for (let i = 0; i < n; i++) {
//     dignalSum += dp[i][i];
//     if (i !== n - 1 - i) {
//       dignalSum += dp[i][n - 1 - i];
//     }
//   }

//   return dignalSum;
// }

//time(log(n*m))
// function findTarget(dp, n, m, target) {
//   let start = 0;
//   let end = n - 1;

//   while (start <= end) {
//     let mid = end + (start - end) / 2;

//     if (dp[mid][0] <= target && target <= dp[mid][n - 1]) {
//       let begin = 0;
//       let far = m - 1;

//       while (begin <= far) {
//         let half = far + (begin - far) / 2;

//         if (dp[mid][half] === target) {
//           return ` (row ${mid + 1}, col ${half + 1})`;
//         } else if (target > dp[mid][half]) {
//           begin = half + 1;
//         } else {
//           far = half - 1;
//         }
//       }

//     } else if (target > dp[mid][n - 1]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return "not found";
// }

//time(n+m)
// function findTarget(dp, n, m, target) {
//   let start = n - 1;
//   let end = 0;

//   while (end < n && start >= 0) {
//     if (target === dp[start][end]) {
//       return `(${start}, ${end})`;
//     } else if (target < dp[start][end]) {
//       console.log("dec");

//       start--;
//     } else {
//       console.log("inc");

//       end++;
//     }
//   }

//   return "no match";
// }

//time(n) & space(n)
// function findMissingAndRpeating(array) {
//   const n = array.length;
//   let seen = new Map();
//   let arry = [];
//   let actualSum = 0;
//   const theoreticalSum = (n * (n  + 1)) / 2;

//   for (let i = 0; i < array.length; i++) {
//     let first = array[i];
//     actualSum += first;

//     if (seen.has(first)) {
//       arry.push(first);
//     } else {
//       seen.set(first, i);
//     }
//   }

//   const missingDigit = theoreticalSum - actualSum + arry[0];
//   arry.push(missingDigit);

//   return arry;
// }

//time(n) & space(1)
// function findMultipleAppearingFromOneTonN(array) {
//   let slow = array[0]
//   let fast = array[0];

//   do {
//     slow = array[slow];
//     fast = array[array[fast]];
//   } while (slow !== fast);

//   slow = array[0];

//   while (slow !== fast) {
//     slow = array[slow];
//     fast = array[fast];
//   }

//   return slow;
// }

//time(n^2) space(n^2)
// function threeSumEqualZero(array) {
//   let ans = new Set();

//   for (let i = 0; i < array.length - 2; i++) {
//     let target = -array[i];
//     let save = new Set();
//     for (let j = i + 1; j < array.length - 1; j++) {
//       let third = target - array[j];

//       if (save.has(third)) {
//         let res = [array[i], array[j], third].sort((a, b) => a - b);
//         console.log(res);

//         let string = res.join(",");
//         ans.add(string);
//       }
//       save.add(array[j]);
//     }
//   }

//   return [...ans].map((str) => str.split(",").map(Number));
// }

//time(n^2) space(n)
// function threeSumEqualZero(array) {
//   array.sort((a, b) => a - b);
//   let ans = new Set();

//   for (let i = 0; i < array.length - 2; i++) {
//     if (i > 0 && array[i] === array[i - 1]) continue;
//     let j = i + 1;
//     let k = array.length - 1;

//     while (j < k) {
//       let sum = array[i] + array[j] + array[k];

//       if (sum < 0) {
//         j++;
//       } else if (sum > 0) {
//         k--;
//       } else {
//         ans.add([array[i], array[j], array[k]]);
//         j++;
//         k--;

//         while (j < k && array[j] === array[j - 1]) {
//           j++;
//         }
//         while (j < k && array[k] === array[k + 1]) {
//           k--;
//         }
//       }
//     }
//   }

//   return ans;
// }

//time(n^3+nlogn) space(n)
// function fourSumEqualZero(array) {
//   array.sort((a, b) => a - b);
//   let ans = new Set();

//   for (let a = 0; a < array.length; a++) {
//     if (a > 0 && array[a] === array[a - 1]) continue;

//     for (let i = a + 1; i < array.length; ) {
//       let j = i + 1;
//       let k = array.length - 1;

//       while (j < k) {
//         let sum = array[a] + array[i] + array[j] + array[k];

//         if (sum < 0) {
//           j++;
//         } else if (sum > 0) {
//           k--;
//         } else {
//           ans.add([array[a], array[i], array[j], array[k]]);
//           j++;
//           k--;

//           while (j < k && array[j] === array[j - 1]) j++;
//           while (k > j && array[k] === array[k + 1]) k--;
//         }
//       }
//       i++;
//       while (i < array.length && array[i] === array[i - 1]) i++;
//     }
//   }

//   return ans;
// }

//time(n) space(n) optmized
// function targetedSubarraySum(ary, target) {
//   let count = 0;
//   let sum = 0;
//   let map = new Map();
//   map.set(0, 1);

//   for (const nums of ary) {
//     sum += nums;
//     let value = sum - target;

//     if (map.has(value)) {
//       count += map.get(value);
//     }

//     map.set(sum, (map.get(sum) || 0) + 1);
//   }

//   return count;
// }

//time(logn) space(logn) recursion
// function sorted(ary, start, n, target) {
//   if (start <= n) {
//     let mid = Math.floor(start + (n - start) / 2);

//     if (ary[mid] === target) {
//       return mid;
//     } else if (ary[mid] < target) {
//       return sorted(ary, mid + 1, n, target);
//     } else {
//       return sorted(ary, start, mid - 1, target);
//     }
//   }

//   return -1;
// }

//time(2^n*n) space(2^n) recursion
// function subSets(ary, subSets, i, res) {
//   if (i === ary.length) {
//     res.push([...subSets]);
//     return;
//   }
//   subSets.push(ary[i]);
//   sorted(ary, subSets, i + 1, res);

//   subSets.pop();
//   while(ary[i] === ary[i + 1]) i++;
//   sorted(ary, subSets, i + 1, res);
// }

//time(n!*n) space(n!) recursion
// function findPermutations(arry, idx, ans) {
//   if (idx === arry.length) {
//     ans.push(arry);
//     return;
//   }
//   for (let i = idx; i < arry.length; i++) {
//     [arry[i], arry[idx]] = [arry[idx], arry[i]];
//     findPermutations(arry, idx + 1, ans);
//     [arry[i], arry[idx]] = [arry[idx], arry[i]];
//   }
// }

// function isSafe(ary, row, col, n) {
//   for (let j = 0; j < n; j++) {
//     if (ary[row][j] === "Q") return false;
//   }
//   for (let i = 0; i < n; i++) {
//     if (ary[i][col] === "Q") return false;
//   }
//   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//     if (ary[i][j] === "Q") return false;
//   }
//   for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
//     if (ary[i][j] === "Q") return false;
//   }
//   return true;
// }
//time(n!*n) space(n*ans.length)
// function nQueens(ary, row, n, ans) {
//   if (row === n) {
//     ans.push(ary.map((r) => [...r]));
//     return;
//   }
//   for (let j = 0; j < n; j++) {
//     if (isSafe(ary, row, j, n)) {
//       ary[row][j] = "Q";
//       nQueens(ary, row + 1, n, ans);
//       ary[row][j] = ".";
//     }
//   }
// }

// function isSafe(ary, rows, col, n) {
//   const moves = [
//     [-2, 1],
//     [2, 1],
//     [-1, 2],
//     [1, 2],
//     [-2, -1],
//     [2, -1],
//     [-1, -2],
//     [1, -2],
//   ];

//   for (const [r, c] of moves) {
//     const newRow = rows + r;
//     const newCol = col + c;

//     if (
//       newRow >= 0 &&
//       newRow < n &&
//       newCol >= 0 &&
//       newCol < n &&
//       ary[newRow][newCol] === "K"
//     )
//       return false;
//   }

//   return true;
// }
//timeO(C(n², k) × k)  spaceO(C(n², k) × k)
// function nKnights(ary, k, n, index, count, ans) {
//   if (count === k) {
//     ans.push(ary.map((a) => [...a]));
//     return;
//   }

//   if (index >= n * n) return;

//   const row = Math.floor(index / n);
//   const col = index % n;

//   if (isSafe(ary, row, col, n)) {
//     ary[row][col] = "K";
//     nKnights(ary, k, n, index + 1, count + 1, ans);
//     ary[row][col] = ".";
//   }

//   nKnights(ary, k, n, index + 1, count, ans);
// }

function isSafe(ary, row, col, dig) {
  for (let j = 0; j < ary.length; j++) {
    if (ary[row][j] == dig) return false;
  }
  for (let i = 0; i < ary.length; i++) {
    if (ary[i][col] == dig) return false;
  }

  row = Math.floor(row / 3) * 3;
  col = Math.floor(col / 3) * 3;

  for (let i = row; i <= row + 2; i++) {
    for (let j = col; j <= col + 2; j++) {
      if (ary[i][j] == dig) return false;
    }
  }
  return true;
}
//time(9^emptyspaces) space(1)
// function skudo(ary, row, col) {
//   if (row === ary.length) {
//     return true;
//   }
//   if (col === ary.length) {
//     return skudo(ary, row + 1, 0);
//   }
//   if (ary[row][col] !== ".") {
//     return skudo(ary, row, col + 1);
//   }
//   for (let dig = "1"; dig < "10"; dig++) {
//     if (isSafe(ary, row, col, dig)) {
//       ary[row][col] = `${dig}`;
//       if (skudo(ary, row, col + 1)) {
//         return true;
//       }
//       ary[row][col] = ".";
//     }
//   }
//   return false;
// }

// const ary = [
//   [1, 0, 0, 0],
//   [1, 1, 0, 0],
//   [1, 1, 0, 0],
//   [0, 1, 1, 1],
// ];
//timeO(4^(N^2)) spaceO(N^2 + K * N)
// function maze(ary, row, col, path, ans) {
//   if (row === ary.length - 1 && col === ary.length - 1) {
//     ans.push(path);
//   }

//   if (
//     row < 0 ||
//     col < 0 ||
//     row >= ary.length ||
//     col >= ary.length ||
//     ary[row][col] === -1 ||
//     ary[row][col] === 0
//   )
//     return;

//   ary[row][col] = -1;

//   maze(ary, row + 1, col, path + "D", ans);
//   maze(ary, row - 1, col, path + "U", ans);
//   maze(ary, row, col + 1, path + "R", ans);
//   maze(ary, row, col - 1, path + "L", ans);

//   ary[row][col] = 1;
// }

//timeO(2^(Target/min value in arry)) space	O(2^Target × Target)
// function combinationSum(ary, idx, target, com, ans) {
//   if (target === 0) {
//     ans.push([...com]);
//     return;
//   }
//   if (idx === ary.length || target < 0) return;

//   com.push(ary[idx]);
//   combinationSum(ary, idx, target - ary[idx], com, ans);

//   com.pop();
//   combinationSum(ary, idx + 1, target, com, ans);
// }

// function merge(ary, start, mid, end) {
//   let i = start;
//   let j = mid + 1;
//   const temp = [];
//   while (i <= mid && j <= end) {
//     if (ary[i] < ary[j]) {
//       temp.push(ary[i]);
//       i++;
//     } else {
//       temp.push(ary[j]);
//       j++;
//     }
//   }

//   while (i <= mid) {
//     temp.push(ary[i]);
//     i++;
//   }
//   while (j <= end) {
//     temp.push(ary[j]);
//     j++;
//   }

//   for (let idx = 0; idx < temp.length; idx++) {
//     ary[idx + start] = temp[idx];
//   }
// }
//timeO(nlogn) spaceO(n)
// function mergeSort(ary, start, end) {
//   if (start < end) {
//     const mid = Math.floor(end + (start - end) / 2);
//     mergeSort(ary, start, mid);
//     mergeSort(ary, mid + 1, end);

//     merge(ary, start, mid, end);
// }
// }

// function partition(ary, start, end) {
//   let i = start;
//   const pivot = ary[end];
//   for (let j = start; j < end; j++) {
//     if (ary[j] <= pivot) {
//       [ary[i], ary[j]] = [ary[j], ary[i]];
//       i++;
//     }
//   }
//   [ary[i], ary[end]] = [ary[end], ary[i]];

//   return i;
// }
//timeO(nlogn || n^2 when pivot is smallest or largest) spaceO(n)
// function quickSort(ary, start, end) {
//   if (start < end) {
//     const pivot = partition(ary, start, end);
//     quickSort(ary, start, pivot - 1);
//     quickSort(ary, pivot + 1, end);
// }
//   }

// function countSort(ary, start, mid, end) {
//   let i = start;
//   let j = mid + 1;
//   const temp = [];
//   let count = 0;

//   while (i <= mid && j <= end) {
//     if (ary[i] <= ary[j]) {
//       temp.push(ary[i]);
//       i++;
//     } else {
//       temp.push(ary[j]);
//       j++;
//       count += mid - i + 1;
//     }
//   }
//   while (i <= mid) {
//     temp.push(ary[i]);
//     i++;
//   }
//   while (j <= end) {
//     temp.push(ary[j]);
//     j++;
//   }

//   for (let idx = 0; idx < temp.length; idx++) {
//     ary[idx + start] = temp[idx];
//   }

//   return count;
// }
//timeO(nlogn) spaceO(n)
// function countInversion(ary, start, end) {
//   if (start < end) {
//     const mid = Math.floor(end + (start - end) / 2);
//     const leftCount = countInversion(ary, start, mid);
//     const rightCount = countInversion(ary, mid + 1, end);

//     const count = countSort(ary, start, mid, end);

//     return leftCount + rightCount + count;
//   }

//   return 0;
// }

//   const grid = [
//     [0 , 11, 16,  5, 20],
//     [17,  4, 19, 10, 15],
//     [12,  1,  8, 21,  6],
//     [ 3, 18, 23, 14,  9],
//     [24, 13,  2,  7, 22],
//   ];
//timeO(8^n^2) spaceO(n^2)
// function knightTour(ary, row, col, value) {
//   if (
//     row < 0 ||
//     col < 0 ||
//     row >= ary.length ||
//     col >= ary.length ||
//     ary[row][col] !== value
//   ) {
//     return false;
//   }
//   if (value === (ary.length * ary.length) - 1) return true;

//   const ans1 = knightTour(ary, row - 2, col + 1, value + 1);
//   const ans2 = knightTour(ary, row + 2, col + 1, value + 1);
//   const ans3 = knightTour(ary, row - 1, col + 2, value + 1);
//   const ans4 = knightTour(ary, row + 1, col + 2, value + 1);
//   const ans5 = knightTour(ary, row - 2, col - 1, value + 1);
//   const ans6 = knightTour(ary, row + 2, col - 1, value + 1);
//   const ans7 = knightTour(ary, row - 1, col - 2, value + 1);
//   const ans8 = knightTour(ary, row + 1, col - 2, value + 1);

//   return ans1 || ans2 || ans3 || ans4 || ans5 || ans6 || ans7 || ans8;
// }

// function reverseNode(node) {
//   let prev = null;
//   let current = node;
//   let next;
//   while (current !== null) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// }

// function merge(node1, nodeA) {
//   if (node1 === null || nodeA === null) return node1 === null ? nodeA : node1;

//   if (node1.data <= nodeA.data) {
//     node1.next = merge(node1.next, nodeA);
//     return node1;
//   } else {
//     nodeA.next = merge(node1, nodeA.next);
//     return nodeA;
//   }
// }

// function copyLinkedList(head) {
//   if (head === null) return null;
//   const newHead = new Node(head.data);
//   let oldTemp = head.next;
//   let newTemp = newHead;
//   const m = new Map();
//   m.set(head, newTemp);

//   while (oldTemp !== null) {
//     let copyNode = new Node(oldTemp.data);
//     m.set(oldTemp, copyNode);
//     newTemp.next = copyNode;

//     oldTemp = oldTemp.next;
//     newTemp = copyNode;
//   }

//   oldTemp = head;
//   newTemp = newHead;
//   while (oldTemp !== null) {
//     newTemp.random = m.get(oldTemp.random) ? m.get(oldTemp.random) : null;

//     oldTemp = oldTemp.next;
//     newTemp = newTemp.next;
//   }

//   //here im changing my copied node to check if changing original makes my copy change
//   oldTemp = head;
//   while (oldTemp !== null) {
//     oldTemp.random = 99;
//     oldTemp = oldTemp.next;
//   }

//   return newHead;
// }

//flatened multilinkedlist
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//     this.child = null;
//   }
// }
// class multiLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.child = null;
//   }

//   append(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = this.tail = newNode;
//     } else {
//       newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   findNode(node, parentData) {
//     while (node) {
//       if (node.data === parentData) {
//         return node;
//       }
//       if (node.child) {
//         const found = this.findNode(node.child, parentData);
//         if (found) return found;
//       }
//       node = node.next;
//     }
//     return null;
//   }

//   addChild(parentData, childData) {
//     const parent = this.findNode(this.head, parentData);
//     if (!parent) return console.log(`Parent node ${parentData} not found.`);

//     const newNode = new Node(childData);

//     if (!parent.child) {
//       parent.child = newNode;
//     } else {
//       let current = parent.child;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//       newNode.prev = current;
//     }
//   }

//   printForward() {
//     let current = this.head;
//     while (current) {
//       console.log(current);
//       current = current.next;
//     }
//   }
//   flatenMultiLinkedList(head) {
//     let cur = head;
//     while (cur) {
//       if (cur.child) {
//         let next = cur.next;
//         cur.next = this.flatenMultiLinkedList(cur.child);
//         cur.next.prev = cur;
//         cur.child = null;
//         while (cur.next) {
//           cur = cur.next;
//         }
//         if (next) {
//           cur.next = next;
//           next.prev = cur;
//         }
//       }

//       cur = cur.next;
//     }

//     return head;
//   }
// }
// function App() {
//   const list = new multiLinkedList();
//   list.append(1);
//   list.append(2);
//   list.append(3);
//   list.append(4);
//   list.append(5);

//   list.addChild(3, 6);
//   list.addChild(3, 7);
//   list.addChild(3, 8);

//   list.addChild(7, 9);
//   list.addChild(7, 10);

//   list.flatenMultiLinkedList(list.head);
//   list.printForward();
//   return <div>App</div>;
// }

//reverse K nodes in single linked list
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class reverseNodes_LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   reverseK_Nodes(k, head) {
//     let temp = head;
//     let count = 0;
//     while (count < k) {
//       if (temp === null) return head;
//       temp = temp.next;
//       count++;
//     }

//     let newHead = this.reverseK_Nodes(k, temp);
//     temp = head;
//     count = 0;
//     while (count < k) {
//       let next = temp.next;
//       temp.next = newHead;
//       newHead = temp;
//       temp = next;
//       count++;
//     }

//     return newHead;
//   }

//   printForward(head) {
//     let current = head;
//     while (current) {
//       console.log(current);
//       current = current.next;
//     }
//   }
// }
// function App() {
//   const list = new reverseNodes_LinkedList();
//   list.append(1);
//   list.append(2);
//   list.append(3);
//   list.append(4);
//   list.append(5);

//   const head = list.reverseK_Nodes(4, list.head);
//   list.printForward(head);
//   return <div>App</div>;
// }

//reverse linked list in pairs
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class reverseNodes_LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   reverseNodePairs() {
//     if (this.head === null || this.head.next === null) return this.head;
//     let prev = null;
//     let first = this.head;
//     let second = first.next;

//     while (first && second) {
//       let third = second.next;
//       first.next = third;
//       second.next = first;
//       if (prev) {
//         prev.next = second;
//       } else {
//         this.head = second;
//       }

//       prev = first;
//       first = third;
//       if (third) {
//         second = third.next;
//       } else {
//         second = null;
//       }
//     }
//   }

//   printForward() {
//     let current = this.head;
//     while (current) {
//       console.log(current);
//       current = current.next;
//     }
//   }
// }
// function App() {
//   const list = new reverseNodes_LinkedList();
//   list.append(1);
//   list.append(2);
//   list.append(3);
//   list.append(4);
//   list.append(5);

//   list.reverseNodePairs(list.head);
//   list.printForward();
//   return <div>App</div>;
// }

//find if bracekts are in correct opening and closing order
// const string = "{()[]}";
// function solution(string) {
//   if (string.length === 0) return false;

//   const ary = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
//       ary.push(string[i]);
//     } else {
//       if (ary.length === 0) {
//         return false;
//       }
//       if (
//         (string[i] === ")" && ary[ary.length - 1] === "(") ||
//         (string[i] === "}" && ary[ary.length - 1] === "{") ||
//         (string[i] === "]" && ary[ary.length - 1] === "[")
//       ) {
//         ary.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return ary.length === 0;
// }

//find number of previous stock which are either less or equal including current stock
//timeO(n) spaceO(n)
//   const ary = [100, 80, 60, 70, 60, 75, 85];
// function stackSpan(stocks) {
//   const stack = [];
//   const ans = [];
//   for (let i = 0; i < stocks.length; i++) {
//     while (stack.length > 0 && stocks[stack[stack.length - 1]] <= stocks[i]) {
//       stack.pop();
//     }

//     if (ans.length === 0) {
//       ans.push(i + 1);
//     } else {
//       ans.push(i - stack[stack.length - 1]);
//     }
//     stack.push(i);
//   }

//   return ans;
// }

//timeO(n) spaceO(n)
//find next imdediate greater value
// function nextImediateBiger(value) {
//   const stack = [];
//   const ans = [];
//   for (let i = value.length - 1; i >= 0; i--) {
//     while (stack.length > 0 && stack[stack.length - 1] <= value[i]) {
//       stack.pop();
//     }
//     if (stack.length === 0) {
//       ans.unshift(-1);
//     } else {
//       ans.unshift(stack[stack.length - 1]);
//     }
//     stack.push(value[i]);
//   }

//   return ans;
// }

//timeO(n) spaceO(n^2)
//find next imediate greater of subset but according to values in set
// function nextImediateBiger(set, subSet) {
//   const stack = [];
//   const setAns = new Map();
//   const subsetAns = [];
//   for (let i = set.length - 1; i >= 0; i--) {
//     while (stack.length > 0 && stack[stack.length - 1] <= set[i]) {
//       stack.pop();
//     }
//     if (stack.length === 0) {
//       setAns.set(set[i], -1);
//     } else {
//       setAns.set(set[i], stack[stack.length - 1]);
//     }
//     stack.push(set[i]);
//   }

//   for (let i = 0; i < subSet.length; i++) {
//     subsetAns.push(setAns.get(subSet[i]));
//   }

//   return { setAns, subsetAns };
// }
// function App() {
//   const ary = [1, 3, 4, 2];
//   const ary2 = [4, 1, 2];

//   const { setAns, subsetAns } = nextImediateBiger(ary, ary2);
//   console.log(setAns);
//   console.log(subsetAns);

//   return <div>App</div>;
// }

//timeO(1) spaceO(2n)
// class MinStack {
//   aryy = [];
//   push(data) {
//     if (this.aryy.length === 0) {
//       this.aryy.push([data, data]);
//     } else {
//       let min = Math.min(data, this.aryy[this.aryy.length - 1][1]);
//       this.aryy.push([data, min]);
//     }
//   }
//   erase() {
//     this.aryy.pop();
//   }
//   top() {
//     return this.aryy[this.aryy.length-1][0];
//   }
//   getMin() {
//     return this.aryy[this.aryy.length-1][1];
//   }
// }

//timeO(1) spaceO(n)
// class MinStack {
//   min;
//   ary = [];

//   push(data) {
//     if (this.ary.length === 0) {
//       this.ary.push(data);
//       return (this.min = data);
//     }
//     if (data < this.min) {
//       this.ary.push(2 * data - this.min);
//       this.min =data
//     } else {
//       this.ary.push(data);
//     }
//   }

//   erase() {
//     if (this.ary[this.ary.length - 1] < this.min) {
//       this.min = 2 * this.min - this.ary[this.ary.length - 1];
//     }
//     this.ary.pop();
//   }

//   top() {
//     if (this.ary[this.ary.length - 1] < this.min) {
//       return this.min;
//     } else {
//       return this.ary[this.ary.length - 1];
//     }
//   }

//   getMin() {
//     return this.min;
//   }
// }

//timeO(n^2) spaceO(n^2) LEETCODE#84
// function largestRectangle(combinations) {
//   const areas = [];
//   for (let i = 0; i < combinations.length; i++) {
//     for (let j = i; i < combinations.length; j++) {
//       if (combinations[j] >= combinations[i]) {
//         areas.push(combinations[i] * (j - i + 1));
//       } else {
//         break;
//       }
//     }
//   }

//   return Math.max(...areas);
// }

//timeO(n) spaceO(n) LEETCODE#84
// function largestRectangle(combinations) {
//   const LeftMinIndexs = [];
//   let stack = [];
//   for (let i = 0; i < combinations.length; i++) {
//     while (
//       stack.length > 0 &&
//       combinations[stack[stack.length - 1]] >= combinations[i]
//     ) {
//       stack.pop();
//     }

//     LeftMinIndexs.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
//     stack.push(i);
//   }

//   const rightMinIndexs = [];
//   stack = [];
//   for (let i = combinations.length - 1; i >= 0; i--) {
//     while (
//       stack.length > 0 &&
//       combinations[stack[stack.length - 1]] >= combinations[i]
//     ) {
//       stack.pop();
//     }
//     rightMinIndexs.unshift(
//       stack.length === 0 ? combinations.length : stack[stack.length - 1]
//     );
//     stack.push(i);
//   }

//   let maxArea = -Infinity;
//   for (let i = 0; i < combinations.length; i++) {
//     let curArea = combinations[i] * (rightMinIndexs[i] - LeftMinIndexs[i] - 1);
//     maxArea = Math.max(curArea, maxArea);
//   }

//   return maxArea;
// }

//timeO(n) spaceO(n)
// function nextGreaterCircularArray(circle, n) {
//   const ans = Array.from({ length: n }, () => -1);
//   const stack = [];
//   for (let i = 2 * n - 1; i >= 0; i--) {
//     let idx = i % n;
//     while (stack.length > 0 && stack[stack.length - 1] <= circle[idx]) {
//       stack.pop();
//     }
//     if (i < 5) {
//       ans[idx] = stack.length === 0 ? -1 : stack[stack.length - 1];
//     }
//     stack.push(circle[idx]);
//   }

//   return ans;
// }

//timeO(n^3) spaceO(1)
// function waterTrapped(holes) {
//   if (holes.length < 3) return;
//   let n = holes.length;
//   let maxWater = 0;
//   let left = 0;
//   let right = 0;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       let minHeight = Math.min(holes[i], holes[j]);
//       let water = 0;

//       // calculate water trapped between i and j only
//       for (let k = i + 1; k < j; k++) {
//         if (holes[k] >= minHeight) {
//           break;
//         } else {
//           water += Math.max(0, minHeight - holes[k]);
//         }
//       }

//       if (water > maxWater) {
//         maxWater = water;
//         left = i;
//         right = j;
//       }
//     }
//   }

//   return maxWater;
// }

//timeO(n^2) spaceO(1) LEETCODE#42
// function waterTrapped(height) {
//   let n = height.length;
//   let totalWater = 0;

//   for (let i = 0; i < n; i++) {
//     let maxLeft = 0;
//     let maxRight = 0;

//     // Find the tallest bar on the left of i
//     for (let j = 0; j <= i; j++) {
//       maxLeft = Math.max(maxLeft, height[j]);
//     }

//     // Find the tallest bar on the right of i
//     for (let j = i; j < n; j++) {
//       maxRight = Math.max(maxRight, height[j]);
//     }

//     // Water trapped at position i
//     let waterAtI = Math.min(maxLeft, maxRight) - height[i];
//     totalWater += waterAtI;
//   }

//   return totalWater;
// }

//timeO(n) spaceO(n) LEETCODE#42
// function waterTrapped(holes) {
//   const left = [holes[0]];
//   const right = [holes[holes.length - 1]];

//   for (let i = 1; i < holes.length; i++) {
//     left.push(Math.max(left[i - 1], holes[i]));
//   }

//   for (let i = holes.length - 2; i >= 0; i--) {
//     right.unshift(Math.max(right[0], holes[i]));
//   }
//   let ans = 0;
//   for (let i = 0; i < holes.length; i++) {
//     ans += Math.min(left[i], right[i]) - holes[i];
//   }

//   return ans;
// }

//timeO(n) spaceO(1) LEETCODE#42
// function waterTrapped(holes) {
//   let left = 0;
//   let right = holes.length - 1;

//   let ans = 0;

//   let leftMax = 0;
//   let rightMax = 0;

//   while (left < right) {
//     leftMax = Math.max(leftMax, holes[left]);
//     rightMax = Math.max(rightMax, holes[right]);

//     if (leftMax < rightMax) {
//       ans += leftMax - holes[left];
//       left++;
//     } else {
//       ans += rightMax - holes[right];
//       right--;
//     }
//   }

//   return ans;
// }

// time O(n+k) space O(n) L.C=239 S.K(A.C)=81
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }
// function slidingWindowMax(ary, k) {
//   let tail = null;
//   let head = null;
//   const answers = [];

//   for (let i = 0; i < ary.length; i++) {
//     let newNode = new Node(i);
//     while (tail && ary[tail.data] < ary[i]) {
//       tail = tail.prev;
//       if (tail) tail.next = null;
//       else head = null;
//     }

//     if (head && head.data <= i - k) {
//       head = head.next;

//       if (head) head.prev = null;
//     }

//     if (!head) {
//       head = tail = newNode;
//     } else {
//       tail.next = newNode;
//       newNode.prev = tail;
//       tail = newNode;
//     }

//     if (i >= k - 1) {
//       answers.push(ary[head.data]);
//     }
//   }
//   return answers;
// }

// time O(n) space O(1) L.C=134 S.K(A.C)=82
// function traveling(s, c) {
//   if (s.reduce((a, b) => a + b) < c.reduce((a, b) => a + b)) return -1;

//   let curGas = 0;
//   let idx = 0;
//   for (let i = 0; i < s.length; i++) {
//     curGas += s[i] - c[i];
//     if (curGas < 0) {
//       curGas = 0;
//       idx = i + 1;
//     }
//   }

//   return idx;
// }

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// time O(n) space O(n) S.K(A.C)=83 created binary nodes using recursion
// function treeBuilding(treeArray) {
//   idx++;
//   if (treeArray[idx] === -1) return null;
//   const root = new TreeNode(treeArray[idx]);

//   root.left = treeBuilding(treeArray);
//   root.right = treeBuilding(treeArray);

//   return root;
// }
// const treeArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, 6, -1, -1, 7, -1, -1];
// const tree = treeBuilding(treeArray);

// time O(n) space O(n) S.K(A.C)=83  traversing on binary tree using loop (level order traversal)
// class Node {
//   constructor(treeNode) {
//     this.treeNode = treeNode;
//     this.next = null;
//   }
// }
// function levelOrder(tree) {
//   let head = new Node(tree);
//   let tail = head;

//   while (head) {
//     const cur = head.treeNode;
//     console.log(cur.value);

//     if (cur.left) {
//       tail.next = new Node(cur.left);
//       tail = tail.next;
//     }

//     if (cur.right) {
//       tail.next = new Node(cur.right);
//       tail = tail.next;
//     }
//     head = head.next;
//   }
// }

// time O(n) space O(n) S.K(A.C)=84
// function treelength(root) {
//   if (root === null) return 0;

//   const left = treelength(root.left);
//   const right = treelength(root.right);

//   return Math.max(left, right) + 1;
// }
// function treeNodeCount(root) {
//   if (root === null) return 0;

//   const leftCount = treeNodeCount(root.left);
//   const rightCount = treeNodeCount(root.right);

//   return leftCount + rightCount + 1;
// }
// function treeNodeSum(root) {
//   if (root === null) return 0;

//   const leftCount = treeNodeSum(root.left);
//   const rightCount = treeNodeSum(root.right);

//   return leftCount + rightCount + root.value;
// }
// const tree = new TreeNode(1);

// time O(n) space O(n) S.K(A.C)=85 L.C=572 is subtree is present in another tree a(tree) b(subtree)
// function isIdentical(a, b) {
//   if (a === null || b === null) return a === b;

//   const left = isIdentical(a.left, b.left);
//   const right = isIdentical(a.right, b.right);

//   return left && right && a.value === b.value;
// }
// function isSubTree(a, b) {
//   if(a===null || b===null) return a===b
//   if (a.value === b.value && isIdentical(a, b)) return true
//     return isSubTree(a.left, b) || isSubTree(a.right, b);
// }

// function height(tree) {
//   if (!tree) return 0;

//   const left = height(tree.left);
//   const right = height(tree.right);

//   return Math.max(left, right) + 1;
// }
// time O(n^2) space O(n^2) S.K(A.C)=86 finding the diameter of tree using nested recursion
// function diameterOfBinaryTree(tree) {
//   if (!tree) return 0;

//   const left = diameterOfBinaryTree(tree.left);
//   const right = diameterOfBinaryTree(tree.right);
//   const main = height(tree.left) + height(tree.right);

//   return Math.max(left, right, main);
// }

// time O(n) space O(n) S.K(A.C)=86 finding the diameter of tree by monitering the same finding length pattern with addition of keeping track on current length with respective node as root
// function diameterOfBinaryTree(tree) {
//   let maxDiameter = 0;

//   function height(root) {
//     if (!root) return 0;

//     const left = height(root.left);
//     const right = height(root.right);
//     maxDiameter = Math.max(maxDiameter, left + right);

//     return Math.max(left, right) + 1;
//   }

//   height(tree);
//   return maxDiameter;
// }

// class Node {
//   constructor(treeNode, count) {
//     this.treeNode = treeNode;
//     this.count = count;
//     this.next = null;
//   }
// }
// time O(n) space O(n) S.K(A.C)=87 , here im playing values which are seen from top view of tree and in time complexity im ignoring the sort(nlogn) bcuz it can be done without it but i just prefer to show answer in sorted manner
// function topView(tree) {
//   let head = new Node(tree, 0);
//   let tail = head;

//   const map = new Map();

//   while (head) {
//     const cur = head.treeNode;
//     const hd = head.count;

//     if (!map.has(hd)) {
//       map.set(hd, cur.value);
//     }

//     if (cur.left) {
//       tail.next = new Node(cur.left, hd - 1);
//       tail = tail.next;
//     }

//     if (cur.right) {
//       tail.next = new Node(cur.right, hd + 1);
//       tail = tail.next;
//     }
//     head = head.next;
//   }

//   const sortedKeys = [...map.keys()].sort((a, b) => a - b);
//   return sortedKeys.map((value) => map.get(value));
// }
// function bottomView(tree) {
//   let head = new Node(tree, 0);
//   let tail = head;

//   const map = new Map();

//   while (head) {
//     const cur = head.treeNode;
//     const hd = head.count;

//     if (map.has(hd)) {
//       map.delete(hd);
//       map.set(hd, cur.value);
//     } else {
//       map.set(hd, cur.value);
//     }

//     if (cur.left) {
//       tail.next = new Node(cur.left, hd - 1);
//       tail = tail.next;
//     }

//     if (cur.right) {
//       tail.next = new Node(cur.right, hd + 1);
//       tail = tail.next;
//     }
//     head = head.next;
//   }

//   const sortedKeys = [...map.keys()].sort((a, b) => a - b);
//   return sortedKeys.map((value) => map.get(value));
// }

// time O(n) space O(n) S.K(A.C)=88 , here we are finding kth level of tree what nodes do we have by using level order traversal
// class Node {
//   constructor(treeNode, level) {
//     this.treeNode = treeNode;
//     this.level = level;
//     this.next = null;
//   }
// }
// function kthLevel(structure, k) {
//   let head = new Node(structure, k);
//   let tail = head;

//   const ary = [];

//   while (head && k > 0) {
//     const cur = head.treeNode;
//     const hd = head.level;

//     if (hd === 1) {
//       ary.push(cur.value);
//     }

//     if (cur.left) {
//       tail.next = new Node(cur.left, hd - 1);
//       tail = tail.next;
//     }

//     if (cur.right) {
//       tail.next = new Node(cur.right, hd - 1);
//       tail = tail.next;
//     }
//     head = head.next;
//   }
//   return ary;
// }

// const res = [];
// time O(n) space O(n) S.K(A.C)=88 , here we are finding kth level of tree what nodes do we have by using recursion
// function kthLevel(structure, k) {
//   if (!structure) return;

//   if (k === 1) res.push(structure.value);

//   kthLevel(structure.left, k - 1);
//   kthLevel(structure.right, k - 1);
// }

// time O(n) space O(n) S.K(A.C)=89 , found the least common ancester node of the p,q values
// function leastCommonAncester(structure, p, q) {
//   if (!structure) return null;

//   if (structure.value === p || structure.value === q) return structure;

//   const left = leastCommonAncester(structure.left, p, q);
//   const right = leastCommonAncester(structure.right, p, q);
//   if (left && right) {
//     return structure;
//   } else if (left) {
//     return left;
//   } else {
//     return right;
//   }
// }

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// function find(value, inOrder, left, right) {
//   for (let i = left; i <= right; i++) {
//     if (inOrder[i] === value) return i;
//   }

//   return -1;
// }
// time O(n*(right-left)) space O(n) S.K(A.C)=90 L.C=105 , constructed binary treeNodes using preorder and inOrder values in array
// function treeStructure(preOrder, inOrder, idx, left, right) {
//   if (left > right) return null;

//   const root = new Node(preOrder[idx[0]]);

//   const i = find(preOrder[idx[0]], inOrder, left, right);
//   idx[0]++;

//   root.left = treeStructure(preOrder, inOrder, idx, left, i - 1);
//   root.right = treeStructure(preOrder, inOrder, idx, i + 1, right);

//   return root;
// }
// const preOrder = [3, 9, 20, 15, 7];
// const inOrder = [9, 3, 15, 20, 7];
// const tree = treeStructure(preOrder, inOrder, [0], 0, preOrder.length - 1);

// time O(n) space O(n) S.K(A.C)=91 , here we changed the value of node with sum of value of that node value and values of all other child nodes
// function SumTree(structure) {
//   if (!structure) return 0;

//   const left = SumTree(structure.left);
//   const right = SumTree(structure.right);
//   structure.value += left + right;

//   return structure.value;
// }

// time O(n) space O(n+array length) S.K(A.C)=92 ,store all paths of three from root to last node
// function treePaths(tree, str, array) {
//   if (tree.left === null && tree.right === null) {
//     array.push(str);
//     return array;
//   }

//   if (tree.left) treePaths(tree.left, str + "->" + tree.left.value, array);
//   if (tree.right) treePaths(tree.right, str + "->" + tree.right.value, array);

//   return array;
// }
// console.log(treePaths(tree, tree.value, []));

// time O(n) space O(n) S.K(A.C)=93 L.C=662, finding the length between right most and left most nodes(given they are not null and null nodes between them would be counted) in tree of same level
// class queueNode {
//   constructor(treeNode, idx) {
//     this.data = treeNode;
//     this.idx = idx;
//     this.next = null;
//   }
// }
// const converter = require("number-to-words");
// function maxWidth(tree) {
//   let i = 1;//asigning unique index to all nodes before puting in queueNode
//   let head = (tail = new queueNode(tree, i));

//   //cur/next/levelNum is to track on the when we are entering in next level of our treeNode
//   let curLevelNodes = 1;
//   let nextLevelNodes = 0;
//   let levelNumber = 1;

//   let maxWidth = 0;

//   console.log(
//     "level number",
//     converter.toWords(levelNumber).toLocaleUpperCase()
//   );

//   while (head) {
//     let cur = head.data;
//     console.log(cur.value);

//     if (cur.left) {
//       tail.next = new queueNode(cur.left, ++i);
//       tail = tail.next;
//       nextLevelNodes++;
//     } else {
//       // i want proper index asign to my right node even though if my left node dont exist
//       //even though i dont exist still it comes between head and tail of that level as null
//       // so we wont do other functionality on it but just keep inc. index to keep proper flow
//       i++;
//     }
//     if (cur.right) {
//       tail.next = new queueNode(cur.right, ++i);
//       tail = tail.next;
//       nextLevelNodes++;
//     } else {
//       i++;
//     }
//     head = head.next;
//     curLevelNodes--;

//     //runs only when our head is the first node of next level
//     //at that time we have head to tail all nodes of that level in queueNode
//     if (curLevelNodes === 0 && head) {
//       levelNumber++;
//       console.log(
//         "level number",
//         converter.toWords(levelNumber).toLocaleUpperCase()
//       );
//       maxWidth = Math.max(maxWidth, tail.idx - head.idx + 1);
//       curLevelNodes = nextLevelNodes;
//       nextLevelNodes = 0;
//     }
//   }

//   return maxWidth;
// }

// time O(n) space O(1) S.K(A.C)=94 L.C=662, iterate through tree without recursion and in case of loops without queue and nodelist, use  morrisInOrderTraversal
// function morrisInOrderTraversal(root) {
//   //in inorder traversal we first print left then root then right
//   while (root) {
//     if (!root.left) {
//       //here we print our far left and go to our self created thread pointing to root(which is to be print next)
//       console.log(root.value);
//       root = root.right;
//     } else {
//       //we need to go more in to print our suitable value//

//       //we find the ip(inorder predecesor),
//       // right value which needs to be print before we print our root
//       const ip = findInorderPredecer(root);
//       if (!ip.right) {
//         //if ip isnt set, we set it to root so that we dont lose our contact to root once we have travel forward
//         ip.right = root;
//         //after setting we can move forward
//         root = root.left;
//       } else {
//         //if ip is set already then we are standing on our last node in that direction and
//         // we are standing on root so we break the thread
//         ip.right = null;
//         console.log(root.value);
//         //after printig value of root we move to right
//         root = root.right;
//       }
//     }
//   }
// }

// time O(n) space O(n) S.K(A.C)=95 L.C=114,convert BTN into LL in manner of POT // here made new linked list
// class linkedList {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// function flattenBinaryTree(tree, points) {
//   if (!tree) return;

//   const newNode = new linkedList(tree.value);

//   if (!points[0]) {
//     points[0] = points[1] = newNode;
//   } else {
//     points[1].next = newNode;
//     points[1] = points[1].next;
//   }

//   flattenBinaryTree(tree.left, points);
//   flattenBinaryTree(tree.right, points);

//   return points[0];
// }
// const res = flattenBinaryTree(tree, [null, null]);

// time O(n) space O(n) S.K(A.C)=95 L.C=114,convert BTN into LL in manner of POT // here according to question changed that curren BTN
// function flattenBinaryTree(tree) {
//   if (!tree) return;

//   flattenBinaryTree(tree.right);
//   flattenBinaryTree(tree.left);

//   tree.left = null;
//   tree.right = predecesor;
//   predecesor = tree;
// }

// S.K(A.C)=96, make binary search tree
// time O(n*h): n = for loop size, h = recursion height
// space O(n*h): n = for n nodes, h = recursion height
// class node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// function insertNode(root, val) {
//   // in base case we set this as root node
//   // and in child node cases through recursion we always reach at null where our new node created which later asigned to its parent according to conditions
//   if (!root) return new node(val);

//   if (val < root.data) {
//     root.left = insertNode(root.left, val);
//   } else {
//     root.right = insertNode(root.right, val);
//   }

//   return root;
// }
// function BST(value) {
//   //initialize with null
//   let root = null;
//   //traverse over all array and find place of specific
//   for (const val of value) {
//     //we always send root in parameter so that in case we miss some .right space in sub tree then we again transvers from top most nod till the requre node(where that value needs to be asign) and check conditions
//     root = insertNode(root, val);
//   }

//   return root;
// }
// const values = [3, 2, 1, 5, 6, 4];

// time(h or log(n)) space(h) S.K=96, search node in BST
// function isvaluePresent(tree, val) {
//   if (!tree) return false;
//   if (tree.data === val) return true;

//   if (val > tree.data) {
//     return isvaluePresent(tree.right, val);
//   } else {
//     return isvaluePresent(tree.left, val);
//   }
// }

// time(n) space(n) S.K=96, delete node and link rest nodes
// function getSuccessor(tree) {
//   // if (!tree.left) return tree;
//   // const node = getSuccessor(tree.left);
//   //return node

//   while (tree.left) {
//     tree = tree.left;
//   }

//   return tree;
// }
// function delNode(tree, val) {
//   if (!tree) return null;

//   //Traverse down left or right subtree until we find the node to delete
//   if (val > tree.data) {
//     tree.right = delNode(tree.right, val);
//   } else if (val < tree.data) {
//     tree.left = delNode(tree.left, val);
//   } else {
//     //either child node or both child node could be non-null for the node to be removed
//     // so we handle 3 conditions in 2 statements
//     if (!tree.left) return tree.right;
//     if (!tree.right) return tree.left;

//     //both child node are non-null
//     //where we have to find first successor of that node to be removed
//     //which is the right node like in previous cases if that right node dont further have left node
//     //but in case that right node has left node, then that extreme left is right successor of the node to be removed
//     const succesor = getSuccessor(tree.right);
//     //we dont link that successor node by returning like we did before
//     //but we will replace the value in the respective nodes
//     tree.data = succesor.data;
//     //and later delete that succesor node, which will be arranged in order by conditions in the start of delNode
//     tree.right = delNode(tree.right, succesor.data);
//   }

//   return tree;
// }

// time(n) space(n) S.K=97 L.C=108,  Convert Sorted Array to Binary Search Tree
// class node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// function heightBalancedBinaryTree(ary, start, end) {
//   //breaks the recursion when array elements end
//   if (end < start) return;

//   //start from mid in ordered array to evenly distribute elements in BTN
//   const mid = Math.floor(end + (start - end) / 2);

//   //creat root node
//   const root = new node(ary[mid]);

//   //asign left and right to root with the nodes returned from recursion
//   root.left = heightBalancedBinaryTree(ary, start, mid - 1);
//   root.right = heightBalancedBinaryTree(ary, mid + 1, end);

//   return root;
// }

// time(n) space(n) S.K=98 L.C=98,  is BST validate
// function validateBinarySearchTree(tree, min, max) {
//   //when tree ends we mark that direction as true
//   if (!tree) return true;

//   //if min exits means that we are setting in left and we need to make sure that its less than all the nodes above in that direction
//   if (min && tree.data <= min) return false;
//   //if max exists means that we are setting in right and we need to make sure that its greater than the nodes above in that direction
//   if (max && tree.data >= max) return false;
//   //if both min and max dont exit it means that we are checking head node which is true in any case

//   return (
//     //we check if both returns validate that node
//     validateBinarySearchTree(tree.left, min, tree.data) &&
//     validateBinarySearchTree(tree.right, tree.data, max)
//   );
// }

// time(n) space(n) S.K=99 L.C=783,  find minimum difference in BST
// function minDifInBST(tree, obj) {
//   if (!tree) return;
//   minDifInBST(tree.left, obj);
//   //here we check difference of every consective node based on inorder
//   if (obj.prev) {
//     obj.ans = Math.min(obj.ans, tree.data - obj.prev.data);
//   }
//   obj.prev = tree;
//   minDifInBST(tree.right, obj);

//   return obj.ans;
// }
// const obj = {
//   prev: null,
//   ans: Infinity,
// };

// time(n) space(n) S.K=100 L.C=230, Kth Smallest Element in a BST
// let count = 0;
// function kthSmallNode(tree, kth) {
//   if (!tree) return null;

//   //when we found null in return(here im refering to 1st & 4th return) we continue in tree till we find matching kth value

//   const left = kthSmallNode(tree.left, kth);
//   if (left !== null) return left; //runing this means we have found match and we need to stop recursion, so that we dont recurse more even though we have found result

//   count++;
//   //we incerment the count to stay async with number of node in BST when we are traveling in inorder manner
//   if (count === kth) return tree.data;

//   return kthSmallNode(tree.right, kth);
// }

// time(log(n)) space(log(n)) S.K=101, common ancestor in BST
// function commonAncester(tree, p, q) {
//   if (!tree) return null;

//   //in BST our required node is either on left or right else its root node where we are standing

//   if (tree.data > p && tree.data > q) {
//     //we recurse to left untill we find common ancestor
//     return commonAncester(tree.left, p, q);
//   } else if (tree.data < p && tree.data < q) {
//     //we recurse to right untill we find common ancestor
//     return commonAncester(tree.right, p, q);
//   } else {
//     //node is neither on left or right, it means we are standing on it(given that, given vaules will always be present in tree)
//     return tree;
//   }
// }

// time(n) space(n) S.K=102 L.C=1008, Construct BST from Preorder
// let idx = 0;
// function preorderBST(values, bound) {
//   //if ary ends or our current value dont satisfy previous node we return null
//   if (idx >= values.length || values[idx] > bound) return null;
//   let root = new node(values[idx]);
//   //set node and increatement
//   idx++;
//   //set left and right of root nodes
//   //left is less than root nodes and right is less than infinity,
//   // this lets us set far right node with infinity upper bound
//   //and if node is in right but left in sub root then we have bound as previous node
//   root.left = preorderBST(values, root.data);
//   root.right = preorderBST(values, bound);

//   return root;
// }
// const values = [6, 3, 1, 4, 8, 9];

// time(3(n+m) = n+m) S.K=103, Merge Two BSTs and keep resultent BST balanced
// function inorder(root, ary) {
//   if (!root) return;

//   inorder(root.left, ary);
//   ary.push(root.data);
//   inorder(root.right, ary);

//   return ary;
// }
// function balancedBST(ary, start, end) {
//   if (start > end) return;
//   const mid = Math.floor((start + end) / 2);

//   const root = new node(ary[mid]);

//   root.right = balancedBST(ary, mid + 1, end);
//   root.left = balancedBST(ary, start, mid - 1);

//   return root;
// }
// function mergeTwoPreorderBST(first, second) {
//   const ary1 = inorder(first, []);
//   const ary2 = inorder(second, []);

//   const ary3 = [];
//   let i = 0;
//   let j = 0;
//   while (i < ary1.length || j < ary2.length) {
//     if (ary1[i] < ary2[j]) {
//       ary3.push(ary1[i++]);
//     } else {
//       ary3.push(ary2[j++]);
//     }
//   }
//   while (i < ary1.length) {
//     ary3.push(ary1[i++]);
//   }
//   while (j < ary2.length) {
//     ary3.push(ary2[j++]);
//   }

//   return balancedBST(ary3, 0, ary3.length - 1);
// }
// const values1 = [5, 2, 8, 1, 4, 7];
// const values2 = [6, 3, 9, 0, 10, 11];

// time(n) space(n) S.K=104, two nodes are swaped in BST restore it back to correct BST
// let prev = null;
// let first = null;
// let second = null;
// function restoreBST(head) {
//   if (!head) return;
//   restoreBST(head.left);
//   if (prev && prev.data > head.data) {
//     if (!first) {
//       first = prev;
//     }
//     second = head;
//   }
//   prev = head;
//   restoreBST(head.right);
// }
// let value = first.data;
// first.data = second.data;
// second.data = value;

// time(n) space(1) S.K=104, two nodes are swaped in BST restore it back to correct BST using morris traversal
// function restoreBST(head) {
//   let cur = head;
//   let prev = null;
//   let first = null;
//   let second = null;

//   while (cur) {
//     if (!cur.left) {
//       if (prev && prev.data > cur.data) {
//         if (!first) {
//           first = prev;
//         }
//         second = cur;
//       }
//       prev = cur;
//       cur = cur.right;
//     } else {
//       let ip = cur.left;
//       while (ip.right && ip.right !== cur) {
//         ip = ip.right;
//       }
//       if (!ip.right) {
//         ip.right = cur;
//         cur = cur.left;
//       } else {
//         ip.right = null;
//         if (prev && prev.data > cur.data) {
//           if (!first) {
//             first = prev;
//           }
//           second = cur;
//         }
//         prev = cur;
//         cur = cur.right;
//       }
//     }
//   }

//   if (first && second) {
//     let tmp = first.data;
//     first.data = second.data;
//     second.data = tmp;
//   }
// }

// time(n^2) space(h'height of tree') S.K=105, find largest BST in binary tree 'BRUTE FORCE'
// function countNodes(tree) {
//   // counts total number of nodes in a subtree
//   // used only after we confirm the subtree is a valid BST
//   if (!tree) return 0;
//   return 1 + countNodes(tree.left) + countNodes(tree.right);
// }
// function validateBinarySearchTree(tree, min, max) {
//   // base case: empty tree is always a valid BST
//   if (!tree) return true;

//   // if min exists, current node must be greater than min
//   // this ensures left subtree values stay less than parent chain
//   if (min !== null && tree.data <= min) return false;

//   // if max exists, current node must be less than max
//   // this ensures right subtree values stay greater than parent chain
//   if (max !== null && tree.data >= max) return false;

//   // recursively validate left and right subtrees
//   // passing updated min/max constraints
//   return (
//     validateBinarySearchTree(tree.left, min, tree.data) &&
//     validateBinarySearchTree(tree.right, tree.data, max)
//   );
// }
// function largestBSTNode(root) {
//   // keeps track of maximum BST size found so far
//   let maxSize = 0;

//   // stores the root node of the largest BST found
//   let maxBSTRoot = null;

//   function dfs(node) {
//     // base case: reached beyond leaf
//     if (!node) return;

//     // BRUTE FORCE IDEA:
//     // Treat current node as root of a subtree
//     // and check if that entire subtree is a valid BST
//     if (validateBinarySearchTree(node, -Infinity, Infinity)) {
//       // if valid BST, count how many nodes it has
//       const size = countNodes(node);

//       // update maximum if this BST is larger than previous ones
//       if (size > maxSize) {
//         maxSize = size;
//         maxBSTRoot = node;
//       }
//     }

//     // continue DFS so that every node is considered
//     // as a potential root of a BST
//     dfs(node.left);
//     dfs(node.right);
//   }

//   // start DFS traversal from root
//   dfs(root);

//   // return root of the largest BST subtree found
//   return maxBSTRoot;
// }

// time(n) space(n) S.K=106, L.C = 116 Populating Next Right Pointers in Each Node
// function nextPointer(vertex) {
//   const queue = [];

//   // push the root node into the queue to start level-order traversal
//   queue.push(vertex);

//   // push null to indicate the end of the current level
//   // this helps us know when one level finishes
//   queue.push(null);

//   let prev = null; // stores the previous node in the same level
//   let cur; // stores the current node being processed

//   while (queue.length > 0) {
//     // here we are trying to add child nodes of the current node
//     // into the queue so that the next level can be processed
//     // optional chaining (cur?) is used because cur may be undefined
//     if (cur?.left || cur?.right) {
//       queue.push(cur.left);
//       queue.push(cur.right);

//       // while connecting next pointers, we may accidentally connect
//       // the last node of one level to the first node of the next level
//       // so we push null when we detect the end of a level
//       if (!queue[0]) {
//         queue.push(null);
//       }
//     }

//     // take the first element from the queue as current node
//     cur = queue[0];

//     // if prev is not null, it means there was a node before cur
//     // at the same level, so we point prev.next to cur
//     // cur can be either a node or null (end of level)
//     if (prev) {
//       prev.next = cur;
//     }

//     // move prev to current node
//     // this prepares prev for the next iteration
//     prev = cur;

//     // remove the processed element from the queue
//     queue.shift();
//   }
// }

// time(h) space(h) S.K=107, Find Inorder Predecessor & Successor in BST
// let pred;
// let succ;
// function inorderPredecessorSuccessor(head, key) {
//   // base case: if tree (or subtree) is empty, stop recursion
//   if (!head) return;

//   // if key is smaller than current node's value,
//   // then current node can be a possible successor
//   // because successor is the smallest value greater than key
//   if (key < head.data) {
//     succ = head.data;
//     // move to left subtree to find a closer successor
//     inorderPredecessorSuccessor(head.left, key);
//   }
//   // if key is greater than current node's value,
//   // then current node can be a possible predecessor
//   // because predecessor is the largest value smaller than key
//   else if (key > head.data) {
//     pred = head.data;
//     // move to right subtree to find a closer predecessor
//     inorderPredecessorSuccessor(head.right, key);
//   }
//   // if key is equal to current node's value,
//   // then we have found the node for which we want
//   // inorder predecessor and successor
// else {
//   // when key matches current node, we now find:
//   // predecessor = max value in left subtree
//   // successor   = min value in right subtree

//   function left(vertex) {
//     // move to the right-most node
//     // because it is the largest value in left subtree
//     while (vertex.right) {
//       vertex = vertex.right;
//     }
//     return vertex.data;
//   }

//   function right(vertex) {
//     // move to the left-most node
//     // because it is the smallest value in right subtree
//     while (vertex.left) {
//       vertex = vertex.left;
//     }
//     return vertex.data;
//   }

//   // if left subtree exists, find predecessor
//   if (head.left) pred = left(head.left);

//   // if right subtree exists, find successor
//   if (head.right) succ = right(head.right);
// }

//   return { pred, succ };
// }

//time(n'vertices'+e'neighbours in adjacency list') space(n), BFS Traversal in Graphs
// function BFS(list) {
//   // queue is used to process nodes level by level (FIFO)
//   const queue = [];

//   // state array keeps track of visited nodes
//   // index = node number, value = true/false
//   const state = Array.from({ length: 5 }, () => false);

//   // start BFS from node 0
//   queue.push(0);

//   // mark starting node as visited
//   state[0] = true;

//   // continue until there are no nodes left to visit
//   while (queue.length > 0) {
//     // remove the first node from the queue
//     // this is the current node being processed
//     const u = queue.shift();

//     // process the current node (print it here)
//     console.log(u);

//     // iterate over all neighbors of the current node
//     for (const el of list[u]) {
//       // if the neighbor has not been visited yet
//       if (!state[el]) {
//         // mark the neighbor as visited
//         // this prevents revisiting the same node
//         state[el] = true;

//         // add the neighbor to the queue
//         // it will be processed in future iterations
//         queue.push(el);
//       }
//     }
//   }
// }

//time(n'vertices'+e'neighbours in adjacency list') space(n), DFS Traversal in Graphs
// function DFS(list, vertex, state) {
//   // mark the current node as visited
//   // this prevents infinite loops in cyclic graphs
//   state[vertex] = true;

//   // process the current node (print it here)
//   console.log(vertex);

//   // iterate over all neighbors of the current node
//   for (const el of list[vertex]) {

//     // if the neighbor has not been visited yet
//     if (!state[el]) {

//       // recursively visit the neighbor
//       // DFS goes as deep as possible before backtracking
//       DFS(list, el, state);
//     }
//   }
// }
// // create an array to track visited nodes
// // index  = node number
// // value  = true if node is visited, false otherwise
// const state = Array.from({ length: 5 }, () => false);
// // start DFS from node 0
// DFS(graph.adjList, 0, state);


//time(n'vertices'+e'neighbours in adjacency list') space(n), Detect a Cycle in Undirected Graph using DFS
// function detectCycleDFS(list, u, par, state) {
//   // mark current node as visited
//   state[u] = true;

//   // visit all adjacent vertices of current node
//   for (const el of list[u]) {

//     // if adjacent node is not visited,
//     // recursively check for cycle from that node
//     if (!state[el]) {
//       if (detectCycle(list, el, u, state)) {
//         return true; // cycle found in deeper call
//       }
//     }

//     // if adjacent node is already visited
//     // AND it is not the parent of current node,
//     // then we found a back-edge → cycle exists
//     else if (el != par) {
//       return true;
//     }
//   }

//   // no cycle found from this path
//   return false;
// }

//time(n'vertices'+e'neighbours in adjacency list') space(n), Detect a Cycle in Undirected Graph using BFS
// function detectCycleBFS(start, state) {
//   const queue = [];

//   // push the starting node into the queue
//   // along with its parent (-1 means no parent)
//   queue.push([start, -1]);

//   // mark the starting node as visited
//   state[start] = true;

//   // continue BFS while there are nodes to process
//   while (queue.length > 0) {

//     // take out the front element of the queue
//     // u   → current node
//     // par → parent of current node
//     const [u, par] = queue.shift();

//     // traverse all adjacent nodes of current node
//     for (const el of graph.adjList[u]) {

//       // if adjacent node is not visited,
//       // mark it visited and add it to the queue
//       // with current node as its parent
//       if (!state[el]) {
//         state[el] = true;
//         queue.push([el, u]);
//       }

//       // if adjacent node is already visited
//       // and it is NOT the parent of current node,
//       // then a cycle exists in the graph
//       else if (el != par) {
//         return true;
//       }
//     }
//   }

//   // if BFS completes without finding a cycle
//   return false;
// }


//time(n*m) space(n*m), L.C=200, Find Number of Islands
// const grid = [
//   [1, 1, 0, 0, 0, 1],
//   [1, 1, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 1, 0],
// ];
// // DFS function to explore all connected land cells (1's)
// function DFS(i, j, vis, grid, n, m) {
//   // base conditions:
//   // 1. out of grid boundaries
//   // 2. already visited cell
//   // 3. cell is not land (value !== 1)
//   if (i < 0 || j < 0 || i >= n || j >= m || vis[i][j] || grid[i][j] !== 1)
//     return;

//   // mark current cell as visited
//   vis[i][j] = true;

//   // recursively visit all 4 adjacent directions
//   DFS(i, j + 1, vis, grid, n, m); // right
//   DFS(i, j - 1, vis, grid, n, m); // left
//   DFS(i + 1, j, vis, grid, n, m); // down
//   DFS(i - 1, j, vis, grid, n, m); // up
// }
// // function to count number of islands in the grid
// function numOfIslands() {
//   let islands = 0;

//   // number of rows and columns
//   const n = grid.length;
//   const m = grid[0].length;

//   // visited matrix to track already explored cells
//   const vis = Array.from({ length: n }, () => Array(m).fill(false));

//   // traverse every cell in the grid
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {

//       // if current cell is land and not visited,
//       // it means we found a new island
//       if (!vis[i][j] && grid[i][j] === 1) {

//         // explore the entire island using DFS
//         DFS(i, j, vis, grid, n, m);

//         // increment island count
//         islands++;
//       }
//     }
//   }

//   // return total number of islands found
//   return islands;
// }

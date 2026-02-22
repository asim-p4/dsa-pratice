// 121. Best Time to Buy and Sell Stock
// Difficulty: Easy
// Platform: LeetCode
// Frequently Asked In:Microsoft, Amazon, Google, Goldman Sachs, Walmart, Salesforce, Oracle, Intuit, Flipkart

//time O(n), space O(1)
function maxProfit(prices) {
  // we use two pointers to find max profit
  let left = 0;
  let right = 1;
  let profit = 0;

  // continue loop as long as our right pointer dont end
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      //if our left is lesser than right it means we have find min
      //(but we are not sure if its THE most min in array)
      profit = Math.max(profit, prices[right] - prices[left]);
    } else {
      left = right;
      //in this case we assing left to right means there are many prices which our left will never read
      //but we dont need those values bcuz we are already sure that it wont satisfy above condition
      //i.e, [a,b,c] at one point if our left"a" is less than right"b"
      // and "c" which is our right in next loop is not less than "a"
      //then indeed we are gonna ignore "a" but as well as all the nums between "a" and "c"
      //bcuz those in between terms are already greater than "a"
      //so they can never be smaller than "c",thats why left=right
    }
    // we incr. right in all situationa
    right++;
  }
}

//time O(n^2), space O(1)
function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        profit = Math.max(profit, prices[j] - prices[i]);
      }
    }
  }

  return profit;
}

const prices = [2, 3, 1, 4];
buyAndSellStocks(prices);

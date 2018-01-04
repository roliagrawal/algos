/*
  Problem statement: Consider a row of n coins of values v1 . . . vn, where n is even.
  We play a game against an opponent by alternating turns.
  In each turn, a player selects either the first or last coin from the row,
  removes it from the row permanently, and receives the value of the coin.
  Determine the maximum possible amount of money we can definitely win if we move first.
*/
function max_coin(arr, start, end) {
	if(start > end ) return 0;
	let a = arr[start] + min(max_coin(arr, start + 2, end), max_coin(arr, start + 1,end - 1));

	let b = arr[end] + min(max_coin(arr, start + 1, end - 1), max_coin(arr, start, end - 2));
	return max(a, b);
}
function min(a, b) { return (a < b ? a : b) }
function max(a, b){ return (a < b ? b :a )}
const coins = [8,10,14,73,21];
console.log(max_coin(coins, 0, coins.length));

/**
Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted,
compares each pair of adjacent items and swaps them if they are in the wrong order.
The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
example : 9 13 7 5
1st iteration: 9 7 5 13
2nd iteration: 7 5 9 13
3d iteration: 5 7 9 13
complexity Best	Average	Worst
O(n)	O(n^2)	O(n^2)
*/
function bubbleSort(arr) {
	const len = arr.length;
	let temp;
	for(let i = 0; i < len; i++) {
		for(let j = 0; j < len-i; j++) {
			if(arr[j+1] < arr[j]) {
  			tmp = arr[j];
  			arr[j] = arr[j+1];
  			arr[j+1] = tmp;
        /* in ES6 for swap you can use [arr[j],arr[j+1]] = [arr[j+1],arr[j]]*/
      }
		}
	}
	return arr;
}

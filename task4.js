//Реалізувати алгоритм бінарного пошуку
function binarySearch(arr, key) {
   let l = 0; let r = arr.length - 1;
   while (r >= l) {
      let m = Math.floor((l+r)/2);
      if(arr[m] < key) {
         l = m+1;
      } else if(arr[m] > key) {
         r = m -1;
      } else {
         return m;
      }
   }
   return -1;
}

function printRes(n, res) {
   if(res == -1) {
      console.log(`Element ${n} is not found`);
   } else {
      console.log(`Element ${n} is present at index ${res+1}`)
   }
   
}

let arr = [1, 2, 3, 5, 20, 6, 18, 15, 12, 7]; 
arr = arr.sort(function (a, b) {
   return a - b;
});

let n1 = 9;
let n2 = 5;
let n3 = 20;
let res1 = binarySearch(arr, n1);
let res2 = binarySearch(arr, n2);
let res3 = binarySearch(arr, n3)

console.log(arr);
console.log('\n')
printRes(n1, res1);
printRes(n2, res2);
printRes(n3, res3)

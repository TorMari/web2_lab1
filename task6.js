//Написати реалізацію сортування бульбашкою масиву
function swap(arr, i, j)
{
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length-1; j++) {
         if(arr[j+1] < arr[j])
            swap(arr, j+1, j);
      }
   }
   return arr;
}

let arr1 = [9, -3, 5, -2, 6, 8, -6, 1, 3];
let arr2 = [10, 8, 6.5, 6, 2, 1];
console.log(`\nGiven array: ${arr1}`);
console.log(`Sorted array: ${bubbleSort(arr1)}`);
console.log(`\nGiven array: ${arr2}`);
console.log(`Sorted array: ${bubbleSort(arr2)}`);
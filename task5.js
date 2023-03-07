//Написати функцію, яка знайде максимальну дату у масиві
function maxDate(arr) {
   if(arr.length == 0) {
      return "Massive is empty. Maximal date doesn't exist.";
   } 
   let c = 0, k = 0;
   for (let i = 0; i < arr.length; i++) {
      let date = new Date(arr[i]);
      console.log(date);
      if(date > c) {
         c = date;
         k = i;
      }     
   }
   return `Maximal date in massive is ${arr[k]}\n`;
}

let arr1 = ['2020-03-17', '2020-03-25', '2020-03-07'];
let arr2 = ['2012-05-02', '1975-10-15', '2023-02-28', '2008-07-08'];
let arr3 = [];
console.log(arr1);
console.log(maxDate(arr1));
console.log(arr2);
console.log(maxDate(arr2));
console.log(arr3);
console.log(maxDate(arr3))
//Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій
function Split(str) {
   let a = str.split(' ');
   return a;
}

let str1 = 'html css javascript';
let str2 = 'Try to listen native speakers if you want to learn language.';

let arr1 = Split(str1);
let arr2 = Split(str2);

console.log(arr1);
console.log(arr2);

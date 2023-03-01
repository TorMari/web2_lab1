//Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій
function Split(str) {
   var a = [];
   var firstCharIndex = 0;
   for (var i = 0; i < str.length + 1; i++) {
      if (str[i] == ' ' || str[i] == ','  || str[i] == '.'  || i == str.length) {
         if (firstCharIndex !== null) {
            var s = str.substring(firstCharIndex, i);
            a.push(s);
            firstCharIndex = null;
         }
      }
      else {
         if (firstCharIndex === null) {
            firstCharIndex = i;
         }
      }
   };
   return a;
}

var str1 = 'html, css, javascript';
var str2 = 'Try to listen native speakers, if you want to learn language.';

let arr1 = Split(str1);
let arr2 = Split(str2);

console.log(arr1);
console.log(arr2);

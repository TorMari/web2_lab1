//Написати функцію, яка знайде чи входить шукана стрічка у задану
function analyse(str1, str2) {
   if(str1.length < str2.length) {
      return "No";
   }
   let c = 1, k =0, len1 = str1.length, len2 = str2.length;
   for (let i = 0; i < len1; i++) {
      for (let j = 0; j < len2; j++) {
         if(str1[i+k] !== str2[j]) {
            c = 0;
            break;
         }
         k++;
      }
      k = 0;
      if(c == 1) {
         return "Yes";
      }
      c = 1;
   }
   return "No"
}

let str1 = "sun shine";
let str2 = "shi";
let str3 = "sun sky";

console.log(`\n\nDoes "${str2}" includes in "${str1}"? ${analyse(str1, str2)}`);
console.log(`Does "${str3}" includes in "${str1}"? ${analyse(str1, str3)}`);

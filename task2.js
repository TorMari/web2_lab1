//Написати функцію, яка знайде чи входить шукана стрічка у задану
function analyse(str1, str2) {
   let res = str1.includes(str2)
   if(res === false)
      return "No"
   else
      return "Yes"
}

let str1 = "sun shine";
let str2 = "shi";
let str3 = "sun sky";

console.log(`\n\nDoes "${str2}" includes in "${str1}"? ${analyse(str1, str2)}`);
console.log(`Does "${str3}" includes in "${str1}"? ${analyse(str1, str3)}`);

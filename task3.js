//Написати функцію, яка порахує факторіал натурального числа
function factorial(n) {
   if(n < 0)
      return 0;
   else if (n === 0) {
      return 1;
   }     
   return n*factorial(n-1);
}

let n1 = 4;
let n2 = 0;
let n3 = 6;

console.log(`\n\nFactorial of ${n1} is ${factorial(n1)}`);
console.log(`Factorial of ${n2} is ${factorial(n2)}`);
console.log(`Factorial of ${n3} is ${factorial(n3)}`);
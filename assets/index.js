// 1) Знайти суму чисел у диапазоні від 1 до 100.
let sum = 0
for (let i = 1; i <= 100; i++) {
  sum += i
}
console.log(sum);

// 2) Пропонувати користувачу розв'язувати рівняння (2 + 2 * 2) до тих пір, поки користувач не надасть правильну відповідь
let userResult;
const correctResult = 6;
while (userResult !== correctResult) {
  userResult = prompt ("Розв'яжіть рівняння: (2 + 2 * 2)"); 
  if (+userResult === correctResult) {
    alert("Good");
    break;
  }
}

// 3) Створити функцію, яка буде приймати два числа, та буде повертати значення першого числа у ступені другого. Заборонено використовувати оператор ** та Math.pow();. Ступінь може бути позитивною або нульовою

const calc = function (a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a
    
  }
  return(result);
} 
  
console.log (calc(3, 4));













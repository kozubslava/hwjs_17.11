// 1
let sum = 0
for (let i = 1; i <= 100; i++) {
  sum += i

  console.log(sum);
}

 // 2
let userResult;
const correctResult = 6;
while (userResult !== correctResult) {
  userResult = prompt ("Розв'яжіть рівняння: (2 + 2 * 2)"); 
  if (+userResult === correctResult) {
    alert("Good");
    break;
  }
}




// let userAnswer;
// const correctAnswer = 2 + 2 * 2;

// do {
//     userAnswer = parseInt(prompt("Розв'яжіть рівняння: (2 + 2 * 2)"));
// } while (userAnswer !== correctAnswer);

// console.log("Правильно!");



// let userAnswer;
// const correctAnswer = 2 + 2 * 2;

// while (true) {
//     userAnswer = prompt("Розв'яжіть рівняння: (2 + 2 * 2)");

//     if (userAnswer === correctAnswer) {
//         console.log("Правильно!");
//         break;
//     } else {
//         console.log("Спробуйте ще раз.");
//     }
// }



















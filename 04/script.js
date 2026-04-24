'use strict';

// console.log('Hello JavaScript!!');

// for (let i = 0; i < 6; i += 1) {
//     console.log('Hello World!!');
// }

// for (let num = 1; num <= 10; num += 1) {
//     if (num % 5 == 0) {
//       break; // → for文から抜け出す（続きは実行されない）
//     }
//     console.log(num); // → 1 → 2 → 3 → 4
//   }
//   console.log('for文から出ました');

// for (let num = 1; num <= 10; num += 1) {
//     if (num % 3 == 0) {
//       continue;  // breakと交互に書き換えてみる
//     }
//     console.log(num); // → 1 → 2 → 4 → 5 → 7 ...
//   }
//   console.log('for文から出ました');

//   for (const data of [1, 2, 'dog!', 1, 2, 'cat!']) {
//     console.log(data); // 1 → 2 → dog! → 1 → 2 → cat!
//   }

const element = document.createElement('p');
element.textContent = 'Hello World!!';
document.body.appendChild(element);

const ul = document.getElementById('list');
for (let i = 0; i < 5; i += 1) {
  const li = document.createElement('li');
  li.textContent = `子要素${i}号`;
  ul.appendChild(li);
}
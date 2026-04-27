// 'use strict';

//console.log('Hello World!!');

// const array = [1, 2, 'dog!', 1, 2, 'cat!'];

// console.log(array[0]); // → 1
// const animal = array[2];
// console.log(animal); // → dog!
// array[3] = 'pig!';   // arrayの“要素”は定数ではないので代入可
// array[4] += array[0];
// console.log(array); // → [1, 2, 'dog!', 'pig!', 3, 'cat!']

//array = [1, 2, 3, 'dah', '!!'];  // arrayそのものは定数なのでエラー

// const array = [1, 2, 3, 'dah', '!!'];

// for (let i = 0; i < 5; i += 1) {
//   console.log(array[i]); // → 1, 2, 3, dah, !!
//   array[i] = i;  // 要素の値の書き換え
// }

// array[4] = "cat"

// console.log(array); // → [0, 1, 2, 3, 4]
// console.log(array.length);

// let x;  // 初期値なしで変数宣言
// console.log(x);  // → undefined

// if (x == undefined) {
//   console.log('xが未定義だよ');
// }

// const array = [1, 2, 3];

// array.push(4);

// console.log(array);
// array.unshift(0);

// console.log(array);
// array.pop();

// console.log(array);
// array.shift();

// console.log(array);

// const array = ['a', 'b', 'c'];

// const index = array.indexOf('b'); // 戻り値：1
// if (index == -1) {
//   array.splice(index, 1);  // → ['a', 'c']
// }

// console.log(array);

'use strict';

//const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];
// const numList = [1, 2, 3, 4, 5, 6, 7, 8];

// // ul要素を呼び出す（定数ul）
const ul = document.getElementById('list');

// // for (const eto of numList) {
// //     const li = document.createElement('li');
// //     li.textContent = eto;
// //     ul.appendChild(li);
// // }

// for (const num of numList) {
//     if (num % 2 == 0) {
//         const li = document.createElement('li');
//         li.textContent = 'No' + num;
//         ul.appendChild(li);
//     }
// }

const numList = [1, 2, 3, 4, 5, 6, 7, 8];

const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even);

for (const num of evenList) {
  const li = document.createElement('li');
  li.textContent = num;
  ul.appendChild(li);
}



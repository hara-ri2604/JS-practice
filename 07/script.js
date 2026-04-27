'use strict';

// console.log('Hello World!!');

const servants = ['犬', '猿', '雉'];

// function showServants() {
//   console.log('現在の家来は：');
//   for (const servant of servants) {
//     console.log(servant);
//   }
//   console.log(`の総勢 ${servants.length} 名です。`);
// }

// showServants();

// servants.push('鬼');
// showServants();

// servants.push('桃');
// showServants();

// function appendServants(newcomer) {
//     servants.push(newcomer);  // ← 受け取った変数を使って書ける
  
//     console.log('現在の家来は：');
//     for (const servant of servants) {
//       console.log(servant);
//     }
//     console.log(`の総勢 ${servants.length} 名です。`);
//   }

function swapServants(newcomer) {
    servants.push(newcomer);
    const fired = servants.shift();  // 先頭要素を削除
  
    console.log('現在の家来は：');
    for (const servant of servants) {
      console.log(servant);
    }
    console.log(`の総勢 ${servants.length} 名です。`);

    return fired;
  }

  //const servants = ['犬', '猿', '雉'];

//   appendServants('鬼');
//   appendServants('桃');
//   appendServants('爺');

// swapServants('鬼');
// console.log('犬さん、これまでありがとう！');

// swapServants('桃');
// console.log('猿さん、これまでありがとう！');

const retired = swapServants('鬼');
console.log(`${retired}さん、これまでありがとう！`);
console.log(`${swapServants('桃')}さん、これまでありがとう！`);
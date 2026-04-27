'use strict';

//console.log('Hello World!!');

// const p = document.getElementById('p_id');
// console.log(`p要素のidは ${p.id} です`);  // → p要素のidは p_id です

// console.log(p.class);     // → undefined
// console.log(p.className); // → p_class

// a要素とimg要素のエレメントを取得
// const a = document.getElementById('link');
// const img = a.firstElementChild;

// // 属性値を書き換えることもできる
// console.log(`元のリンクURL: ${a.href}`);
// a.href = 'https://loremflickr.com/320/240/dog';

// // つまり、JavaScript側で画像を差し替えることもできる
// console.log(`元の画像ソース: ${img.src}`);
// img.src = 'https://loremflickr.com/320/240/dog';

// // テキストノードを格納する変数（constではない）を用意
// let textNode;

// // a要素のtarget属性の値によってテキストノードの内容を場合分け
// if (a.target == '_blank') {
//   textNode = document.createTextNode('別のタブで開きます');
// } else {
//   textNode = document.createTextNode('同じタブで開きます');
// }

// // br要素を生成
// const br = document.createElement('br');

// // 親要素となるp要素（2つ目のp要素）を呼び出して、上記のノードを子要素として追加
// const p = document.querySelectorAll('p')[2];

// console.log(p.className);  // → 何も表示されない

// //p.className = 'new_class'; // class属性を追加

// //console.log(p.className);

// p.appendChild(br);
// p.appendChild(textNode);  // テキストノードもappendChildできる

const p = document.getElementById('p_id');
console.log(p.classList);
// → DOMTokenList ["p_class", value: "p_class"]

p.className = 'baseStyle'; // classNameプロパティも併用できる

const flag = window.prompt('A, B, or C');

if (flag == 'A') {
  p.classList.add('p_class'); // p_classを追加
} else if (flag == 'B') {
  p.classList.add('myStyle'); // myStyleを追加
}
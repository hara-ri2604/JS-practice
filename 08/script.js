'use strict';

// console.log('Hello World!!');
const p1 = document.getElementById('dom');
console.log (p1.textContent);  // → Document Object Modelの略です。

const a = document.getElementById('link'); // a要素
console.log(a);

const p = a.parentElement;  // 親要素
console.log(p);

const img = a.firstElementChild;  // 最初の子要素
console.log(img);
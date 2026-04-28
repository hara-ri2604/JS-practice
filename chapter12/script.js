'use strict';

const p = document.getElementById('output'); // 出力用のp要素

// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
  const text = document.getElementById('textInput');
  p.textContent = text.value; // p要素に出力
  // 上記コードの続き
  text.value = '入力完了しました';  // フォームの書き換え
});

// const radio = document.getElementsByName('abcRadio');
// for (const btn of radio) {
//   if (btn.checked == true) {
//     p.textContent = btn.value;
//   }
// }

const checkbox = document.getElementsByName('abcCheck');
const values = [];
for (const box of checkbox) {
  if (box.checked == true) {
    values.push(box.value);
  }
}
p.textContent = values;


// const select = document.querySelector('select');
// p.textContent = select.value;

const multiSelect = document.querySelector('select[multiple]');
// const values = [];
// for (const opt of multiSelect.options) {
//   if (opt.selected == true) {
//     values.push(opt.value);
//   }
// }
// p.textContent = values;

// const text = document.getElementById('textInput');
// text.addEventListener('input', () => {
//   p.textContent = text.value;
// });

const text = document.getElementById('textInput');
text.addEventListener('change', () => {
  p.textContent = text.value;
});

const select = document.querySelector('select');
select.addEventListener('change', () => {
  p.textContent = select.value;
});

const radio = document.getElementsByName('abcRadio');

for (const btn of radio) {
  // 各要素にchangeイベントを登録
  btn.addEventListener('change', () => {
    p.textContent = btn.value;
  });
}

// const form = document.querySelector('form');

// form.addEventListener('submit', (ev) => {
//   ev.preventDefault();
// });

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const p = form.firstElementChild; // formの最初の子要素 → p要素
  p.textContent = form.formInput.value; // form.formInput → input要素
});
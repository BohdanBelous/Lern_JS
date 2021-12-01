function l1t1() {
  alert('Сейчас выполним, не ссы');
  let a = prompt('Введите количество дней что бы узнать сколько же там секунд');
  let b = a * 24 * 60 * 60;
  alert('Ты ввел ' + a + ' и там ' + b + ' секунд');
}

function l1t2() {
  let a = prompt('Сейчас мы узнает квадрат числа');
  let b = a * a;
  alert(a + ' в квадрате равно ' + b);
}

function l1t3() {
  let x = 4;
  let y = 20;
  let z = 38;
  let k = 518;

  // Находим сумму чисел массива
  let sum = [x, y, z, k].reduce((a, b) => a + b, 0);
  // Делим её на длину массива
  let result = sum / [x, y, z, k].length;

  // let result = (x + y + z + k) / 4;
  alert('Среднее арифметическое будет ' + result);
}

function l1t4() {
  let x = parseInt(prompt('Введите длину первого катета'));
  let y = parseInt(prompt('Введите длину второго катета'));
  let s = (x * y) / 2;
  let p = Math.sqrt((x * x) + (y * y)) + x + y;
  alert('Площадь прямогульного треугольника со сторонами X: ' + x + ' и Y: ' + y + ' равна ' + s + ' , а его периметр: ' + Math.round(p));
}

function l0t0() {
  alert('ЕЩЕ НЕ ДЕЛАЛ');
}
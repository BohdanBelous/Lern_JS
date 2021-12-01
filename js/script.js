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

function l2t1() {
  function script(login) {
    if (login == null) {
      alert('Вход отменен')
    } else
    if (login != 'admin') {
      alert('Такого пользователя нет')
    } else
    if (login == 'admin') {
      function password(pass) {
        if (pass == null) {
          alert('Вход отменен')
        } else
        if (pass != 'qwerty') {
          alert('Пароль неверен')
        } else
        if (pass == 'qwerty') {
          alert('ПРИВЕТ!')
        }
      }
      password(pass = prompt('Введите пароль'))
    }
  }
  script(login = prompt('Введите логин'));
}

function l2t2() {
  let a = login = parseInt(prompt('Введите первое число'))
  let b = login = parseInt(prompt('Введите первое число'))
  let c = login = parseInt(prompt('Введите первое число'))

  function script() {
    if (a == b || a == c || b == c) {
      alert('Ошибка')
    } else {
      let sum = [a, b, c].reduce((a, b) => a + b, 0);
      let result = sum / [a, b, c].length;
      alert('Среднее арифметическое будет ' + result);
    }
  }
  script()
}

function l2t3() {
  alert('ЕЩЕ НЕ ДЕЛАЛ');
}

function l2t4() {
  let n = +prompt('Введите номер числа Фибоначчи') //корректно отображает до №103
  let a = 0
  let b = 1
  let fib
  if (n == 0) {
    alert('Нулевой номер ? Ты серьезно ?')
    return;
  }
  for (let i = 2; i <= n; i++) {
    fib = a + b
    a = b
    b = fib
  }
  alert('Число Фибоначчи №' + n + ' : ' + a)
}

function l2t5() {
  alert('ЕЩЕ НЕ ДЕЛАЛ');
}

function l2t6() {
  alert('ЕЩЕ НЕ ДЕЛАЛ');
}

function l0t0() {
  alert('ЕЩЕ НЕ ДЕЛАЛ');
}
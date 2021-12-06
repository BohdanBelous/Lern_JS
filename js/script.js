//result

const resultExit = document.querySelector(".result__button");
const resultBody = document.querySelector(".page__result");
const resultText = document.getElementById("result_text");

resultExit.addEventListener("click", function (e) {
  closeResult();
});
// resultBody.addEventListener("click", function (e) {
//   closeResult()
// });

function openResult() {
  document.body.classList.add("_lock");
  resultBody.classList.add("result_active");
}

function closeResult() {
  document.body.classList.remove("_lock");
  resultBody.classList.remove("result_active");
}

//LESSON 1------------------------------------------

function l1t1() {
  alert("Сейчас выполним, не ссы");
  let a = prompt("Введите количество дней что бы узнать сколько же там секунд");
  let b = a * 24 * 60 * 60;
  // alert("Ты ввел " + a + " и там " + b + " секунд");
  resultText.innerHTML = `Ты ввел ${a} и там ${b} секунд`;
  openResult();
}

function l1t2() {
  let a = prompt("Сейчас мы узнает квадрат числа");
  let b = a * a;
  // alert(a + " в квадрате равно " + b);
  resultText.innerHTML = ` ${a} в квадрате равно ${b}`;
  openResult();
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
  // alert("Среднее арифметическое будет " + result);
  resultText.innerHTML = `Среднее арифметическое будет равно ${result}`;
  openResult();
}

function l1t4() {
  let x = parseInt(prompt("Введите длину первого катета"));
  let y = parseInt(prompt("Введите длину второго катета"));
  let s = (x * y) / 2;
  let p = Math.sqrt(x * x + y * y) + x + y;
  // alert(
  //   "Площадь прямогульного треугольника со сторонами X: " +
  //   x +
  //   " и Y: " +
  //   y +
  //   " равна " +
  //   s +
  //   " , а его периметр: " +
  //   Math.round(p)
  // );
  resultText.innerHTML = `Площадь прямогульного треугольника со сторонами X: ${x} и Y: ${y} равна ${s} , а его периметр: ${Math.round(
    p
  )}`;
  openResult();
}

//LESSON 2------------------------------------------

function l2t1() {
  function script(login) {
    if (login == null) {
      alert("Вход отменен");
    } else if (login != "admin") {
      alert("Такого пользователя нет");
    } else if (login == "admin") {
      function password(pass) {
        if (pass == null) {
          alert("Вход отменен");
        } else if (pass != "qwerty") {
          alert("Пароль неверен");
        } else if (pass == "qwerty") {
          // alert("ПРИВЕТ!");
          resultText.innerHTML = "Привет!";
          openResult();
        }
      }
      password((pass = prompt("Введите пароль")));
    }
  }
  script((login = prompt("Введите логин")));
}

function l2t2() {
  let a = (login = parseInt(prompt("Введите первое число")));
  let b = (login = parseInt(prompt("Введите первое число")));
  let c = (login = parseInt(prompt("Введите первое число")));

  function script() {
    if (a == b || a == c || b == c) {
      alert("Ошибка");
    } else {
      let sum = [a, b, c].reduce((a, b) => a + b, 0);
      let result = sum / [a, b, c].length;
      // alert("Среднее арифметическое будет " + result);
      resultText.innerHTML = `Среднее арифметическое будет: ${result} `;
      openResult();
    }
  }
  script();
}

function l2t3() {
  let star = "*";
  resultText.innerHTML = "";
  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
      resultText.innerHTML += star;
    }
    resultText.innerHTML += "<br>";
  }

  // for (let i = 0; i < 10; i++) {
  //   for (let j = 0; j < i; j++) {
  //     document.write(star);
  //   }
  //   document.write("<br>");
  // }

  openResult();
}

function l2t4() {
  let n = +prompt("Введите номер числа Фибоначчи"); //корректно отображает до №103
  let a = 0;
  let b = 1;
  let fib;
  if (n == 0) {
    alert("Нулевой номер ? Ты серьезно ?");
    return;
  }
  for (let i = 2; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  // alert("Число Фибоначчи №" + n + " : " + a);
  resultText.innerHTML = `Число Фибоначчи № ${n} : ${a}`;
  openResult();
}

function l2t5() {
  let a = +prompt("Введите первое число");
  let b = +prompt("Введите второе");
  let sum = 0;
  let odd = [];
  if (a == b) {
    alert("Условия не выполнены !!!");
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum = sum + i;
      if (i % 2 != 0) {
        odd.push(i);
      }
    }
    // alert(
    //   "Сумма чисел от " +
    //   a +
    //   " до " +
    //   b +
    //   " включительно равняется " +
    //   sum +
    //   " . А вот все нечетные значения в этом промежутке : " +
    //   odd
    // );
    resultText.innerHTML = `Сумма чисел от ${a} до ${b} включительно равняется ${sum} . А вот все нечетные значения в этом промежутке : <br>`;
    for (let i = 0; i < odd.length; i++) {
      resultText.innerHTML += `${odd[i]}, `;
    }
    openResult();
  } else {
    for (let i = b; i <= a; i++) {
      sum = sum + i;
      if (i % 2 != 0) {
        odd.push(i);
      }
    }
    // alert(
    //   "Сумма чисел от " +
    //   b +
    //   " до " +
    //   a +
    //   " включительно равняется " +
    //   sum +
    //   " . А вот все нечетные значения в этом промежутке : " +
    //   odd
    // );
    resultText.innerHTML = `Сумма чисел от ${b} до ${a} включительно равняется ${sum} . А вот все нечетные значения в этом промежутке : <br>`;
    for (let i = 0; i < odd.length; i++) {
      resultText.innerHTML += `${odd[i]}, `;
    }
    openResult();
  }
}

function l2t6() {
  let n = +prompt("ну так введи 150 или какое то еще число");
  let arr = [];
  if (n > 1) {
    for (let i = 0; i <= n; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          count++;
          //якщо ми сюди попали тільки два рази (це 1 і саме себе)
        }
      }

      if (count == 2) {
        arr.push(i);
      }
    }

    // METKA: for (let i = 2; i <= n; i++) { // Для всех i...
    //   for (let j = 2; j < i; j++) { // проверить, делится ли число..
    //     if (i % j == 0) continue METKA; // не подходит, берём следующее
    //   }
    //   arr.push(i); // простое число
    // }

    // for (let i = 2; i <= n; i++) {
    //   let flag = 1;
    //   if (i > 2 && i % 2 != 0) {
    //     for (let j = 3; j * j <= i; j = j + 2) {
    //       if (i % j == 0) {
    //         flag = 0;
    //         break;
    //       }
    //     }
    //   } else if (i != 2) flag = 0;
    //   if (flag == 1) {
    //     arr.push(i);
    //   }
    // }

    // alert("Вот ваши простые числа : " + arr);
    resultText.innerHTML = "Вот ваши простые числа : <br>";
    for (let i = 0; i < arr.length; i++) {
      resultText.innerHTML += `${arr[i]}, `;
    }
    openResult();
  } else {
    alert("Шутишь ?");
  }
}

//LESSON 3------------------------------------------

function l3t1() {
  let a = [23, 2, 35, 6, 5, 87, 22, 45, 8, 98, 45, 68, 75, 45, 6, 9, 78, 7, 8];
  resultText.innerHTML = "Вот такой массив:<br> [";
  for (let i = 0; i < a.length; i++) {
    if (i < a.length - 1) {
      resultText.innerHTML += `${a[i]}, `;
    } else {
      resultText.innerHTML += `${a[i]}]`;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      a[i] = "*";
    }
  }
  resultText.innerHTML +=
    "<br> Индекс в массиве начинается с 0 по этому вот такой ответ : <br>[";
  for (let i = 0; i < a.length; i++) {
    if (i < a.length - 1) {
      resultText.innerHTML += `${a[i]}, `;
    } else {
      resultText.innerHTML += `${a[i]}]`;
    }
  }

  openResult();
}

function l3t2() {
  let n = +prompt("какой размер массива вы хотите?");
  let arr = [];
  if (isNaN(n) || n < 1) {
    alert("Ну не гони..Это же размер");
  } else {
    let counter = 0;

    function fun() {
      for (let i = counter; i < n; ) {
        let a = +prompt(`введите ${i + 1}-е число`);
        if (isNaN(a) || a < 0) {
          alert("не подходит");
          fun();
          break;
        } else {
          arr.push(a);
          i++;
          counter = i;
        }
      }
    }
    fun();

    if (arr.length >= 1) {
      resultText.innerHTML = "Ну вот такой вот массив получился: <br> [";
      for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
          resultText.innerHTML += `${arr[i]}, `;
        } else {
          resultText.innerHTML += `${arr[i]}]`;
        }
      }
      openResult();
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function l3t3() {
  let arr = new Array(5);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(10);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = getRandomInt(100);
    }
  }

  let maxSum = 0;
  let x;
  let minSum = Infinity;
  let y;

  resultText.innerHTML = "Имеем массив: <br>";
  for (let i = 0; i < arr.length; i++) {
    resultText.innerHTML += `<br> (i${i}) [`;
    for (let j = 0; j < arr[i].length; j++) {
      if (j < arr[i].length - 1) {
        resultText.innerHTML += `${arr[i][j]}, `;
      } else {
        resultText.innerHTML += `${arr[i][j]}] <br>`;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }

    if (maxSum < sum) {
      maxSum = sum;
      x = i;
    }

    if (minSum > sum) {
      minSum = sum;
      y = i;
    }
  }
  // let maxSum = 0;
  // let x;
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] > maxSum) {
  //     maxSum = a[i];
  //     x = i;
  //   }
  // }
  // let minSum = maxSum;
  // let y;
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] < minSum) {
  //     minSum = a[i];
  //     y = i;
  //   }
  // }

  resultText.innerHTML += `<br>Минимальная сумма чисел: ${minSum} в массиве с индексом ${y} <br> Максимальная сумма чисел: ${maxSum} в массиве с индексом ${x} `;
  openResult();
}
//LESSON 4------------------------------------------

function l4t1() {
  let arr = [10, 20, 30, 50, 235, 3000];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let checker = [...`${arr[i]}`];
    if (checker[0] == 1 || checker[0] == 2 || checker[0] == 5) {
      result.push(arr[i]);
    }
  }

  resultText.innerHTML = "Получаем: <br> [";
  for (let i = 0; i < result.length; i++) {
    if (i < result.length - 1) {
      resultText.innerHTML += `${result[i]}, `;
    } else {
      resultText.innerHTML += `${result[i]}]`;
    }
  }
  openResult();
}

function l4t2() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = "-";
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i]}-`;
  }
  resultText.innerHTML = result;
  openResult();
}

function l4t3() {
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let weekRu = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  resultText.innerHTML = "Вот так будут дни недели на английском: <br>";
  for (let i = 0; i < 7; i++) {
    if (week[i] == "Saturday" || week[i] == "Sunday") {
      resultText.innerHTML += `<span style="color:lightcoral"><b>${week[i]} - ${weekRu[i]}</b></span>  <br>`;
    } else {
      resultText.innerHTML += `${week[i]} - ${weekRu[i]} <br>`;
    }
  }
  openResult();
}

function l4t4() {
  let weekRu = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  let date = new Date();
  let day = weekRu[date.getDay() - 1];
  console.log(day);
  resultText.innerHTML = "Сегодня: <br><br>";
  for (let i = 0; i < 7; i++) {
    if (weekRu[i] == day) {
      resultText.innerHTML += `- <span style="color:rgb(136, 255, 0)"><i>${weekRu[i]}</i></span> - <br>`;
    } else {
      resultText.innerHTML += `${weekRu[i]} <br>`;
    }
  }
  openResult();
}

function l4t5() {
  let n = 1000;
  let res = n;
  let num = 0;

  for (let i; ; i++) {
    if (res < 50) {
      break;
    } else {
      res = res / 2;
      num++;
    }
  }
  console.log(res);
  console.log(num);
  resultText.innerHTML = `Что бы получить результат деления меньше 50 число n=${n} поделить на 2 нужно ${num} раз. А результат в итоге будет равен ${res} `;
  openResult();
}

function l0t0() {
  alert("ЕЩЕ НЕ ДЕЛАЛ");
}

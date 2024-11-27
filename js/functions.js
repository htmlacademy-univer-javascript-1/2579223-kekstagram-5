const checkStrLen = (str, maxLen) => str.length <= maxLen;

const isPalindrome = (str) => {
  let convertedStr = "";
  str = str.toUpperCase();
  str = str.replaceAll(" ", "");
  for (let i = str.length - 1; i >= 0; i -= 1) {
    convertedStr += str.at(i);
  }
  return convertedStr === str;
};

const takeNumber = (str) => {
  let numStr = "";
  str = str.toString();
  str = str.replaceAll(" ", "");
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str.at(i))) {
      continue;
    } else {
      numStr += str.at(i);
    }
  }
  return parseInt(numStr, 10);
};

//тесты для задачи 1
console.log("Тесты для 1-ой задачи: ");
console.log(
  'Тест №1 строка: "проверяемая строка", макс длина: 20, ожидаемый результат: true, фактический результат: ' +
    checkStrLen("проверяемая строка", 20)
);
console.log(
  'Тест №2 строка: "проверяемая строка", макс длина: 18, ожидаемый результат: true, фактический результат: ' +
    checkStrLen("проверяемая строка", 18)
);
console.log(
  'Тест №3 строка: "проверяемая строка", макс длина: 10, ожидаемый результат: false, фактический результат: ' +
    checkStrLen("проверяемая строка", 10)
);

// тесты для задачи 2
console.log("Тесты для 2-ой задачи: ");

console.log(
  'Тест №1 строка: "топот" ожидаемый результат: true, фактический результат: ' +
    isPalindrome("топот")
);
console.log(
  'Тест №2 строка: "ДоВод" ожидаемый результат: true, фактический результат: ' +
    isPalindrome("ДоВод")
);
console.log(
  'Тест №3 строка: "Кекс" ожидаемый результат: false, фактический результат: ' +
    isPalindrome("Кекс")
);
console.log(
  'Тест №4 строка: "Лёша на полке клопа нашёл" ожидаемый результат: true, фактический результат: ' +
    isPalindrome("Лёша на полке клопа нашёл")
);

// тесты для доп задачи
console.log("Тесты для доп. задачи: ");
console.log(
  'Тест №1 строка: "2023 год" ожидаемый результат: 2023, фактический результат: ' +
    takeNumber("2023 год")
);
console.log(
  'Тест №2 строка: "ECMAScript 2022" ожидаемый результат: 2022, фактический результат: ' +
    takeNumber("ECMAScript 2022")
);
console.log(
  'Тест №3 строка: "1 кефир, 0.5 батона" ожидаемый результат: 105, фактический результат: ' +
    takeNumber("1 кефир, 0.5 батона")
);
console.log(
  'Тест №4 строка: "агент 007" ожидаемый результат: 7, фактический результат: ' +
    takeNumber("агент 007")
);
console.log(
  'Тест №5 строка: "а я томат" ожидаемый результат: NaN, фактический результат: ' +
    takeNumber("а я томат")
);
console.log(
  'Тест №6 строка: "2023" ожидаемый результат: 2023, фактический результат: ' +
    takeNumber("2023")
);
console.log(
  'Тест №7 строка: "-1" ожидаемый результат: 1, фактический результат: ' +
    takeNumber("-1")
);
console.log(
  'Тест №8 строка: "1.5" ожидаемый результат: 15, фактический результат: ' +
    takeNumber("15")
);

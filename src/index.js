/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */

export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
  let min = Math.min(minFirst, minSecond);
  let max = Math.max(maxFirst, maxSecond);

  return min * max;
};

/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */

export const getSquareOfCircle = (radius) => {
  let radius2 = radius ** 2;

  return Math.PI * radius2;
};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */

export const getFixedValue = (number, accuracy) => {
  let accuracyWithE = Number(`1e${accuracy}`);

  return Math.round(number * accuracyWithE) / accuracyWithE;
};

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */

export const getFlooroCeil = (number) => {
  let result = 0;

  if (Math.trunc(number) % 2 === 0) {
    result = Math.floor(number);
  }
  else {
    result = Math.ceil(number);
  }

  return result;
};

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */

export const randomizer = (from, to) => {
  let min = from;
  let max = to;
  max++;

  return Math.floor(Math.random() * (max - min) + min);
};

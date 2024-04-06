function filterArray(numbers, value) {
  // Порожній масив для зберігання підходящих чисел
  let filteredArray = [];

  // Ітеруємося по кожному елементу масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Перевіряємо, чи поточний елемент більший за значення value
    if (numbers[i] > value) {
      // Якщо так, додаємо його до відфільтрованого масиву
      filteredArray.push(numbers[i]);
    }
  }

  // Повертаємо відфільтрований масив
  return filteredArray;
}

// Перевірка роботи функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

function slugify(title) {
  // Перетворюємо всі символи в нижній регістр
  let slug = title.toLowerCase();
  // Замінюємо пробіли на тире
  slug = slug.replace(/\s+/g, '-');
  return slug;
}

// Перевірка роботи функції
console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

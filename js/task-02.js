const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  list.append(li);
});

// const setList = ingredients.map((ingredient) =>
//   `<li class="list-item">${ingredient}</li>`)
//   .join(" ");
// list.innerHTML = setList;
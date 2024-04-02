const categories = document.querySelector("#categories");
const allElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length} `);

allElements.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElementsSum = category.querySelector("ul").children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elemenets: ${categoryElementsSum}`);
});

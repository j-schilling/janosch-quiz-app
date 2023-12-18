console.clear();

const main = document.querySelector('[data-js="main"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark__filled");
});

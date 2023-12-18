console.clear();

const main = document.querySelector('[data-js="main"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmark = document.querySelector('[data-js="bookmark"]');
const answer = document.querySelector('[data-js="answer"]');

let isAnswerButtonClicked = false;

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark__filled");
});

answerButton.addEventListener("click", () => {
  isAnswerButtonClicked = !isAnswerButtonClicked;
  isAnswerButtonClicked
    ? answer.removeAttribute("hidden")
    : answer.setAttribute("hidden", true);

  isAnswerButtonClicked
    ? (answerButton.textContent = "Hide answer")
    : (answerButton.textContent = "Show answer");
});

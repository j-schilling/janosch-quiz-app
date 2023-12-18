console.clear();
const MAX_CHARACTERS = 150;

const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const yourQuestionInput = document.querySelector('[data-js="your_question"]');
const remainingCharacters = document.querySelector(
  '[data-js="remaining_characters"]'
);

console.log(yourQuestionInput);
console.log(remainingCharacters);

yourQuestionInput.addEventListener("input", (event) => {
  remainingCharacters.textContent =
    MAX_CHARACTERS - parseInt(event.target.value.length);
});

// function calcRemainingCharacters(remainingCharacters, MAX_CHARACTERS) {
//   remainingCharacters = MAX_CHARACTERS - yourQuestionInput.value.lenght;
//   return remainingCharacters;
// }
// calcRemainingCharacters();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const yourQuestionInput = data.your_question;
  const yourAnswerInput = data.your_answer;
  const givenTag = data.tag;
  console.log(yourAnswerInput);
  console.log(yourQuestionInput);
  console.log(givenTag);

  main.append(newCard);

  newCard.innerHTML = `
  <p class="question">
          ${yourQuestionInput}
        </p>
        <button class="answer-button" data-js="answer-button">
          Show answer
        </button>
        <p hidden class="answer" data-js="answer">${yourAnswerInput}</p>
        <div class="topic-tags">
          <div class="topic-tag">#${givenTag}</div>
        </div>
        <div class="bookmark" alt="empty bookmark" data-js="bookmark"></div>
  `;

  form.reset();
});

console.clear();
const MAX_CHARACTERS = 150;

const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const yourQuestionInput = document.querySelector('[data-js="your_question"]');
const yourAnswerInput = document.querySelector('[data-js="your_answer"]');
const remainingCharactersQuestion = document.querySelector(
  '[data-js="remaining_characters_question"]'
);
const remainingCharactersAnswer = document.querySelector(
  '[data-js="remaining_characters_answer"]'
);

yourQuestionInput.addEventListener("input", (event) => {
  remainingCharactersQuestion.textContent =
    MAX_CHARACTERS - parseInt(event.target.value.length);
});

yourAnswerInput.addEventListener("input", (event) => {
  remainingCharactersAnswer.textContent =
    MAX_CHARACTERS - parseInt(event.target.value.length);
});

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

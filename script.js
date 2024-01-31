const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector('.form-todo input[type="text"]');
const todoList = document.querySelector(".todo-list");
const mainHeading = document.querySelector(".main-heading");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newtodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = ` <span class="text">${newtodoText}</span>
  <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
  </div>`;
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`;

  newLi.style.backgroundColor = randomColor;
  mainHeading.style.color = randomColor;
  todoInput.value = "";
  newLi.innerHTML = newLiInnerHTML;
  todoList.prepend(newLi);
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }

  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
});

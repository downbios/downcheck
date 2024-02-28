const tskForm = document.querySelector("#tsk-form");
const tskInput = document.querySelector("#tsk-title");
const tskUl = document.querySelector("#tsk-ul");

let tasks = [];

/* add new task on HTML */
function renderTaskOnHTML(tskTitle, done = false) {
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => {
    const liToToggle = event.target.parentElement;
    const spantotoggle = liToToggle.querySelector("span");
    const done = event.target.checked;
    if (done) {
      spantotoggle.style.textDecoration = "line-through";
    } else {
      spantotoggle.style.textDecoration = "none";
    }

    tasks = tasks.map((i) => {
      if (i.title === spantotoggle.textContent) {
        return {
          title: i.title,
          done: !i.done,
        };
      }
      return i;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // any time the status changes, save it to localstrage
    // console.log(tasks); /* console of change task */
  });
  input.checked = done;

  const span = document.createElement("span");
  span.textContent = tskTitle;
  if (done) {
    span.style.textDecoration = "line-through";
  }

  const button = document.createElement("button");
  button.textContent = "delete";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector("span").textContent;
    tasks = tasks.filter((i) => i.title !== titleToRemove);

    tskUl.removeChild(liToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // any time the task is removed, save it to localstrage
    // console.log(tasks);  /* console of delete task */
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  tskUl.appendChild(li);
}
window.onload = () => {
  const taskOnLocalStorage = localStorage.getItem("tasks");
  if (!taskOnLocalStorage) return;

  tasks = JSON.parse(taskOnLocalStorage);
  tasks.forEach((i) => {
    renderTaskOnHTML(i.title, i.done);
  });
};
tskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const tskTitle = tskInput.value;
  if (tskTitle.length < 5) {
    alert("your task is very short!");
    return;
  }
  /* Add new task on array */
  tasks.push({
    title: tskTitle,
    done: false,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks)); // any time the new task is add, save it to localstrage
  renderTaskOnHTML(tskTitle);
  tskInput.value = "";
});

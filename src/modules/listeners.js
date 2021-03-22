import { deleteProject, listContainer, selectListContainer, taskForm, formLogic } from './logic'

const displayModal = document.getElementById("launch-modal");
const closeModal = document.querySelector("#close-modal");
const openTaskForm = document.getElementById("newtask-b");
const deleteListButton = document.getElementById("data-delete-list-button");
const cancelForm = document.getElementById("cancel-form");

function listeners() {

  openTaskForm.addEventListener("click", () => {
    displayModal.classList.add('is-active');
  });

  closeModal.addEventListener("click", () => {
    displayModal.classList.remove('is-active');
  });

  cancelForm.addEventListener("click", () => {
    displayModal.classList.remove('is-active');
  });

  document.addEventListener("keydown", ({key}) => {
    if (key === "Escape") {
      displayModal.classList.remove('is-active')
    };
  })

  deleteListButton.addEventListener("click", deleteProject);

  listContainer.addEventListener("click", selectListContainer);

  taskForm.addEventListener("click", formLogic);

  taskForm.addEventListener("submit", formLogic);
}

export { listeners };
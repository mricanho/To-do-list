import { deleteProject, listContainer, selectListContainer } from './logic'

const displayModal = document.getElementById("launch-modal");
const closeModal = document.querySelector("#close-modal");
const openTaskForm = document.getElementById("newtask-b");
const deleteListButton = document.getElementById("data-delete-list-button");

function listeners() {
  openTaskForm.addEventListener("click", () => {
    displayModal.classList.add('is-active');
  });

  closeModal.addEventListener("click", () => {
    displayModal.classList.remove('is-active');
  });

  document.addEventListener("keydown", ({key}) => {
    if (key === "Escape") {
      displayModal.classList.remove('is-active')
    };
  })

  deleteListButton.addEventListener("click", deleteProject);

  listContainer.addEventListener("click", selectListContainer);
}

export { listeners };
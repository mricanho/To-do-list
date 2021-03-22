const displayModal = document.getElementById("launch-modal");
const closeModal = document.querySelector("#close-modal");
const openTaskForm = document.getElementById("newtask-b");

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
}

export { listeners };
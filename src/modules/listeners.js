import {
  deleteProject,
  listContainer,
  selectListContainer,
  taskForm,
  formLogic,
  submitList,
  clickHandler,
  editForm,
  editLogic,
  deleteTask,
  deleteForm,
  deleteLogic,
} from './logic';

const displayModal = document.getElementById('launch-modal');
const taskModal = document.getElementById('task-modal');
const closeModal = document.querySelector('#close-modal');
const closeModal2 = document.querySelector('#close-modal2');
const closeModal3 = document.querySelector('#close-modal3');
const openTaskForm = document.getElementById('newtask-b');
const deleteListButton = document.getElementById('data-delete-list-button');
const cancelForm = document.getElementById('cancel-form');
const cancelForm2 = document.getElementById('cancel-form2');
const cancelForm3 = document.getElementById('cancel-form3');
const newListForm = document.getElementById('data-new-list-form');
const deleteModal = document.getElementById('delete-modal');

const listeners = () => {
  openTaskForm.addEventListener('click', () => {
    displayModal.classList.add('is-active');
  });

  closeModal.addEventListener('click', () => {
    displayModal.classList.remove('is-active');
  });

  cancelForm.addEventListener('click', () => {
    displayModal.classList.remove('is-active');
  });

  document.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
      displayModal.classList.remove('is-active');
    }
  });

  closeModal2.addEventListener('click', () => {
    taskModal.classList.remove('is-active');
  });

  cancelForm2.addEventListener('click', () => {
    taskModal.classList.remove('is-active');
  });

  document.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
      taskModal.classList.remove('is-active');
    }
  });

  closeModal3.addEventListener('click', () => {
    deleteModal.classList.remove('is-active');
  });

  cancelForm3.addEventListener('click', () => {
    deleteModal.classList.remove('is-active');
  });

  document.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
      deleteModal.classList.remove('is-active');
    }
  });

  deleteListButton.addEventListener('click', deleteProject);

  listContainer.addEventListener('click', selectListContainer);

  taskForm.addEventListener('click', formLogic);

  editForm.addEventListener('click', editLogic);

  deleteForm.addEventListener('click', deleteLogic);

  document.addEventListener('click', deleteTask);

  taskForm.addEventListener('submit', formLogic);

  newListForm.addEventListener('submit', submitList);

  document.addEventListener('click', clickHandler);
};

export default listeners;

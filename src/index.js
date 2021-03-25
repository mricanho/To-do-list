import {
  render, defaultProject, editTask, defaultTask,
} from './modules/logic';
import { listeners } from './modules/listeners';

render();
listeners();
defaultProject();
defaultTask();
editTask();

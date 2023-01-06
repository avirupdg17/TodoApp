import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.state';

export const selectTodos = (state: any) => {
  //console.log(typeof state);
  return state.todos;
};

export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);

// export const selectAllTodos =
//   createFeatureSelector<ReadonlyArray<Todo>>('todos');

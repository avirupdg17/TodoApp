import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
} from './todo.actions';
import { TodoState } from './todo.state';

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const todoReducer = createReducer(
  //supply the initial state
  initialState,
  //add the new todo to todos array
  //state - initial state
  //
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),
  //remove todo from todo array
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id != id),
  })),
  //trigger loading todos
  on(loadTodos, (state) => ({ ...state, status: 'loading' })),
  //handle successfully loaded todos
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    error: '',
    status: 'success',
  })),
  //load failure
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);

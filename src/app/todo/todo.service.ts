import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private storageInitialised = false;

  constructor() {}

  async getTodos(): Promise<Todo[]> {
    console.log('get todo called');
    return new Promise((resolve, reject) => {
      JSON.parse(localStorage.getItem('todos') || '[]');
    });
  }

  async saveTodos(todos: Todo[]) {
    console.log('save is called');
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo } from '../state/todos/todo.actions';
import { selectAllTodos } from '../state/todos/todo.selectors';
import { TodoState } from '../state/todos/todo.state';
import { Todo } from './todo.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public todo = '';
  constructor(private store: Store<TodoState>) {}
  public allTodos$ = this.store.select(selectAllTodos);

  ngOnInit(): void {
    console.log('init called');
    //console.log(this.allTodos$);
    this.store.dispatch(loadTodos());
    //console.log(this.allTodos$);
  }

  addTodo() {
    this.store.dispatch(
      addTodo({
        content: this.todo,
      })
    );
    this.todo = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(
      removeTodo({
        id: todo.id,
      })
    );
  }
}

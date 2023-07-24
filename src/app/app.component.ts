import { Component } from '@angular/core';

interface List {
  title: string;
  checked: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: List[] = [
    { title: 'Hit the gym', checked: false },
    { title: 'Pay bills', checked: true },
    { title: 'Meet George', checked: false },
    { title: 'Buy eggs', checked: false },
    { title: 'Read a book', checked: false },
    { title: 'Organize office', checked: false },
  ];

  newTodo: string = '';

  addTodo() {
    if (this.newTodo) {
      this.todos.push({ title: this.newTodo, checked: false });
      this.newTodo = '';
    } else {
      alert('You must write something!');
    }
  }
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

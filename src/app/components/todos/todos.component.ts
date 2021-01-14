import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  // Todo is a type we made, like string or number.

  constructor(private todoService: TodoService) { }  // todoService is accessible from anywhere in the class


  // todoService holds data for each todo component.
  // Here, we tell todoService to make API call to get data.
  // We use an observable (which is like a promise), to assign that data to our local todos variable once the API call is finished.
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  // todos.filter() loops through every value in todos array, finds the index of the value passed in params,
  // and removes it from the array. When html renders the page using this array, it will be gone, thus it's deleted.
  deleteTodo(todo:Todo) {
    //Delete from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Delete from Server
    this.todoService.deleteTodo(todo).subscribe()
  }


   // Make request to API. Then add it once API finishes.
  // Note! The name of the todo won't appear like it does in the tutorial. Other Youtube comments are reporting the same issue.
  // There are similar glitches with checking and deleting todos that we have added.
  addTodo(todo: Todo) {
    console.log(todo);

    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  //have to pass the event up to the todo component through an emitter line 24
  //type any because we're not passing an id
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }

}

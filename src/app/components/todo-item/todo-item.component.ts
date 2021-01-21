import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //todo: todo is of TYPE Todo having those properties set when we established it in todo.ts
  @Input() todo: Todo; // when parent component is setting values in this component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  //Output = when this component is setting a value in the parent component
  //if you want to display properties inside this class' html file, you don't need @ anything

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClass() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    //toggle in UI
    todo.completed = !todo.completed;
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

    onDelete(todo) {
      this.deleteTodo.emit(todo)

  }

}

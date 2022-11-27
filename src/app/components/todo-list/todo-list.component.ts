import {Component, ViewChild} from '@angular/core';
import {TodoItemComponent} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  name: string = ''
  itemsArr: Array<string> = []
  @ViewChild(TodoItemComponent) TodoItemComponent: any;

  onSubmit() {
    this.name !== '' ? this.itemsArr.push(this.name) : false
    this.name = ''
  }

  deleteItem(id: number): void {
    this.TodoItemComponent.deleteItem(id)
  }

  editItem(): void {
    this.TodoItemComponent.editItem()
  }
}

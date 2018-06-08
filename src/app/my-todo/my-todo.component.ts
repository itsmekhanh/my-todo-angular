import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.css']
})
export class MyTodoComponent implements OnInit {

  todos = [
    { task: 'Finish this workshop', completed: false },
    { task: 'Fix P3 bugs on Xcel-Prod', completed: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Task } from './../model/Task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() task: Task = new Task("", "", "");

  @Output() taskRemoved = new EventEmitter();
  @Output() taskEdited = new EventEmitter();

  words: string[] = ["puto", "idiota"];

  constructor() { }

  ngOnInit(): void {
  }

  remove(): void {
    this.taskRemoved.emit(this.task);
  }
  edit(): void {
    this.taskEdited.emit(this.task);
  }

  verifyDirtyWords() {
    return this.words.some(word => this.task.name.includes(word));
  }
}

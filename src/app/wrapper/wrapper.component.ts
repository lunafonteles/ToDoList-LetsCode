import { Task } from './../model/Task';
import { PersistenceService } from './../persistence.service';
import { Component, OnInit } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  public tasks: Task[] = [];
  public valorTarefa: string = "";
  public filter: string = "";
  filterTask:Subject<string> = new Subject<string>();

  constructor(private persistenceService: PersistenceService) {
    this.tasks = this.persistenceService.loadFromLocalStorage();
   }

  ngOnInit(): void {
    this.filterTask.pipe(debounceTime(100))
    .subscribe(text => this.tasks = this.persistenceService.searchTask(text));
  }
  
  onFilterChange(newValue: string){
  this.filterTask.next(newValue);
  }

  add(task: any): void {
    const localTask = new Task(uuidv4(), task.value, task.value)
    this.tasks.push(localTask);
    this.persistenceService.addToLocalStorage(localTask)
  }

  tratarRemocao(removida: any) {
    this.tasks = this.tasks.filter(tarefa => tarefa != removida);

  }

  tratarEdicao(editada: any) {
    this.tasks = this.tasks.filter(tarefa => tarefa != editada);
    this.persistenceService.loadToLocalStorage(this.tasks);

  }
}

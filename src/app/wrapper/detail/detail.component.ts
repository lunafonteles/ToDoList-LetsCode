import { PersistenceService } from './../../persistence.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

task: Task;
  constructor(private route: ActivatedRoute, persistenceService: PersistenceService) { 
    const taskId = this.route.snapshot.params["id"];
    this.task = persistenceService.loadTask(taskId);
  }

  ngOnInit(): void {
    
  }

}

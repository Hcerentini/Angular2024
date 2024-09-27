import { Component, Injectable, Input } from '@angular/core';
import { TarefaComponent } from "./tarefa/tarefa.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TarefaComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}


  get selectUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloselAddTask() {
    this.isAddingTask = false;
  }
}

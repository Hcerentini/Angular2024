import { Component, Input } from '@angular/core';
import { TarefaComponent } from "./tarefa/tarefa.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TarefaComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId:'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of angular',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId:'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online website',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId:'u3',
      title: 'Prepare issue template',
      summary: 'prepare issue template',
      dueDate: '2025-12-31'
    },
  ];

  get selectUserTasks() {
    return this.tasks.filter((task) => task.userId  === this.userId);
  }
}

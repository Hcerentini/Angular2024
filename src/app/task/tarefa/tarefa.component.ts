import { Component, Input, inject } from '@angular/core';
import { type Task } from './tarefa.model';
import { CardComponent } from "../../shares/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  @Input({required:true}) task!: Task;
  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}

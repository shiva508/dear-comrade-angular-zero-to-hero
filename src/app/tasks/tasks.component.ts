import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { type NewTask, type Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  addNewTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user?.id!);
  }

  workCompleted(id: string) {
    this.tasksService.removeTask(id);
  }

  enableAddNewTask() {
    this.addNewTask = !this.addNewTask;
  }

  onCancleHandler() {
    this.addNewTask = false;
  }

  onAddingNewTask(taskData: NewTask) {
    this.tasksService.addNewTask(taskData, this.user?.id!);
  }
}

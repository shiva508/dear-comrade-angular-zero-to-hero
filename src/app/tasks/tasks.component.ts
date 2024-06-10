import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { type NewTask, type Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';

const dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  tasks: Task[] = dummyTasks;
  addNewTask: boolean = false;

  get selectedUserTasks() {
    return this.tasks.filter((tasks) => tasks.userId === this.user?.id)!;
  }

  workCompleted(id: string) {
    this.tasks = this.tasks.filter((tasks) => tasks.id !== id)!;
  }

  enableAddNewTask() {
    this.addNewTask = !this.addNewTask;
  }

  onCancleHandler() {
    this.addNewTask = false;
  }

  onAddingNewTask(taskData: NewTask) {
    console.log(taskData);
    this.onCancleHandler();
    this.tasks.push({
      id: new Date().getDate().toString(),
      userId: this.user?.id!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
  }
}

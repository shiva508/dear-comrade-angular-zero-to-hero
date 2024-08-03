import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();
  constructor() {}

  addNewTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTask(taskId: string, status: TaskStatus) {
    console.log(taskId, status);
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: status,
          };
        }
        return task;
      })
    );
  }
}

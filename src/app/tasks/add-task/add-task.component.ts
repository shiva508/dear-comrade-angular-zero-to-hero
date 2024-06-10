import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancle = new EventEmitter();

  @Output() addTaskObj = new EventEmitter<NewTask>();

  titleInput = '';
  summaryInput = '';
  dueDateInput = '';

  /*titleInput = signal('');
  summaryInput = signal('');
  dueDateInput = signal('');
  */
  cancleEventHandler() {
    this.cancle.emit();
  }

  onSubmit() {
    this.addTaskObj.emit({
      title: this.titleInput,
      summary: this.summaryInput,
      dueDate: this.dueDateInput,
    });
  }
}

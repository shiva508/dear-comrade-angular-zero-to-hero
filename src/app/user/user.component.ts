import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() selected = new EventEmitter<string>();

  onSelectUser() {
    this.selected.emit(this.id);
    console.log(this.id);
  }

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selected = new EventEmitter<string>();

  onSelectUser() {
    this.selected.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}

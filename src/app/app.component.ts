import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dear-comrade-angular-zero-to-hero';
  users = DUMMY_USERS;
  user!: User;
  selectedUserId!: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.user = DUMMY_USERS.find((user) => user.id === id)!;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dear-comrade-angular-zero-to-hero';
  users = DUMMY_USERS;
  userId = '';
  userName: string = '';

  onSelectUser(id: string) {
    console.log(id);
    this.userId = id;
    this.userName = DUMMY_USERS.find((user) => user.id === this.userId)?.name!;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    FormsModule,
  ],
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

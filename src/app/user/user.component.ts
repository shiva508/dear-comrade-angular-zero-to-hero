import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[1]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    this.selectedUser().name = 'Unknown';
    this.selectedUser.set(DUMMY_USERS[2]);
    console.log('Clicked');
  }
}

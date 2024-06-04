import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //avatar = input<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  onSelectUser() {}
  imagePath = computed(() => 'assets/users/' + this.avatar());
}

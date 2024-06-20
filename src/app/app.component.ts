import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}

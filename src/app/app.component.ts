import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RectComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  rectSize = {
    width: '100',
    height: '100',
  };
}

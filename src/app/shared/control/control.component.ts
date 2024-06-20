import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClicj()' },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  //@HostListener('click') doSoething(){console.log('HI');}
  label = input.required<String>();
  dynamicData = inject(ElementRef);

  onClicj() {
    console.log('HI');
    console.log(this.dynamicData);
  }
}

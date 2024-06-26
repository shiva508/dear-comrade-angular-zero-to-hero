import {
  AfterContentInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  afterNextRender,
  afterRender,
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
export class ControlComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    //console.log('Method not implemented.');
  }
  constructor() {
    afterRender(() => {
      //console.log('afterRender');
    });
    afterNextRender(() => {
      //console.log('afterNextRender');
    });
  }
  // @HostBinding('class') className = 'control';
  //@HostListener('click') doSoething(){console.log('HI');}
  label = input.required<String>();
  dynamicData = inject(ElementRef);

  onClicj() {
    //console.log(this.dynamicData);
  }
}

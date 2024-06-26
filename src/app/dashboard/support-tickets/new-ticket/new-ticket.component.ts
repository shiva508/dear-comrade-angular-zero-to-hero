import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  contentChild,
  output,
  viewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @Output() ticket = new EventEmitter<{ title: string; request: string }>();
  add = output<{ title: string; request: string }>();
  ngAfterViewInit(): void {
    //console.log('Method not implemented.');
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    //console.log('Method not implemented.');
    //throw new Error('Method not implemented.');
  }
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form');
  @ContentChild('#input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  private controlAr =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  /*onSubmit(
    titleInput: HTMLInputElement,
    requetInput: HTMLTextAreaElement,
    form: HTMLFormElement
  ) {
    console.log(titleInput.value, requetInput.value);
    form.reset();
  }*/
  onSubmit(titleInput: HTMLInputElement, requetInput: HTMLTextAreaElement) {
    //this.ticket.emit({ title: titleInput.value, request: requetInput.value });
    this.add.emit({ title: titleInput.value, request: requetInput.value });
    //console.log(titleInput.value, requetInput.value);
    //console.log(this.control);
    //console.log(this.controlAr()?.nativeElement);
    this.form()?.nativeElement.reset();
  }
}

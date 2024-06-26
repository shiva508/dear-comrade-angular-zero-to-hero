import { Component, Input, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  //@Input({ required: true }) ticket?: Ticket;
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);
  closeTicket = output<string>();

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onCloseTicket() {
    this.closeTicket.emit(this.ticket().id);
  }
}

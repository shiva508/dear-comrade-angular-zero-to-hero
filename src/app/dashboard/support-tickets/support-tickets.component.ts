import { Component, Input } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './ticket/ticket.model';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [TicketComponent, NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  addTicket(inputTicket: { title: string; request: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      request: inputTicket.request,
      status: 'open',
      title: inputTicket.title,
    };
    this.tickets.push(ticket);
  }
  closeTicket(id: string) {
    console.log(id);
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}

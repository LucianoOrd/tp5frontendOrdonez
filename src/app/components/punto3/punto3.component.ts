import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component {

  ticket: Ticket;
  ticketExt: number;
  ticketLoc: number;
  ticketTot: number;
  recaudadoExt: number;
  recaudadoLoc: number;
  recaudadoTot: number;
  arrayTickets = new Array<Ticket>;

  constructor(private ticketService: TicketService) {
    this.ticket = new Ticket();
    this.ticketExt = 0;
    this.ticketLoc = 0;
    this.ticketTot = 0;
    this.recaudadoExt = 0;
    this.recaudadoLoc = 0;
    this.recaudadoTot = 0;
    this.arrayTickets = new Array<Ticket>();
    this.obtenerTickets();
  }

  //Se registran los tickets
  registrarTicket(): void {
    if (this.ticket._id != null) {
      //Si la id del ticket no es nula, significa que el ticket no es nueva y se habilita el boton para editar el ticket
      this.editarTicket(this.ticket);
    } else {
      //Sino se agrega
      this.ticketService.agregarTicket(this.ticket);      
    }
    //Se inicializan los tickets para poder obtener las estadisticas
    this.ticket = new Ticket;
    this.obtenerTickets();
  }

  calcularPrecio(): void {
    //Si el tipo espectador y el precio real son nulos, significa que no tienen valor y no se calcula
    if (this.ticket.tipoEspectador === null || this.ticket.precioReal === null) {
      return
    }
    //Se crea una nueva variable para calcular el precio total dependiendo el tipo espectador
    let total = this.ticket.precioReal;

    //Si el tipo espectador es local, se calcula el descuento de 20%
    if (this.ticket.tipoEspectador === "l") {
      total = total - this.ticket.precioReal * 0.20;
    }
    this.ticket.precioCobrado = total;
  }

  obtenerTickets(): void {
    /* this.ticketExt = 0;
    this.ticketLoc = 0;
    this.ticketTot = 0;
    this.recaudadoExt = 0;
    this.recaudadoLoc = 0;
    this.recaudadoTot = 0;
    this.arrayTickets = this.ticketService.obtenerTickets();
    this.arrayTickets.forEach(t => {
      if (t.tipoEspectador === "e") {
        this.ticketExt++;
        this.recaudadoExt += t.precioCobrado;
      }
      else if (t.tipoEspectador === "l") {
        this.ticketLoc++;
        this.recaudadoLoc += t.precioCobrado;
      }
      this.ticketTot++;
      this.recaudadoTot += t.precioCobrado;
    }) */
  }

  editarTicket(t: Ticket): void {
    this.ticketService.editarTicket(t);
  }

  mostrarTicket(t: Ticket): void {
    this.ticket = new Ticket(t._id, t.dni, t.precioReal, t.tipoEspectador, t.fechaCobro, t.precioCobrado)
  }
}

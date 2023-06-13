import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { FormsModule } from '@angular/forms';
import { EspectadorService } from 'src/app/services/espectador.service';
import { Espectador } from 'src/app/models/espectador';


@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component {

  ticket: Ticket;
  espectador: Espectador;
  arrayTickets = new Array<Ticket>;
  arrayEspectador = new Array<Espectador>;
  categoria !: String;



  constructor(private ticketService: TicketService, private espectadorService: EspectadorService) {
    this.ticket = new Ticket();
    this.espectador = new Espectador();
    this.arrayTickets = new Array();
    this.arrayEspectador = new Array();
    this.obtenerTickets();
    this.obtenerTicketsEspectador();
    this.obtenerEspectadores();
  }

  public limpiarCampos(){
    this.ticket = new Ticket();
  }

  public agregarEditarTicket() {
    if (this.ticket._id != null) {
      this.editarTicket(this.ticket);
    } else {
      this.ticketService.addTicket(this.ticket).subscribe();
      this.ticket = new Ticket;
    }

  }

  public obtenerTickets() {
    this.ticketService.getTickets().subscribe(
      (result) => {
        this.arrayTickets = new Array<Ticket>();
        var aux: Ticket = new Ticket();
        result.forEach((ticket: Ticket) => {
          Object.assign(aux, ticket);
          this.arrayTickets.push(aux);
          aux = new Ticket();
        });
        console.log(this.arrayTickets);
      },
      (error) => { console.log(error); }
    )
  }

  public obtenerTicketsEspectador() {
    this.ticketService.getTicketsEspectador(this.categoria).subscribe(
      (result) => {
        this.arrayTickets = new Array<Ticket>();
        var aux: Ticket = new Ticket();
        result.forEach((ticket: Ticket) => {
          Object.assign(aux, ticket);
          this.arrayTickets.push(aux);
          aux = new Ticket();
        });
        console.log(this.arrayTickets);
      },
      (error) => { console.log(error); }
    )
  }

  public obtenerEspectadores() {
    this.espectadorService.getEspectadores().subscribe(
      (result) => {
        console.log(result);
        var aux: Espectador = new Espectador();
        result.forEach((espectador: Espectador) => {
          Object.assign(aux, espectador);
          this.arrayEspectador.push(aux);
          aux = new Espectador();
        });

      },
      (error) => { console.log(error); }
    )
  }

  public eliminarTicket(tic: Ticket) {
    this.ticketService.deleteTicket(tic).subscribe();
  }

  public editarTicket(ticket: Ticket) {
    this.ticketService.editTicket(ticket).subscribe();
  }

  mostrarTicket(tic: Ticket) {
    this.ticket = new Ticket(tic._id, tic.precioTicket, tic.categoriaEspectador, tic.fechaCompra, tic.espectador)
  }
}

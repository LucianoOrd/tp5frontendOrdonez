import { Component, OnInit } from '@angular/core';
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
export class Punto3Component implements OnInit{

  ticket: Ticket;
  espectador: Espectador;
  arrayTickets = new Array<Ticket>;
  arrayEspectador = new Array<Espectador>;
  categoria !: String;
  fecha: string;
  espectadorSelect: Espectador;



  constructor(private ticketService: TicketService, private espectadorService: EspectadorService) {
    this.ticket = new Ticket();
    this.espectadorSelect = new Espectador();
    this.fecha = this.formatDate(new Date);
    this.espectador = new Espectador();
    this.arrayTickets = new Array();
    this.arrayEspectador = new Array();
    this.obtenerTickets();
    this.obtenerTicketsEspectador();
    this.obtenerEspectadores();
  }

  ngOnInit(): void{
    this.limpiarCampos();
  }

  public limpiarCampos() {
    this.ticket = new Ticket();
    this.espectadorSelect = new Espectador();
    this.fecha = this.formatDate(new Date);
  }

  public agregarEditarTicket() {
    this.ticket.fechaCompra = new Date(this.fecha);
    this.ticket.espectador = new Espectador(this.espectadorSelect._id,this.espectadorSelect.nombre, this.espectadorSelect.apellido, this.espectadorSelect.dni, this.espectadorSelect.email);
    //editarTicket
    if (this.ticket._id != null) {
      this.editarTicket(this.ticket);
    }
    //guradar ticket 
    else 
    {
      this.ticketService.addTicket(this.ticket).subscribe();
    }
    this.obtenerTickets();
    this.limpiarCampos();
  }

  public obtenerTickets() {
    this.ticketService.getTickets().subscribe(
      (result) => {
        this.arrayTickets = new Array<Ticket>();
        var aux: Ticket = new Ticket();
        result.forEach((ticket: Ticket) => {
          Object.assign(aux, ticket);
          aux.fechaCompra = new Date(aux.fechaCompra);
          this.arrayTickets.push(aux);
          aux = new Ticket();
        });
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
          aux.fechaCompra = new Date(aux.fechaCompra);
          this.arrayTickets.push(aux);
          aux = new Ticket();
        });
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
    this.obtenerTickets();
    
  }

  public editarTicket(ticket: Ticket) {
    this.ticketService.editTicket(ticket).subscribe();
    this.obtenerTickets();
  }

  mostrarTicket(tic: Ticket) {

    let espectadorAux = this.arrayEspectador.find(esp => esp._id === tic.espectador._id);
    if (espectadorAux !== undefined){
      this.espectadorSelect = espectadorAux;
    }
    this.fecha = this.formatDate(tic.fechaCompra);
    this.ticket = new Ticket(tic._id, tic.precioTicket, tic.categoriaEspectador, tic.fechaCompra, this.espectadorSelect)
  }

  formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}



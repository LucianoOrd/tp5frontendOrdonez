import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  urlBase:string = "http://localhost:3000/api/ticket";
  arrayTicket: Array<Ticket>;


  constructor(private _http:HttpClient) {
    this.arrayTicket = new Array<Ticket>();
  }

  generarId(): string {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  agregarTicket(tic: Ticket): void {
    tic._id = this.generarId();
    this.arrayTicket.push(tic);
  }

  obtenerTickets():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.get(this.urlBase , httpOptions );
  }

  obtenerTicketsEspectador():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.get(this.urlBase+"/espectador" , httpOptions );
  }

  deleteTicket(ticket:Ticket):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.delete(this.urlBase + ticket._id , httpOptions );
  }

  editarTicket(t: Ticket): void{
    this.arrayTicket = this.arrayTicket.map(tic => tic._id === t._id ? t : tic)
  }
}

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

  constructor(private _http:HttpClient) {
  }

  addTicket(ticket: Ticket):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    var body = JSON.stringify(ticket);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  getTickets():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.get(this.urlBase , httpOptions );
  }

  getTicketsEspectador(categoria: String):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.get(this.urlBase+"/espectador/"+categoria, httpOptions );
  }

  deleteTicket(ticket:Ticket):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.delete(this.urlBase +"/"+ ticket._id , httpOptions );
  }

  editTicket(ticket: Ticket): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    var body = JSON.stringify(ticket);
    return this._http.put(this.urlBase +"/"+ ticket._id, body, httpOptions);
  }
}

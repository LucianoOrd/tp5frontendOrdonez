import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  urlBase:string = "http://localhost:3000/api/espectador";
  
  constructor(private _http:HttpClient) { }

  public getEspectadores():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.get(this.urlBase , httpOptions );
  }
}

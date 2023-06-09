import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';


@Injectable({
  providedIn: 'root'
})
export class DivisaService {
  
  urlBase:string = "http://localhost:3000/api/transaccion"

  constructor(private _http:HttpClient) {  }

  addTransaccion(transaccion:Transaccion):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    var body = JSON.stringify(transaccion);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  getTransacciones():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.get(this.urlBase , httpOptions );
  }

  getTransaccionMonedas(moneda: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };   
    return this._http.get(this.urlBase+"/divisas/"+moneda , httpOptions );
  }

  urlAPI = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';

  public getConversion(cantOrigen:number,monOrigen:string,monDestino:string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key': 'e1930b6116msh27ef2872a9fd0b0p10a1b8jsn63dd24b20c1f'
      })
    };

    const params = new HttpParams()
      .set("from-value", cantOrigen)
      .set("from-type", monOrigen)
      .set("to-type", monDestino);

    return this._http.post(this.urlAPI, params, httpOptions);
  }
}
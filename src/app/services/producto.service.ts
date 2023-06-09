import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlBase:string = "http://localhost:3000/api/producto";
  constructor(private _http:HttpClient) {  }

  getProductoDestacado():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };   
    return this._http.get(this.urlBase+"/destacados", httpOptions );
  }
  
  addProducto(producto:Producto):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    var body = JSON.stringify(producto);
    return this._http.post(this.urlBase, body, httpOptions);
  }
}

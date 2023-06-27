import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component {

  transaccion!: Transaccion;
  arrayTransaccion !: Array<Transaccion>;
  monedaOr !: string;
  monedaDes !: string;
  constructor(private transaccionService: DivisaService){
    this.arrayTransaccion = new Array();
    this.transaccion = new Transaccion;
  }


  public agregarTransaccion(){
    this.transaccionService.addTransaccion(this.transaccion).subscribe()
    this.transaccion = new Transaccion;
  }

  public obtenerTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      (result) => {
        this.arrayTransaccion = new Array<Transaccion>;
        result.forEach((element: Transaccion) => {
          let vTransaccion: Transaccion = new Transaccion();
          Object.assign(vTransaccion, element);
          this.arrayTransaccion.push(vTransaccion);
        });
        console.log(this.arrayTransaccion);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  public obtenerTransaccionesMoneda(){
    this.transaccionService.getTransaccionMonedas(this.monedaOr, this.monedaDes).subscribe(
      (result) => {
        this.arrayTransaccion = new Array<Transaccion>;
        result.forEach((element: Transaccion) => {
          let vTransaccion: Transaccion = new Transaccion();
          Object.assign(vTransaccion, element);
          this.arrayTransaccion.push(vTransaccion);
        });
        console.log(this.arrayTransaccion);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  public calculoTasaConversion(){
    let calculo: number;
    if(this.transaccion.cantidadOrigen >0 && this.transaccion.tasaConversion >0){
      calculo = this.transaccion.cantidadOrigen * this.transaccion.tasaConversion;
      this.transaccion.cantidadDestino = calculo;
      console.log("entre");
    }
  }

  public convertir() {
    this.transaccionService.getConversion(this.transaccion.cantidadOrigen, this.transaccion.monedaOrigen, this.transaccion.monedaDestino).subscribe(
      result => { 
        this.transaccion.cantidadDestino = result["result"] 
        this.agregarTransaccion();
      },
      error => { console.log(error) }
    )
  }
  
}

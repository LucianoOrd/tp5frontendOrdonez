import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component {
  
  listaProd = [
    {
      nombre: "Notebook Lenovo Ideapad", descripcion: "disco 256GB, 15 pulgadas", img: "../../../assets/notebook.jpg", precio: 45.5
    },

    {
      nombre: "Teclado Redragon K522", descripcion: "Doble Inyección, Mecanico", img: "../../../assets/teclado-redragon.jpg", precio: 12
    },

    {
      nombre: "Mouse Redragon M908", descripcion: "12 Botones, Cable 1.8m", img: "../../../assets/mouse-redragon.jpg", precio: 10
    },

    {
      nombre: "Auriculares HyperX", descripcion: "Innalambricos, Cancelacion de Ruido", img: "../../../assets/auriculares-hyperx.jpg", precio: 20
    },

    {
      nombre: "Gabinete Performance", descripcion: "Paneles de vidrio, 335x200x435mm", img: "../../../assets/gabinete.jpg", precio: 9
    },

    {
      nombre: "Microfono Noga MIC-ST700", descripcion: "Soporte de metal", img: "../../../assets/microfono.jpg", precio: 5
    },

  ];

  arrayProducto: Array<Producto>;
  producto: Producto;
  arrayCarrito: Array<any>;

  total: number;

  constructor(private productoService: ProductoService) {
    this.arrayCarrito = new Array();
    this.arrayProducto = new Array();
    this.producto = new Producto();
    this.total = 0;
    this.obtenerDestacados();
  }


  agregarCarrito(producto: any): void {
    this.arrayCarrito.push(producto);
    this.total = this.total + producto.precio;
    console.log(this.arrayCarrito);
  }

  public obtenerDestacados() {
    this.productoService.getProductoDestacado().subscribe(
      (result) => {
        var aux: Producto = new Producto();
        result.forEach((producto:Producto) => {
          Object.assign(aux,producto);
          this.arrayProducto.push(aux);
          aux = new Producto();
        });
        console.log(this.arrayProducto);
      },
      (error) => { console.log(error); }
    )
  }

  public agregarProducto(){
    this.productoService.addProducto(this.producto).subscribe()
    this.producto = new Producto;
    this.obtenerDestacados();
  }


}

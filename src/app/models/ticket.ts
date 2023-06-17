import { Espectador } from "./espectador";

export class Ticket {
    _id: string;
    precioTicket: number;
    categoriaEspectador: string;
    fechaCompra: Date;
    espectador!: Espectador;

    constructor(id?: string, precioTicket?: number, categoriaEspectador?: string, fechaCompra?: Date, espectador?: Espectador) {
        this._id = id!;
        this.precioTicket = precioTicket!;
        this.categoriaEspectador = categoriaEspectador!;
        this.fechaCompra = fechaCompra!;
        if (espectador == null){
            espectador = new Espectador();
        }else{
            espectador = new Espectador(espectador!.nombre, espectador!.apellido, espectador!.dni, espectador!.email);
        }
        
    }
}

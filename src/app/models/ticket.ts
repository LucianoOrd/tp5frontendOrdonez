import { Espectador } from "./espectador";

export class Ticket {
    _id!: string;
    precioTicket!: number;
    categoriaEspectador!: string;
    fechaCompra!: Date;
    espectador!: Espectador;

    constructor(id?: string, precioTicket?: number, categoriaEspectador?: string, fechaCompra?: Date, espectador?: Espectador) {
        this._id = id!;
        this.precioTicket = precioTicket!;
        this.categoriaEspectador = categoriaEspectador!;
        this.fechaCompra = fechaCompra!;
        this.espectador = new Espectador;
    }
}

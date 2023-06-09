export class Ticket {
    _id!: string;
    dni!: number;
    precioReal!: number;
    tipoEspectador!: string;
    fechaCobro!: Date;
    precioCobrado!: number;

    constructor(id?: string, dni?: number, precioReal?: number, tipoEspectador?: string, fechaCobro?: Date, precioCobrado?: number) {
        this._id = id!;
        this.dni = dni!;
        this.precioReal = precioReal!;
        this.tipoEspectador = tipoEspectador!;
        this.fechaCobro = fechaCobro!;
        this.precioCobrado = precioCobrado!;
    }
}

export class Transaccion {
    monedaOrigen!: string;
    monedaDestino!: string;
    cantidadOrigen!: number;
    cantidadDestino!: number;
    emailCliente!: string;
    tasaConversion!: number;

    constructor(monedaOrigen?: string, monedaDestino?: string, cantidadOrigen?: number, cantidadDestino?: number, emailCliente?: string, tasaConversion?: number) {
        this.monedaOrigen = monedaOrigen!;
        this.monedaDestino = monedaDestino!;
        this.cantidadOrigen = cantidadOrigen!;
        this.cantidadDestino = cantidadDestino!;
        this.emailCliente = emailCliente!;
        this.tasaConversion = tasaConversion!;
    }
}

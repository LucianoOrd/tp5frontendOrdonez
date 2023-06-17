export class Espectador {
    _id!: string;
    nombre!: string;
    apellido!: string;
    dni!: string;
    email!: string;

    constructor(_id?:string,nombre?: string, apellido?: string, dni?: string, email?: string) {
        this._id = _id!;
        this.nombre = nombre!;
        this.apellido = apellido!;
        this.dni = dni!;
        this.email = email!;
    }
}

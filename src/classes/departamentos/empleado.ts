import { Vehiculo } from "../vehiculos/vehiculo";
export  class Empleado {
    protected _dni: string;
    protected _nombre: string;
    protected _salario: number;
    protected _numeroSerie: string;
    constructor ( dni: string, nombre: string, salario: number, numeroSerie: string ) {
        this._dni = dni;
        this._nombre = nombre;
        this._salario = salario;
        this._numeroSerie = numeroSerie
    }

    public get dni(): string {
        return this._dni;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get salario(): number {
        return this._salario;
    }

    public get numeroSerie(): string {
        return this._numeroSerie;
    }


 

    salarioTotal(): number {
        return this._salario * 0.18;
    }
}



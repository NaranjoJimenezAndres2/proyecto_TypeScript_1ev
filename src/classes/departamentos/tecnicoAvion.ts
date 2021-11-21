import { Empleado } from './empleado';
import { Vehiculo } from "../vehiculos/vehiculo";

export class TecnicoAvion extends Empleado {
    private _modelo: string;
    private _horasDeVuelo: number;
    private _horasDeMantenimiento: number;
    private _aviones: Array<Vehiculo>;
    constructor(dni: string, 
        nombre: string, 
        salario: number, 
        numeroSerie: string,
        modelo: string,
        horasDeVuelo: number, 
        horasDeMantenimiento: number)
        {
        super(dni, nombre, salario, numeroSerie);
        this._horasDeVuelo = horasDeVuelo;
        this._horasDeMantenimiento = horasDeMantenimiento;
        this._modelo = modelo;
        this._aviones =  new Array<Vehiculo>();
    }
    get horasDeVuelo(): number {
        return this._horasDeVuelo;
    }
    get horasDeMantenimiento(): number {
        return this._horasDeMantenimiento;
    }
    get modelo(): string {
        return this._modelo;
    }
    set horasDeVuelo(horasDeVuelo: number) {
        this._horasDeVuelo = horasDeVuelo;
    }
    

    public addVehiculo(vehiculo: Vehiculo) {
        this._aviones.push(vehiculo);
      }

    public getModelo(): Array<Vehiculo> {
        return this._aviones;
    }
    public setHorasDeVuelo() {
        return this._horasDeVuelo 
    }

    public setHorasDeMantenimiento(horasDeMantenimiento: number): void {
        this._horasDeMantenimiento = horasDeMantenimiento;
    }

    //Sueldo del empleado
    public calcularSueldo(): number {
        return this._salario + this._horasDeVuelo * 100 + this._horasDeMantenimiento * 100;
    }

    public toString(): string {
        return super.toString() + `\nHoras de vuelo: ${this._horasDeVuelo}\nHoras de mantenimiento: ${this._horasDeMantenimiento}\nModelo: ${this._aviones}`;
    }
   


}
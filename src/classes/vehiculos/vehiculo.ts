import { Empleado } from "../departamentos/empleado";
import { TecnicoAvion } from "../departamentos/tecnicoAvion";

export class Vehiculo {
    protected _numeroSerie: string;
    protected _modelo: string;
    protected _presupuesto: number;
    protected _posicionMundial: number;
    protected _personal: Array<Empleado>;

    constructor(numeroSerie: string, 
        modelo: string, 
        presupuesto: number, 
        posicionMundial: number) {
        
        this._numeroSerie = numeroSerie;
        this._modelo = modelo;
        this._presupuesto = presupuesto;
        this._posicionMundial = posicionMundial;
        this._personal = new Array<Empleado>();
    }
    get numeroSerie(): string {
        return this._numeroSerie;
    }
    public get modelo(): string {
        return this._modelo;
    }
    public get presupuesto(): number {
        return this._presupuesto;
    }
    public get posicionMundial(): number {
        return this._posicionMundial;
    }
    public get personal(): Array<Empleado> {
        return this._personal;
}

mostrarNumeroSerie(): string {
    return this._numeroSerie;
}
    
presupuestoDisponible(): number {
    return this._presupuesto + 2000;
    
}

public addPersona(empleado: Empleado) {
    this._personal.push(empleado);
  }
  
  public sueldoEquipo(){
    let sueldoT: number = 0
    for (let persona of this._personal){
      sueldoT += persona.salarioTotal()
    }
    return sueldoT
  }


  

  

  public getPersonas() {
    return this._personal;
  }

}

import { Empleado } from '../departamentos/empleado';
import { Vehiculo } from './vehiculo';

export class Asfalto extends Vehiculo {
  private _unidadesPotencia: number;
  private _ruedas: number;
  private _cilindraje: string;
  private _trial: boolean;
  constructor(
    numeroSerie: string,
    modelo: string,
    presupuesto: number,
    posicionMundial: number,
    unidadesPotencia: number,
    ruedas: number,
    cilindraje: string,
    trial: boolean
  ) {
    super(numeroSerie, modelo, presupuesto, posicionMundial);
    this._unidadesPotencia = unidadesPotencia;
    this._ruedas = ruedas;
    this._cilindraje = cilindraje;
    this._trial = trial;
  }
    get unidadesPotencia(): number {
        return this._unidadesPotencia;
    }


    get ruedas(): number {
        return this._ruedas;
    }

    get cilindraje(): string {
        return this._cilindraje;
    }

    get trial(): boolean {
        return this._trial;
    }




    
    presupuestoDisponible(): number {
      let presupuesto : number
      /*let presupuestoAumentado:number
      let presupuestoFinal:number
      let posicionMundial : number = this.posicionMundial;*/
      presupuesto = super.presupuestoDisponible()

      if (this.trial) {
        presupuesto = presupuesto + 500;
      } else {
      if (this.posicionMundial == 1) {
        presupuesto = presupuesto + (presupuesto * 1.5) - (this._unidadesPotencia *5000) - (this._ruedas * 1000)
      }else if (this.posicionMundial >1 && this.posicionMundial < 10) {
        presupuesto = presupuesto + (presupuesto * 1.1) - (this._unidadesPotencia *5000) - (this._ruedas * 1000)
      } else{
        presupuesto = presupuesto + (presupuesto * 0.9) - (this._unidadesPotencia *5000) - (this._ruedas * 1000)
      }
      
    }
    return presupuesto;

  }
    
}

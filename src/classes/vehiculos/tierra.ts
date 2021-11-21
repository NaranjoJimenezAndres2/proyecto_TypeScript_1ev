import { Empleado } from '../departamentos/empleado';
import { Vehiculo } from './vehiculo';

export class Tierra extends Vehiculo {
    private _Dakar: boolean;
    private _siniestros: number;
    private _dias: Date; 
    constructor(
    numeroSerie: string,
    modelo: string,
    presupuesto: number,
    posicionMundial: number,
    Dakar: boolean,
    siniestros: number,
    dias: Date 

    ) {
        super(numeroSerie, modelo, presupuesto, posicionMundial);
        this._Dakar = Dakar;
        this._siniestros = siniestros;
        this._dias = dias;
    }
     get Dakar(): boolean {
        return this._Dakar;
    }
    set Dakar(Dakar: boolean){
        this._Dakar = Dakar;
    }

    get siniestros(): number {
        return this._siniestros;
    }
    set siniestros(value: number) {
        this._siniestros = value;
    }

    get dias(): Date {
        return this._dias;
    }
    set dias(dias: Date) {
        this._dias = dias;
    }




    

    presupuestoDisponible(): number { 
        let presupuesto : number
        /*let presupuestoAumentado:number
        let presupuestoFinal:number
        let posicionMundial : number = this.posicionMundial;*/
        presupuesto = super.presupuestoDisponible()

        if (this.Dakar == true) {
            presupuesto = presupuesto + (presupuesto * 1.1) - (this._siniestros * 1000)
        }else{
            if (this._posicionMundial == 1) {
            presupuesto = presupuesto + (presupuesto * 1.9)- (this._siniestros * 1000)}
        }
        return presupuesto;

    }

}
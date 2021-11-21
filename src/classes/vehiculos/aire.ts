import { Vehiculo } from './vehiculo';
import { TecnicoAvion } from "../departamentos/tecnicoAvion";
import { Empleado } from "../departamentos/empleado";


export class Aire extends Vehiculo {
    private _motoresUsados: number;
   

    constructor( numeroSerie: string, 
        modelo: string, 
        presupuesto: number, 
        posicionMundial: number, 
        motoresUsados: number ) 
        {
        super( numeroSerie, modelo, presupuesto, posicionMundial);
        this._motoresUsados = motoresUsados;

    } 
    get motoresUsados(): number {
        return this._motoresUsados;
    }



    presupuestoDisponible(): any { 
        let presupuesto : number
        /*let presupuestoAumentado:number
        let presupuestoFinal:number
        let posicionMundial : number = this.posicionMundial;*/
        presupuesto = super.presupuestoDisponible()


        let numeroSerie: string = this.numeroSerie;
        let posicionMundial = this.posicionMundial 
    
        function aumento (presupuestoReducido :number) {
    
            let presupuestoAumentado:number

            if (posicionMundial == 1){
                presupuestoAumentado = presupuestoReducido + (presupuesto * 1.5);
            } else if (posicionMundial > 1 && posicionMundial < 5){
                presupuestoAumentado = presupuestoReducido + (presupuesto * 1.1);
            } else {
                presupuestoAumentado = presupuestoReducido + (presupuesto * 0.9);
            }
            console.log ("el presupuesto por vehiculo " + numeroSerie + " es: "+ presupuestoAumentado ) 
            }
    
        function reduccion ( callback :(presupuesto: number) => void) {
       
            let presupuestoReducido:number
        
            presupuestoReducido = presupuesto - (presupuesto * 0.1);
        
            callback(presupuestoReducido);
        }
    
    reduccion(aumento);



        
    }
 

}



  

import { Empleado } from './empleado';

export class Piloto extends Empleado {
    private _descalificaciones: number;
    private _podios: number;
    private _mundiales: number;
    private _poles: number;
    private _victorias: number;

    constructor ( dni: string,
        nombre: string, 
        salario: number, 
        numeroSerie: string, 
        descalificaciones: number, 
        podios: number, 
        mundiales: number, 
        poles: number, 
        victorias: number, 
        
        ) {
        
        super(dni, nombre, salario, numeroSerie);
        
        this._descalificaciones = descalificaciones;
        this._podios = podios;
        this._mundiales = mundiales;
        this._poles = poles;
        this._victorias = victorias;

    }

    public get descalificaciones(): number {
        return this._descalificaciones;
    }
    public set descalificaciones(value: number) {
        this._descalificaciones = value;
    }

    public get podios(): number {
        return this._podios;
    }
    public set podios(value: number) {
        this._podios = value;
    }

    public get mundiales(): number {
        return this._mundiales;
    }

    public set mundiales(value: number) {
        this._mundiales = value;
    }

    public get poles(): number {
        return this._poles;
    }

    public set poles(value: number) {
        this._poles = value;
    }

    public get victorias(): number {
        return this._victorias;
    }

    public set victorias(value: number) {
        this._victorias = value;
    }

    public get numeroSerie(): string {
        return this._numeroSerie;
    }

    public set numeroSerie(value: string) {
        this._numeroSerie = value;
    }

    /*public get posicionMundial(): number {
        return this._posicionMundial;
    }

    public set posicionMundial(value: number) {
        this._posicionMundial = value;
    }*/

    public salarioTotal(): number {
        let salario: number;
        salario = super.salarioTotal() - (this.descalificaciones * 100) + (this.podios * 200) + (this.mundiales * 300) + (this.poles * 400) + (this.victorias * 500);
        return salario
    }

    public toString(): string {
        return super.toString() + '\n' + 'Descalificaciones: ' + this.descalificaciones + '\n' + 'Podios: ' + this.podios + '\n' + 'Mundiales: ' + this.mundiales + '\n' + 'Poles: ' + this.poles + '\n' + 'Victorias: ' + this.victorias + '\n' + 'Numero de Serie: ' + this.numeroSerie + '\n' + 'Posicion en el Mundial: '  + '\n' + 'Sueldo: ' + this.salarioTotal();
 
    
    }


    
}
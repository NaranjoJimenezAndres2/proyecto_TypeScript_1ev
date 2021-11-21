import { Empleado } from './empleado';
import { Vehiculo } from "../vehiculos/vehiculo";


export class JefeEquipo extends Empleado {
    private _proyectos: Array<string> ;
    private _posicion1: number;
    private _cilindraje: string;
    private _fechaContratacion: Date;
    private _equipo: Array<Vehiculo>;
    private _trial: boolean;
    constructor( 
        dni: string, 
        nombre: string, 
        salario: number,
        proyectos: Array<string> , 
        numeroSerie: string , 
        posicion: number, cilindraje: string, 
        fechaContratacion: Date,
        trial: boolean)
        
        {
        super(dni,nombre, salario, numeroSerie);

        this._proyectos = proyectos;
        this._posicion1 = posicion;
        this._cilindraje = cilindraje;
        this._fechaContratacion = fechaContratacion;
        this._equipo = new Array<Vehiculo>();
        this._trial = trial;
        this._numeroSerie = numeroSerie;
                 }

    
    public get proyectos(): Array<string>  {
        return this._proyectos;
    }

    public set proyectos(value: Array<string> ) {
        this._proyectos = value;
    }

    public get posicion1(): number {
        return this._posicion1;
    }

    public set posicion1(value: number) {
        this._posicion1 = value;
    }

    public get cilindraje(): string {
        return this._cilindraje;
    }
    
    public set cilindraje(value: string) {
        this._cilindraje = value;
    }

    public get fechaContratacion(): Date {
        return this._fechaContratacion;
    }



    public set fechaContratacion(value: Date) {
        this._fechaContratacion = value;
    }

    public get equipo(): Array<Vehiculo>{
        return this._equipo;
    }

    public set equipo(value: Array<Vehiculo>) {
        this._equipo = value;
    }

    public get trial(): boolean {
        return this._trial;
    }   

    public set trial(value: boolean) {
        this._trial = value;
    }


// Función que calcula el salario del empleado
    public salarioTotal(): number {
        let salario: number;
        if (this._trial == true) {
            salario = this._salario * 1.2;
        } else {
            salario = this._salario;
        }
        return salario;
    }


    public getEquipo(): string {
        let equipo: string;
        if (this._equipo.length == 0) {
            equipo = "No tiene equipo";
        } else {
            equipo = this._equipo.toString();
        }
        return equipo;
    }


    public getProyectos(): string {
        let proyectos: string;
        if (this._proyectos.length == 0) {
            proyectos = "No tiene proyectos";
        } else {
            proyectos = this._proyectos.toString();
        }
        return proyectos;
    }


// Funcion que compara dos jefes de equipo

    public static empleadoMasAntiguo(jefeEquipo1: JefeEquipo, jefeEquipo2: JefeEquipo){
        if (jefeEquipo1.fechaContratacion.getTime() > jefeEquipo2.fechaContratacion.getTime()) {
            console.log("El jefe de Equipo "+ jefeEquipo2.nombre + " con dni "+jefeEquipo2._dni+" es mas antiguo que " + jefeEquipo1.nombre + " con dni "+jefeEquipo1._dni + "Proyectos: " +jefeEquipo2.getProyectos());
        } else {
            console.log("El jefe de Equipo "+ jefeEquipo1.nombre + " con dni "+jefeEquipo1._dni+ " es mas antiguo que " + jefeEquipo2.nombre + " con dni "+jefeEquipo2._dni + "Proyectos: " +jefeEquipo1.getProyectos());
        }
    }



}
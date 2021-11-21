import { Empleado } from './empleado';

export class Ingeniero extends Empleado {
    private _experiencia : number;
    private _estudios: string;
    private _idiomas: Array<string>;
    constructor(dni: string, nombre: string, salario: number, experiencia: number, estudios: string, idiomas: Array<string>, numeroSerie: string) {
        super(dni, nombre, salario, numeroSerie);
        this._experiencia = experiencia;
        this._estudios = estudios;
        this._idiomas = idiomas;

    }

    public get experiencia(): number {
        return this._experiencia;
    }

    public set experiencia(value: number) {
        this._experiencia = value;
    }

    public get estudios(): string {
        return this._estudios;
    }

    public set estudios(value: string) {
        this._estudios = value;
    }

    public get idiomas(): Array<string> {
        return this._idiomas;
    }

    public set idiomas(value: Array<string>) {
        this._idiomas = value;
    }

    public get numeroSerie(): string {
        return this._numeroSerie;
    }

    public set numeroSerie(value: string) {
        this._numeroSerie = value;
    }

    public toString(): string {
        return super.toString() + `, Experiencia: ${this.experiencia}, Estudios: ${this.estudios}, Idiomas: ${this.idiomas}, Numero de Serie: ${this.numeroSerie}`;
    }

    salarioTotal(): number {
        let salario: number;
        salario = super.salarioTotal()
        return salario + this.experiencia * 100;
    }


    public compareTo(empleado: Ingeniero): number {
        if (this.salarioTotal() > empleado.salarioTotal()) {
            return 1;
        } else if (this.salarioTotal() < empleado.salarioTotal()) {
            return -1;
        } else {
            return 0;
        }
    }

    public static OrdenarPorExperiencia(empleado1: Ingeniero, empleado2: Ingeniero): number {
        if (empleado1.experiencia > empleado2.experiencia) {
            return 1;
        } else if (empleado1.experiencia < empleado2.experiencia) {
            return -1;
        } else {
            return 0;
        }
    }

    public static OrdenarPorSalario(empleado1: Ingeniero, empleado2: Ingeniero): number {
        if (empleado1.salarioTotal() > empleado2.salarioTotal()) {
            return 1;
        } else if (empleado1.salarioTotal() < empleado2.salarioTotal()) {
            return -1;
        } else {
            return 0;
        }
    }


}
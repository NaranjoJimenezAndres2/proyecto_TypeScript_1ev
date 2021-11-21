import {Schema, model } from 'mongoose';
import { Vehiculo } from '../classes/vehiculos/vehiculo';

const empleadoSchema = new Schema({
    _dni: {
        type: String,
        required: true,
        unique: true
    },
    _nombre: {
        type: String,
    },
    _salario: {
        type: Number,
    },
    _puesto: {
        type: String,
    },
    _experiencia: {
        type: Number,
    },
    _estudios: {
        type: String,
    },
    _idiomas: {
        type: Array,
        default: [String],
        
    },
    _numeroSerie: {
        type: String ,
        validate:{ 
            validator: function(value:any){
                return /xx*/g.test(value);
            },
            message: '{VALUE} no es un numero de serie valido'
            }
    },
    _posicion1: {
        type: Number,
    },
    _cilindraje: {
        type: String,
    },
    _fechaContratacion: {
        type: Date,
    },
    _trial: {
        type: Boolean,
    },
    _horasDeVuelo: {
        type: Number,
    },
    _horasDeMantenimiento: {
        type: Number,
    },
    _modelo: {
        type: String,
    },
    _descalificaciones: {
        type: Number,
    },
    _podios: { 
        type: Number,
    },
    _mundiales: {
        type: Number,
    },
    _poles: {
        type: Number,
    },
    _victorias: {
        type: Number,
    },
    _posicionMundial: {
        type: Number,
    },
    _proyectos: {
        type: Array,
        default: [String],
    }
})

export type iEmpleado = {
    _dni: string | null,
    _nombre: string | null,
    _salario: number | null,
    _numeroSerie: string | null,
}



export type iIngeniero = {  //Schema tipo ingeniero
    _dni: string | null,
    _nombre: string | null,
    _puesto: string | null,     
    _salario: number | null,
    _numeroSerie: string | null,
    _experiencia: number | null,
    _estudios: string | null,
    _idiomas: string[]| null,
    
}

export type iPiloto = {  //Schema tipo piloto
    _dni: string | null,
    _nombre: string | null,
    _puesto: string | null,
    _salario: number | null,
    _numeroSerie: string | null
    _descalificaciones: number | null,
    _podios: number | null,
    _mundiales: number | null,
    _poles: number | null,
    _victorias: number | null,

    
}

export type itecnicoAvion = {  //Schema tipo tecnico de avion
    _dni: string | null,
    _nombre: string | null,
    _numeroSerie: string | null,
    _puesto: string | null,
    _salario: number | null,
    _modelo: string | null,
    _horasDeVuelo: number | null,
    _horasDeMantenimiento: number | null,
}
    
export type iJefeEquipo = {  //Schema tipo jefe de equipo
    _dni: string | null,
    _nombre: string | null,
    _puesto: string | null,
    _salario: number | null,
    _numeroSerie: string | null,
    _proyectos: string[] | null,
    _posicion1: number | null,
    _cilindraje: string | null,
    _fechaContratacion: Date | null,
    _trial: boolean | null,
}


export type xEmpleado = {
    _dni: string ,
    _nombre: string ,
    _salario: number ,
    _puesto: string,
    _experiencia: number ,
    _estudios: string ,
    _idiomas: string[] ,
    _proyectos: string[],
    _numeroSerie: string ,
    _posicion1: number ,
    _cilindraje: string ,
    _fechaContratacion: Date,
    _trial: boolean ,
    _horasDeVuelo: number ,
    _horasDeMantenimiento: number,
    _modelo: string ,
    _descalificaciones: number,
    _podios: number ,
    _mundiales: number,
    _poles: number ,
    _victorias: number,
    _posicionMundial: number,
}


// La colección de la BD (Plural siempre)
export const Empleados = model('empleados', empleadoSchema)

import {Schema, model } from 'mongoose';
import { Empleado } from '../classes/departamentos/empleado';



const vehiculoSchema = new Schema({
    _tipoVehiculo: {
        type: String,
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
    _modelo: {
        type: String,
    },
    _presupuesto: {
        type: Number,
    },
    _posicionMundial: {
        type: Number,
    },
    _dias:{
        type: Date,
    },
    _siniestros: {
        type: Number,
    },
    _Dakar: {
        type: Boolean,
    },
    _motoresUsados: {
        type: Number,
    },
    _unidadesPotencia: {
        type: Number,
    },
    _ruedas: {
        type: Number,
    },
    _cilindraje: {
        type: String,
    },
    _trial: {
        type: Boolean
    },

});

export type iVehiculo = {
    _numeroSerie: string |null,
    _modelo: string |null,
    _presupuesto: number |null,
    _posicionMundial: number |null,
}

export type iAire = {
    _tipoVehiculo: string |null,
    _numeroSerie: string | null,
    _modelo: string | null,
    _presupuesto: number | null,
    _posicionMundial: number | null,
    _motoresUsados: number | null,
}

export type iAsfalto = {
    _tipoVehiculo: string |null,
    _numeroSerie: string | null,
    _modelo: string | null,
    _presupuesto: number | null,
    _posicionMundial: number | null,
    _unidadesPotencia: number | null,
    _ruedas: number | null,
    _cilindraje: string | null,
    _trial: boolean | null
}

export type iTierra = {
    _tipoVehiculo: string |null,
    _numeroSerie: string | null,
    _modelo: string | null,
    _presupuesto: number | null,
    _posicionMundial: number | null,
    _Dakar: boolean  | null,
    _siniestros: number  | null,
    _dias: Date  | null,
}

export type xVehiculo = {
    _tipoVehiculo: string,
    _numeroSerie: string ,
    _modelo: string,
    _presupuesto: number,
    _posicionMundial: number ,
    _Dakar: boolean  ,
    _siniestros: number,
    _dias: Date ,
    _motoresUsados: number ,
    _unidadesPotencia: number ,
    _ruedas: number,
    _cilindraje: string ,
    _trial: boolean,
    _personal:Empleado[]
}


export const Vehiculos = model('vehiculos', vehiculoSchema)

import {Schema, model } from 'mongoose';
import { Empleado } from '../classes/departamentos/empleado';

const rendimientoSchema = new Schema({
    _numeroSerie: {
        type: String,
    },
    _modelo: {
        type: String,
    },
    _tipoVehiculo: {
        type: String,
    },
    _posicionMundial: {
        type: Number,
    },
    _sueldoTotal: {
        type: Number,
    },
    _presupuestoPorcentaje: {
        type: Number,
    },
    _equipo: {
        type: Array,
    }
});

export interface iRendimiento  {
    _numeroSerie: string|null,
    _modelo: string|null,
    _posicionMundial: number |null,
    _tipoVehiculo: string |null,
    _sueldoTotal: number |null,
    _presupuestoPorcentaje : number |null,
    _equipo: iRendimientoEmpleado[],
    
    
}

export interface iRendimientoEmpleado  {
    _dni: string |null,
    _nombre: string|null,
    _salario: number|null,
    _puesto: string|null
};

export const Rendimientos = model('resultados', rendimientoSchema)
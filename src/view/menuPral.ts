import { leerTeclado } from './entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Nuevo Vehiculo')
    console.log('2.- Nuevo Empleado')
    console.log('3.- Presupuesto')
    console.log('4.- Sueldos por Vehiculo')
    console.log('5.- Subida de datos de prueba')
    console.log('6.- Modificar Empleado')
    console.log('7.- Eliminar')
    console.log('8.- Crear tabla de Resultados')
    console.log('9.- Horas de vuelo')
    console.log('10.-Comparar Antiguedad de Jefes')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}
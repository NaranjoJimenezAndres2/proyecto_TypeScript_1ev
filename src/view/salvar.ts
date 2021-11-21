import { Empleado } from '../../src/classes/departamentos/empleado'
import { Ingeniero } from '../../src/classes/departamentos/ingeniero'
import { JefeEquipo } from '../../src/classes/departamentos/jefeEquipo'
import { Piloto } from '../../src/classes/departamentos/piloto'
import { TecnicoAvion } from '../../src/classes/departamentos/tecnicoAvion'
import { Aire } from '../../src/classes/vehiculos/aire'
import { Asfalto } from '../../src/classes/vehiculos/asfalto'
import { Vehiculo } from '../../src/classes/vehiculos/vehiculo';
import { Tierra } from '../../src/classes/vehiculos/tierra'
import { iIngeniero , iPiloto,  itecnicoAvion, iJefeEquipo, iEmpleado , Empleados } from '../schemas/empleado'
import { iAire, iAsfalto, iTierra, iVehiculo, Vehiculos } from '../schemas/vehiculo'
import { db } from '../../src/database/database'



//Función que se encarga de guardar los datos de un vehiculo en la base de datos

export const salvarV = async (vehiculos: Array<Vehiculo>) => {

        let aSchema:any
    
        let dSchemaVehiculo: iVehiculo = {
            _numeroSerie: null,
            _modelo: null,
            _presupuesto: null,
            _posicionMundial: null,
            
        }
    
        let dSchemaAire: iAire = {
            _tipoVehiculo: null,
            _numeroSerie: null,
            _modelo: null,
            _presupuesto: null,
            _posicionMundial: null,
            _motoresUsados: null,
    }
        let dSchemaAsfalto: iAsfalto = {
            _tipoVehiculo: null,
            _numeroSerie: null,
            _modelo: null,
            _presupuesto:  null,
            _posicionMundial:  null,
            _unidadesPotencia:  null,
            _ruedas:  null,
            _cilindraje:  null,
            _trial:  null
    }
        let dSchemaTierra: iTierra = {
            _tipoVehiculo: null,
            _numeroSerie:  null,
            _modelo: null,
            _presupuesto: null,
            _posicionMundial: null,
            _Dakar:  null,
            _siniestros:  null,
            _dias:  null,
        }
    
        await db.conectarBD()
    
    
        for (let p of vehiculos) {
            dSchemaVehiculo._numeroSerie = dSchemaAire._numeroSerie = dSchemaAsfalto._numeroSerie= dSchemaTierra._numeroSerie =p.numeroSerie
            dSchemaVehiculo._modelo =dSchemaAire._modelo = dSchemaAsfalto._modelo= dSchemaTierra._modelo = p.modelo
            dSchemaVehiculo._presupuesto = dSchemaAire._presupuesto = dSchemaAsfalto._presupuesto=dSchemaTierra._presupuesto =  p.presupuesto
            dSchemaVehiculo._posicionMundial = dSchemaAire._posicionMundial = dSchemaAsfalto._posicionMundial= dSchemaTierra._posicionMundial= p.posicionMundial
    
            if (p instanceof Aire) {
                dSchemaAire._tipoVehiculo = "AIRE"
                dSchemaAire._motoresUsados = p.motoresUsados
                aSchema = new Vehiculos (dSchemaAire)
                console.log("guardado AIRE")
                
            }
                
            else if (p instanceof Asfalto) {
                dSchemaAsfalto._tipoVehiculo = "ASFALTO"
                dSchemaAsfalto._unidadesPotencia = p.unidadesPotencia
                dSchemaAsfalto._ruedas = p.ruedas
                dSchemaAsfalto._cilindraje = p.cilindraje
                dSchemaAsfalto._trial = p.trial
                aSchema = new Vehiculos(dSchemaAsfalto)
                console.log("guardado ASFALTO")
                }
    
            else if (p instanceof Tierra) {
                    dSchemaTierra._tipoVehiculo = "TIERRA"
                    dSchemaTierra._Dakar = p.Dakar
                    dSchemaTierra._siniestros = p.siniestros
                    dSchemaTierra._dias = p.dias
                    aSchema = new Vehiculos(dSchemaTierra)
                }
                await aSchema.save(vehiculos.pop())
        }
        await db.desconectarBD()
    }
    
/******************************************************************************* */

// función que guarda los empleados que vienen del formulario 

export const salvarEmp = async (empleados: Array<Empleado>) => {
        let pSchema : any
    
        let eSchemaEmpleado: iEmpleado = {
            _dni: null,
            _nombre: null,
            _salario: null,
            _numeroSerie: null,
        }
    
        let eSchemaIngeniero: iIngeniero = {
            _dni: null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _experiencia: null,
            _estudios:  null,
            _idiomas: null,
            
    }
    
        let eSchemaPiloto: iPiloto = {
            _dni: null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _descalificaciones: null,
            _podios:  null,
            _mundiales:  null,
            _poles:  null,
            _victorias:  null,

            
    }
        let eSchemaTecnicoAvion: itecnicoAvion = {
            _dni:  null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _modelo: null,
            _horasDeVuelo: null,
            _horasDeMantenimiento: null,
      
        }
        let eSchemaJefeEquipo: iJefeEquipo = {
            _dni: null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _proyectos: null,
            _posicion1: null,
            _cilindraje:null,
            _fechaContratacion: null,
            _trial:  null,
        }

        await db.conectarBD()
            //recorremos el array empleados
    
            for (let i of empleados) {
                eSchemaEmpleado._dni = eSchemaIngeniero._dni = eSchemaPiloto._dni= eSchemaTecnicoAvion._dni= eSchemaJefeEquipo._dni = i.dni
                eSchemaEmpleado._nombre =eSchemaIngeniero._nombre = eSchemaPiloto._nombre= eSchemaTecnicoAvion._nombre=eSchemaJefeEquipo._nombre =i.nombre
                eSchemaEmpleado._salario = eSchemaIngeniero._salario = eSchemaPiloto._salario = eSchemaTecnicoAvion._salario=eSchemaJefeEquipo._salario = i.salario
                eSchemaEmpleado._numeroSerie = eSchemaIngeniero._numeroSerie = eSchemaPiloto._numeroSerie = eSchemaTecnicoAvion._numeroSerie= eSchemaJefeEquipo._numeroSerie = i.numeroSerie
                
                if (i instanceof Ingeniero) {
                    eSchemaIngeniero._puesto = "INGENIERO"
                    eSchemaIngeniero._experiencia = i.experiencia
                    eSchemaIngeniero._estudios = i.estudios
                    eSchemaIngeniero._idiomas = i.idiomas
                    pSchema = new Empleados(eSchemaIngeniero)
                    console.log("guardado INGENIERO")
                }
    
                else if (i instanceof Piloto) {
                    eSchemaPiloto._puesto = "PILOTO"
                    eSchemaPiloto._descalificaciones = i.descalificaciones
                    eSchemaPiloto._podios = i.podios
                    eSchemaPiloto._mundiales = i.mundiales
                    eSchemaPiloto._poles = i.poles
                    eSchemaPiloto._victorias = i.victorias
                    pSchema = new Empleados(eSchemaPiloto)
                    console.log("guardado PILOTO")
                }
    
                else if (i instanceof TecnicoAvion) {
                    eSchemaTecnicoAvion._puesto = "TECNICO AVION"
                    eSchemaTecnicoAvion._modelo = i.modelo
                    eSchemaTecnicoAvion._horasDeVuelo = i.horasDeVuelo
                    eSchemaTecnicoAvion._horasDeMantenimiento = i.horasDeMantenimiento
                    pSchema = new Empleados(eSchemaTecnicoAvion)
                    console.log("guardado TECNICO AVION")
                }
    
                else if (i instanceof JefeEquipo) {
                    eSchemaJefeEquipo._puesto = "JEFE EQUIPO"
                    eSchemaJefeEquipo._proyectos = i.proyectos
                    eSchemaJefeEquipo._posicion1 = i.posicion1
                    eSchemaJefeEquipo._cilindraje = i.cilindraje
                    eSchemaJefeEquipo._fechaContratacion = i.fechaContratacion
                    eSchemaJefeEquipo._trial = i.trial
                    pSchema = new Empleados(eSchemaJefeEquipo)
                    console.log("guardado JEFE EQUIPO")
                }
                await pSchema.save(empleados.pop())
            }
        
        await db.desconectarBD()
    }
 /**************************************************************************** */   

//se suben los datos cargados en un array

export const subidaDatosPrueba = async () => {

await db.conectarBD()
 
 


    let empleados: Array<Empleado> = new Array<Empleado>();

empleados[0]= new Ingeniero("1231X", "Pablo", 3000, 2, "Mecanica", ["Ingles", "Frances"], "xx23");
empleados[1]= new Ingeniero("4567Y", "Juan", 5000, 3, "Electronica", ["Aleman", "Frances"], "xx45");
empleados[2]= new JefeEquipo("1243Z", "Miguel", 4500, ["Actualizacion", "Velocidad"],"xx23",3, "500cv", new Date("2018-06-05"), false);
empleados[3]= new JefeEquipo("1883Z", "Jose", 4800, ["Rendimiento"],"xx68",3, "250cv", new Date("2017-06-05"), false);
empleados[4]= new Piloto("9898E", "Marc", 15000, "xx11",3, 12, 7, 4, 9);
empleados[5]= new Piloto("9842B", "Pele", 18000, "xx81",0, 5, 7, 5, 1);
empleados[6]= new Ingeniero("1993F", "Pablo", 3000, 2, "Mecanica", ["Ingles", "Frances"], "xx23");
empleados[7]= new Ingeniero("1239X", "Pere", 3000, 2, "Mecanica", ["Ingles", "Frances"], "xx23");
empleados[8]= new TecnicoAvion("8765G","Paco", 7600, "xx02", "HONDA", 12, 12 );
empleados[9]= new TecnicoAvion("8235S","JoseM", 7600, "xx02", "ALPINE", 12, 17);
empleados[10]= new Piloto("5555k", "Alejandro",23000, "xx23",3, 2, 2, 4, 4);
empleados[11]= new Ingeniero("3697Z", "Luis", 6000, 1, "Fluidos", ["Ingles", "Aleman"], "xx56");
empleados[12]= new TecnicoAvion("1159P","Juan", 7800, "xx02", "HONDA", 30, 46);




    let pSchema : any
    
        let eSchemaEmpleado: iEmpleado = {
            _dni: null,
            _nombre: null,
            _salario: null,
            _numeroSerie: null,
        }
    
        let eSchemaIngeniero: iIngeniero = {
            _dni: null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _experiencia: null,
            _estudios:  null,
            _idiomas: null,
            
    }
    
        let eSchemaPiloto: iPiloto = {
            _dni: null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _descalificaciones: null,
            _podios:  null,
            _mundiales:  null,
            _poles:  null,
            _victorias:  null,

            
    }
        let eSchemaTecnicoAvion: itecnicoAvion = {
            _dni:  null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _modelo: null,
            _horasDeVuelo: null,
            _horasDeMantenimiento: null,
      
        }
        let eSchemaJefeEquipo: iJefeEquipo = {
            _dni: null,
            _nombre: null,
            _puesto: null,
            _salario: null,
            _numeroSerie: null,
            _proyectos: null,
            _posicion1: null,
            _cilindraje:null,
            _fechaContratacion: null,
            _trial:  null,
        }

  for (let i of empleados) {
        eSchemaEmpleado._dni = eSchemaIngeniero._dni = eSchemaPiloto._dni= eSchemaTecnicoAvion._dni= eSchemaJefeEquipo._dni = i.dni,
        eSchemaEmpleado._nombre =eSchemaIngeniero._nombre = eSchemaPiloto._nombre= eSchemaTecnicoAvion._nombre=eSchemaJefeEquipo._nombre =i.nombre,
        eSchemaEmpleado._salario = eSchemaIngeniero._salario = eSchemaPiloto._salario = eSchemaTecnicoAvion._salario=eSchemaJefeEquipo._salario = i.salario,
        eSchemaEmpleado._numeroSerie = eSchemaIngeniero._numeroSerie = eSchemaPiloto._numeroSerie = eSchemaTecnicoAvion._numeroSerie= eSchemaJefeEquipo._numeroSerie = i.numeroSerie
        
        if (i instanceof Ingeniero) {
            eSchemaIngeniero._puesto = "INGENIERO"
            eSchemaIngeniero._experiencia = i.experiencia
            eSchemaIngeniero._estudios = i.estudios
            eSchemaIngeniero._idiomas = i.idiomas
            pSchema = new Empleados(eSchemaIngeniero)
            console.log("guardado INGENIERO")
        }

        else if (i instanceof Piloto) {
            eSchemaPiloto._puesto = "PILOTO"
            eSchemaPiloto._descalificaciones = i.descalificaciones
            eSchemaPiloto._podios = i.podios
            eSchemaPiloto._mundiales = i.mundiales
            eSchemaPiloto._poles = i.poles
            eSchemaPiloto._victorias = i.victorias
            pSchema = new Empleados(eSchemaPiloto)
            console.log("guardado PILOTO")
        }

        else if (i instanceof TecnicoAvion) {
            eSchemaTecnicoAvion._puesto = "TECNICO AVION"
            eSchemaTecnicoAvion._modelo = i.modelo
            eSchemaTecnicoAvion._horasDeVuelo = i.horasDeVuelo
            eSchemaTecnicoAvion._horasDeMantenimiento = i.horasDeMantenimiento
            pSchema = new Empleados(eSchemaTecnicoAvion)
            console.log("guardado TECNICO AVION")
        }

        else if (i instanceof JefeEquipo) {
            eSchemaJefeEquipo._puesto = "JEFE EQUIPO"
            eSchemaJefeEquipo._proyectos = i.proyectos
            eSchemaJefeEquipo._posicion1 = i.posicion1
            eSchemaJefeEquipo._cilindraje = i.cilindraje
            eSchemaJefeEquipo._fechaContratacion = i.fechaContratacion
            eSchemaJefeEquipo._trial = i.trial
            pSchema = new Empleados(eSchemaJefeEquipo)
            console.log("guardado JEFE EQUIPO")
        }
        await pSchema.save()
        
    }
    console.log("Empleados subidos a la base de datos")


    let vehiculos: Array<Vehiculo> = new Array<Vehiculo>();

vehiculos[0]= new Aire("xx02","HONDA",500000,4,8);
vehiculos[1]= new Tierra("xx68","SUZUKI",450000,3,true, 2, new Date ("2021-06-05"));
vehiculos[2]= new Asfalto("xx23","HONDA", 400000, 5, 4,6,"500cv",false);
vehiculos[3]= new Asfalto("xx45","BOOM", 250000, 5, 4,6,"250cv",true);
vehiculos[4]= new Tierra("xx66","SUZUKI",450000,3,true, 2, new Date ("2021-06-05"));


    let aSchema:any
    
    let dSchemaVehiculo: iVehiculo = {
        _numeroSerie: null,
        _modelo: null,
        _presupuesto: null,
        _posicionMundial: null,
        
    }

    let dSchemaAire: iAire = {
        _tipoVehiculo: null,
        _numeroSerie: null,
        _modelo: null,
        _presupuesto: null,
        _posicionMundial: null,
        _motoresUsados: null,
}
    let dSchemaAsfalto: iAsfalto = {
        _tipoVehiculo: null,
        _numeroSerie: null,
        _modelo: null,
        _presupuesto:  null,
        _posicionMundial:  null,
        _unidadesPotencia:  null,
        _ruedas:  null,
        _cilindraje:  null,
        _trial:  null
}
    let dSchemaTierra: iTierra = {
        _tipoVehiculo: null,
        _numeroSerie:  null,
        _modelo: null,
        _presupuesto: null,
        _posicionMundial: null,
        _Dakar:  null,
        _siniestros:  null,
        _dias:  null,
    }


    for (let p of vehiculos) {
        dSchemaVehiculo._numeroSerie = dSchemaAire._numeroSerie = dSchemaAsfalto._numeroSerie= dSchemaTierra._numeroSerie =p.numeroSerie
        dSchemaVehiculo._modelo =dSchemaAire._modelo = dSchemaAsfalto._modelo= dSchemaTierra._modelo = p.modelo
        dSchemaVehiculo._presupuesto = dSchemaAire._presupuesto = dSchemaAsfalto._presupuesto=dSchemaTierra._presupuesto =  p.presupuesto
        dSchemaVehiculo._posicionMundial = dSchemaAire._posicionMundial = dSchemaAsfalto._posicionMundial= dSchemaTierra._posicionMundial= p.posicionMundial

        if (p instanceof Aire) {
            dSchemaAire._tipoVehiculo = "AIRE"
            dSchemaAire._motoresUsados = p.motoresUsados
            aSchema = new Vehiculos (dSchemaAire)
            console.log("guardado AIRE")
            
        }
            
        else if (p instanceof Asfalto) {
            dSchemaAsfalto._tipoVehiculo = "ASFALTO"
            dSchemaAsfalto._unidadesPotencia = p.unidadesPotencia
            dSchemaAsfalto._ruedas = p.ruedas
            dSchemaAsfalto._cilindraje = p.cilindraje
            dSchemaAsfalto._trial = p.trial
            aSchema = new Vehiculos(dSchemaAsfalto)
            console.log("guardado ASFALTO")
            }

        else if (p instanceof Tierra) {
                dSchemaTierra._tipoVehiculo = "TIERRA"
                dSchemaTierra._Dakar = p.Dakar
                dSchemaTierra._siniestros = p.siniestros
                dSchemaTierra._dias = p.dias
                aSchema = new Vehiculos(dSchemaTierra)
            }
            await aSchema.save()
            
    }
console.log("Vehiculos subidos a la base de datos")

  
}
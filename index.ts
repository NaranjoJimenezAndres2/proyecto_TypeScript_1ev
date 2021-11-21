import { Empleado } from './src/classes/departamentos/empleado'
import { Ingeniero } from './src/classes/departamentos/ingeniero'
import { JefeEquipo } from './src/classes/departamentos/jefeEquipo'
import { TecnicoAvion } from './src/classes/departamentos/tecnicoAvion'
import { Piloto } from './src/classes/departamentos/piloto'
import { Aire } from './src/classes/vehiculos/aire'
import { Asfalto } from './src/classes/vehiculos/asfalto'
import { Vehiculo } from './src/classes/vehiculos/vehiculo';
import { Tierra } from './src/classes/vehiculos/tierra'
import { iIngeniero , iPiloto, iJefeEquipo,itecnicoAvion, iEmpleado , Empleados , xEmpleado} from './src/schemas/empleado'
import { iAire, iAsfalto, iTierra, iVehiculo, Vehiculos, xVehiculo } from './src/schemas/vehiculo'
import { Rendimientos, iRendimiento, iRendimientoEmpleado } from './src/schemas/rendimiento'
import { db } from './src/database/database'
import { menuPral } from './src/view/menuPral'
import { leerTeclado } from './src/view/entradaTeclado'
import { salvarV, salvarEmp , subidaDatosPrueba} from './src/view/salvar'



const nuevoAire = async (vehiculos: Array<Vehiculo>) =>  {
    let veh: Vehiculo;
    const numeroSerie = await leerTeclado('\nNumero de Serie: ');
    const modelo = await leerTeclado('Model: ');
    const presupuesto = parseInt(await leerTeclado('Presupuesto Anual')) ;
    const posicionMundial = parseInt( await leerTeclado('Posicion en el Mundial: ') );
    const motoresUsados = parseInt( await leerTeclado('Numero de motores usados en la temporada: ') );
    veh = new Aire (numeroSerie, modelo, presupuesto, posicionMundial,motoresUsados);
    vehiculos.push(veh)

}

const nuevoAsfalto = async (vehiculos: Array<Vehiculo>) =>  {
    let veh: Vehiculo;
    const numeroSerie = await leerTeclado('\nNumero de Serie: ');
    const modelo = await leerTeclado('Model: ');
    const presupuesto = parseInt(await leerTeclado('Presupuesto Anual')) ;
    const posicionMundial = parseInt( await leerTeclado('Posicion en el Mundial: ') );
    const unidadesPotencia = parseInt( await leerTeclado('Unidades de potencia: ') );
    const ruedas = parseInt( await leerTeclado('Numero de ruedas: ') );
    const cilindraje = await leerTeclado('Cilindraje: ');
    const trial = Boolean ( await leerTeclado('Trial: ') );
    veh = new Asfalto (numeroSerie, modelo, presupuesto, posicionMundial,unidadesPotencia,ruedas,cilindraje,trial);
    vehiculos.push(veh)
}

const nuevoTierra = async (vehiculos: Array<Vehiculo>) =>  {
    let veh: Vehiculo;
    const numeroSerie = await leerTeclado('\nNumero de Serie: ');
    const modelo = await leerTeclado('Model: ');
    const presupuesto = parseInt(await leerTeclado('Presupuesto Anual')) ;
    const posicionMundial = parseInt( await leerTeclado('Posicion en el Mundial: ') );
    const Dakar = Boolean ( await leerTeclado('Dakar: ') );
    const siniestros = parseInt( await leerTeclado('Siniestros: ') );
    const dias = new Date ( await leerTeclado('Dias: ') );
    veh = new Tierra (numeroSerie, modelo, presupuesto, posicionMundial,Dakar,siniestros, dias);
    vehiculos.push(veh)

}

// entrada de empleados por pantalla

const nuevoIngeniero = async (empleados: Array<Empleado>) => {
    let emp: Empleado;
    let idiomasArr= new Array<string>();
    const dni = await leerTeclado('DNI: ');
    const nombre = await leerTeclado('Nombre: ');
    const salario = parseInt( await leerTeclado('Salario: ') );
    const experiencia = parseInt( await leerTeclado('Experiencia: ') );
    const estudios = await leerTeclado('Estudios: ');
    do {
        let idiomas = (await leerTeclado('Idiomas: '));
        idiomasArr.push(idiomas);

    }while (idiomasArr.length < 2)
    const numeroSerie = await leerTeclado('Numero de Serie: ');
    emp = new Ingeniero (dni, nombre, salario, experiencia, estudios, idiomasArr, numeroSerie);
    empleados.push(emp)
}

const nuevoPiloto = async (empleados: Array<Empleado>) => {
    let emp: Empleado;
    const dni = await leerTeclado('DNI: ');
    const nombre = await leerTeclado('Nombre: ');
    const salario = parseInt( await leerTeclado('Salario: ') );
    const descalificaciones = parseInt( await leerTeclado('Descalificaciones: ') );
    const podios = parseInt( await leerTeclado('Podios: ') );
    const mundiales = parseInt( await leerTeclado('Mundiales: ') );
    const poles = parseInt( await leerTeclado('Poles: ') );
    const victorias = parseInt( await leerTeclado('Victorias: ') );
    const numeroSerie = await leerTeclado('Numero de Serie: ');
    emp = new Piloto (dni, nombre, salario, numeroSerie, descalificaciones, podios, mundiales, poles, victorias);
    empleados.push(emp)

}

const nuevoJefeEquipo = async (empleados: Array<Empleado>) => {
    let emp: Empleado;
    let proyectoArr= new Array<string>();
    let n: string;
    const dni = await leerTeclado('DNI: ');
    const nombre = await leerTeclado('Nombre: ');
    const salario = parseInt( await leerTeclado('Salario: ') );
    
    do{
    let proyectos =( await leerTeclado('Proyectos: ') );
    proyectoArr.push(proyectos);
    n =await leerTeclado('¿Quiere introducir un nuevo proyecto?:(SI/NO)'); 
    }while (n=="SI")
    
    const numeroSerie = await leerTeclado('Numero de Serie: ');
    const posicion1 = parseInt( await leerTeclado('Posicion en el Mundial: ') );
    const cilindraje = await leerTeclado('Cilindraje: ');
    const fechaContratacion = new Date ( await leerTeclado('Fecha de Contratacion: ') );
    const trial = Boolean ( await leerTeclado('Trial: ') );
    emp = new JefeEquipo (dni, nombre, salario, proyectoArr, numeroSerie,  posicion1, cilindraje, fechaContratacion, trial);
    empleados.push(emp)
}

const nuevoTecnicoAvion = async (empleados: Array<Empleado>) => {
    let emp: Empleado;
    const dni = await leerTeclado('DNI: ');
    const nombre = await leerTeclado('Nombre: ');
    const salario = parseInt( await leerTeclado('Salario: ') );
    const modelo = await leerTeclado('Modelo: ');
    const numeroSerie = await leerTeclado('Numero de Serie: ');
    const horasDeVuelo = parseInt( await leerTeclado('Horas de Vuelo: ') );
    const horasDeMantenimiento = parseInt( await leerTeclado('Horas de Mantenimiento: ') );
    emp = new TecnicoAvion (dni, nombre, salario, numeroSerie, modelo, horasDeVuelo, horasDeMantenimiento);
    empleados.push(emp)

}



//************************************************************************************* */


//Calcula el presupuesto por vehiculo
const presupuestoTotal = async () => {

    await db.conectarBD();
    

    let dVehiculo: xVehiculo;
    let tmpVehiculo: Vehiculo
    let query: any = await Vehiculos.find({});

    for (dVehiculo of query) {

        if (dVehiculo._tipoVehiculo == "AIRE") {
            tmpVehiculo = new Aire (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial,dVehiculo._motoresUsados);
        } else if (dVehiculo._tipoVehiculo == "ASFALTO") {
            tmpVehiculo = new Asfalto ( dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._unidadesPotencia, dVehiculo._ruedas, dVehiculo._cilindraje, dVehiculo._trial);
        } else { 
            tmpVehiculo = new Tierra (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._Dakar, dVehiculo._siniestros, dVehiculo._dias);
        }
        
        if (tmpVehiculo.presupuestoDisponible() != undefined) {
            console.log(`el presupuesto por vehiculo ${tmpVehiculo.mostrarNumeroSerie()} es: ${tmpVehiculo.presupuestoDisponible()}`);
        }

    }
    await db.desconectarBD();
}

/**************************************************************************************************************** */

//Calcula el los sueldos relacionados con cada vehiculo

let sueldoXvehiculo = async () => {

    //submenu para elegir el tipo de vehiculo
    let n:string  = ( await leerTeclado("Seleccione gasto general en personal por: \nAvioneta (1);\nMoto(2); \nRally(3)\n"));

    let res: string ="";

    if (n == "1") {
        n="AIRE";
        res="Avionetas"
    } else if (n == "2") {
        n="ASFALTO";
        res="Motos"
    } else if (n == "3") {
        n="TIERRA";
        res="Coches"
    } else {
        console.log("La modalidad no existe en el sistema");
    }


    // Dos opciones dentro de la funcion 
    let y:string = ( await leerTeclado("lectura detallada(1);lectura general(2);"));


    await db.conectarBD();
    

    let dVehiculo: xVehiculo;
    let tmpVehiculo: Vehiculo;
    let tmpEmpleado: Empleado;
    let h: number=0
    let array: Array<any> = new Array<any>();

    
    let query: any = await Vehiculos.find({_tipoVehiculo: n});
    

if(y=="1"){

    for (dVehiculo of query) {


        if (dVehiculo._tipoVehiculo == n) {
            tmpVehiculo = new Aire (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial,dVehiculo._motoresUsados);
        } else if (dVehiculo._tipoVehiculo == n) {
            tmpVehiculo = new Asfalto ( dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._unidadesPotencia, dVehiculo._ruedas, dVehiculo._cilindraje, dVehiculo._trial);
        } else {
            tmpVehiculo = new Tierra (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._Dakar, dVehiculo._siniestros, dVehiculo._dias);
        }
        

        let query2: any = await Empleados.find({_numeroSerie: dVehiculo._numeroSerie});

        for (let dEmpleado of query2) {

            if (dEmpleado._puesto== "TECNICO AVION") {
                tmpEmpleado = new TecnicoAvion (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._numeroSerie, dEmpleado._modelo, dEmpleado._horasDeVuelo, dEmpleado._horasDeMantenimiento);
                
            }else if (dEmpleado._puesto== "JEFE EQUIPO") {
                tmpEmpleado = new JefeEquipo (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._proyectos, dEmpleado._numeroSerie, dEmpleado._posicion1, dEmpleado._cilindraje, dEmpleado._fechaContratacion, dEmpleado._trial);
            } else if (dEmpleado._puesto== "PILOTO") {
                tmpEmpleado = new Piloto (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._numeroSerie, dEmpleado._descalificaciones, dEmpleado._podios, dEmpleado._mundiales, dEmpleado._poles, dEmpleado._victorias);
            } else {
                tmpEmpleado = new Ingeniero (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._experiencia, dEmpleado._estudios, dEmpleado._idiomas, dEmpleado._numeroSerie);
            }
            
            // añadimos los empleados al vehiculo
            tmpVehiculo.addPersona(tmpEmpleado);
            

            
        }

        console.log(`el salario por ${res} ${tmpVehiculo.mostrarNumeroSerie()} es = ${tmpVehiculo.sueldoEquipo()}` );
        // el metodo sueldoEquipo() devuelve el sueldo total del vehiculo

        }
            
} else {

    for (dVehiculo of query) {


    if (dVehiculo._tipoVehiculo == n) {
        tmpVehiculo = new Aire (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial,dVehiculo._motoresUsados);
    } else if (dVehiculo._tipoVehiculo == n) {
         tmpVehiculo = new Asfalto ( dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._unidadesPotencia, dVehiculo._ruedas, dVehiculo._cilindraje, dVehiculo._trial);
    } else {
        tmpVehiculo = new Tierra (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._Dakar, dVehiculo._siniestros, dVehiculo._dias);
    }
            
    
            let query2: any = await Empleados.find({_numeroSerie: dVehiculo._numeroSerie});
    
            for (let dEmpleado of query2) {
    
                if (dEmpleado._puesto== "TECNICO AVION") {
                    tmpEmpleado = new TecnicoAvion (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._numeroSerie, dEmpleado._modelo, dEmpleado._horasDeVuelo, dEmpleado._horasDeMantenimiento);
                    
                }else if (dEmpleado._puesto== "JEFE EQUIPO") {
                    tmpEmpleado = new JefeEquipo (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._proyectos, dEmpleado._numeroSerie, dEmpleado._posicion1, dEmpleado._cilindraje, dEmpleado._fechaContratacion, dEmpleado._trial);
                } else if (dEmpleado._puesto== "PILOTO") {
                    tmpEmpleado = new Piloto (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._numeroSerie, dEmpleado._descalificaciones, dEmpleado._podios, dEmpleado._mundiales, dEmpleado._poles, dEmpleado._victorias);
                } else {
                    tmpEmpleado = new Ingeniero (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._experiencia, dEmpleado._estudios, dEmpleado._idiomas, dEmpleado._numeroSerie);
                }
                
                
                tmpVehiculo.addPersona(tmpEmpleado);
                
    
                
            }
            //en cada vuelta suma el empleado con el anterior
            h+=tmpVehiculo.sueldoEquipo();
    
            array.push(h);
        
            }

        console.log(`el sueldo total destinado a `+ res + ` es = `+array.pop()); 
        //usamos el pop para que nos devuelva el ultimo elemento del array con la suma total
        
    } 

    
}
/*************************************************************************************************************************************************** */

// Funcion de autenticacion para realizar una operacion
const setBD = async (local: boolean) => {
    
    const bdLocal = ''
  
    const conexionLocal = `mongodb://localhost/${bdLocal}`
    if (local) {
        db.cadenaConexion = conexionLocal
    }else{
        const bdAtlas = 'myFirstDatabase'
        const userAtlas = await leerTeclado('Usuario BD Atlas')
        const passAtlas = await leerTeclado('Password BD Atlas')
        const conexionAtlas =  
        `mongodb+srv://${userAtlas}:${passAtlas}@cluster0.oxux9.mongodb.net${bdAtlas}?retryWrites=true&w=majority`
        db.cadenaConexion = conexionAtlas
    }
  }
  
/******************************************************************************************************************************************************* */

const modificarEmpleado = async () => {


    await db.conectarBD();

    let numeroSeriedit: string = await leerTeclado('Introduce el numero de serie asociado al vehiculo: ')

    let tmpVehiculo: Vehiculo = new Vehiculo("","",0,0)
    let tmpEmpleado: Empleado = new Empleado("","",0,"")

    let query: any = await Vehiculos.findOne({_numeroSerie: numeroSeriedit});


    if (query._tipoVehiculo == "Aire") {
        tmpVehiculo = new Aire (query._numeroSerie, query._modelo, query._presupuesto, query._posicionMundial,query._motoresUsados);
    } else if (query._tipoVehiculo == "Asfalto") {
         tmpVehiculo = new Asfalto ( query._numeroSerie, query._modelo, query._presupuesto, query._posicionMundial, query._unidadesPotencia, query._ruedas, query._cilindraje, query._trial);
    } else {
        tmpVehiculo = new Tierra (query._numeroSerie, query._modelo, query._presupuesto, query._posicionMundial, query._Dakar, query._siniestros, query._dias);
    }
    

           

    let x : string 

    do {
            let dniquery: string = await leerTeclado('Introduce el dni del empleado que se quiere añadir: ');
            let query2: any = await Empleados.findOne({_dni: dniquery});

    
           if (query2._puesto== "TECNICO AVION") {
                tmpEmpleado = new TecnicoAvion (query2._dni, query2._nombre, query2._salario, query2._numeroSerie, query2._modelo, query2._horasDeVuelo, query2._horasDeMantenimiento);
            }else if (query2._puesto== "JEFE EQUIPO") {
                tmpEmpleado = new JefeEquipo (query2._dni, query2._nombre, query2._salario, query2._proyectos, query2._numeroSerie, query2._posicion1, query2._cilindraje, query2._fechaContratacion, query2._trial);
            } else if (query2._puesto== "PILOTO") {
                tmpEmpleado = new Piloto (query2._dni, query2._nombre, query2._salario, query2._numeroSerie, query2._descalificaciones, query2._podios, query2._mundiales, query2._poles, query2._victorias);
            } else {
                tmpEmpleado = new Ingeniero (query2._dni, query2._nombre, query2._salario, query2._experiencia, query2._estudios, query2._idiomas, query2._numeroSerie);
            }
            
                tmpVehiculo.addPersona(tmpEmpleado);

                let element= tmpVehiculo.getPersonas()
                console.log(element)

                let query3 = {_dni: tmpEmpleado.dni}
                let update = {$set: {_numeroSerie: tmpVehiculo.mostrarNumeroSerie()}}
                let options = { returnNewDocument: true }
                

                await Empleados.findOneAndUpdate(query3, update, options)

                .then(updatedemployee => {
                    if (updatedemployee) {
                        console.log(`El empleado ${tmpEmpleado.nombre} con dni ${tmpEmpleado.dni} ha sido actualizado`)
                        
                    } else {
                        console.log(`No se ha podido actualizar el empleado`)
                    }
                    return updatedemployee
                })
                .catch(err => {
                    console.log((err:any) => console.log(`Failed to find and update document : ${err}`))
                })

                x = await leerTeclado("¿Quiere modificar otro empleado? (si/no)") // sentencia para salir del bucle

    }while(x=="si")

}

/****************************************************************************************************************************** */

//creacion de una nueva coleccion con datos de las dos colecciones involucradas, Vehiculos y Empleados
const tablaRendimiento = async () => {

    await db.conectarBD();
    //Entrada por submenu
    let pregunta: string = await leerTeclado('¿Quiere actualizar/crear la tabla de resultados(1) o eliminarla(2) ?')


    if (pregunta == "1") {


        let dVehiculo: xVehiculo
        let dEmpleado: xEmpleado
        let tmpVehiculo: Vehiculo = new Vehiculo("","",0,0)
        let tmpEmpleado: Empleado = new Empleado("","",0,"")
        
        
        let sueldoTotal : number= 0 // se necesita una nueva variable para un campo extra
    

    
        let rSchema : any  //creacion de un nuevo Schema
  

        let dSchemaRendimiento: iRendimiento = {
            _numeroSerie: null,
            _modelo: null,
            _tipoVehiculo: null,
            _posicionMundial: null,
            _sueldoTotal: null,
            _presupuestoPorcentaje :null,
            _equipo: [
                {
                _dni: null,
                _nombre: null,
                _salario: null,
                _puesto: null,

                }
            ],
        
        }

        let dSchemaRendimientoEmpleado: iRendimientoEmpleado = {
            _dni: null,
            _nombre: null,
            _salario: null,
            _puesto: null,
        }


        let query: any = await Vehiculos.find({} ).sort({_posicionMundial: 1});  //la nueva coleccion ira ordenada por resultados

        for (dVehiculo of query){
        
        
            if (dVehiculo._tipoVehiculo == "AIRE") {
                tmpVehiculo = new Aire (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial,dVehiculo._motoresUsados);
            } else if (dVehiculo._tipoVehiculo == "ASFALTO") {
                tmpVehiculo = new Asfalto ( dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._unidadesPotencia, dVehiculo._ruedas, dVehiculo._cilindraje, dVehiculo._trial);
            } else { 
                tmpVehiculo = new Tierra (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial, dVehiculo._Dakar, dVehiculo._siniestros, dVehiculo._dias);
            }

            dSchemaRendimiento._numeroSerie  = dVehiculo._numeroSerie
            dSchemaRendimiento._modelo  =  dVehiculo._modelo
            dSchemaRendimiento._posicionMundial = dVehiculo._posicionMundial 
            dSchemaRendimiento._tipoVehiculo = dVehiculo._tipoVehiculo
            dSchemaRendimiento._equipo= new Array<iRendimientoEmpleado>()
        
       

        


            let query2: any = await Empleados.find({_numeroSerie : dVehiculo._numeroSerie});

        

            for (dEmpleado of query2){
                


                if (dEmpleado._puesto== "TECNICO AVION") {
                    tmpEmpleado = new TecnicoAvion (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._numeroSerie, dEmpleado._modelo, dEmpleado._horasDeVuelo, dEmpleado._horasDeMantenimiento);
                    
                }else if (dEmpleado._puesto== "JEFE EQUIPO") {
                    tmpEmpleado = new JefeEquipo (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._proyectos, dEmpleado._numeroSerie, dEmpleado._posicion1, dEmpleado._cilindraje, dEmpleado._fechaContratacion, dEmpleado._trial);
                } else if (dEmpleado._puesto== "PILOTO") {
                    tmpEmpleado = new Piloto (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._numeroSerie, dEmpleado._descalificaciones, dEmpleado._podios, dEmpleado._mundiales, dEmpleado._poles, dEmpleado._victorias);
                } else {
                    tmpEmpleado = new Ingeniero (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._experiencia, dEmpleado._estudios, dEmpleado._idiomas, dEmpleado._numeroSerie);
                }



                tmpVehiculo.addPersona(tmpEmpleado);



                dSchemaRendimientoEmpleado = {
                    _dni: null,
                    _nombre: null,
                    _salario: null,
                    _puesto: null,
                }
                    
                dSchemaRendimientoEmpleado._dni = dEmpleado._dni,
                dSchemaRendimientoEmpleado._nombre = dEmpleado._nombre,
                dSchemaRendimientoEmpleado._salario = dEmpleado._salario,
                dSchemaRendimientoEmpleado._puesto = dEmpleado._puesto,
                
                
                
                dSchemaRendimiento._equipo.push(dSchemaRendimientoEmpleado)
             

        }
        sueldoTotal = tmpVehiculo.sueldoEquipo() //calculos extraidos de la clase vehiculo

        dSchemaRendimiento._sueldoTotal = sueldoTotal //se agrega el campo extra
        dSchemaRendimiento._presupuestoPorcentaje = sueldoTotal /dVehiculo._presupuesto  * 100  //se agrega el campo extra
        
        rSchema = new Rendimientos(dSchemaRendimiento)
        
        await rSchema.save();
    }
    console.log("Tabla de resultados actualizada")
    
    }else if (pregunta  == "2"){
        await Rendimientos.deleteMany({})

        .then(deleted => {console.log(`Se han borrado ${deleted.deletedCount} registros`)})
        .catch(err => {console.log(`Error al borrar los registros: ${err}`)})
    
    }else{
        console.log("Opcion erronea")
    }

}


/********************************************************************************************************************************* */

//eliminamos un empleado dado su ID
const eliminar = async () => {

await db.conectarBD();
    
    await setBD(false)

    let opcion: string = await leerTeclado('¿Desea eliminar un vehiculo (1), un empleado (2), la tabla de resultados (3) o borrar la base de datos (4)? ')

    if (opcion == "1") { //eliminamos un vehiculo

        let numeroSeriedit: string = await leerTeclado('Introduce el numero de serie asociado al vehiculo: ')

        let query: any = await Vehiculos.findOneAndDelete({_numeroSerie: numeroSeriedit});

        if(query){
            console.log('Vehiculo eliminado')
        }else{
            console.log('Vehiculo no encontrado')
        }
    
    } else if (opcion == "2") { //eliminamos un empleado

        let dniquery: string = await leerTeclado('Introduce el dni del empleado que se quiere eliminar: ')

        let query: any = await Empleados.findOneAndDelete({_dni: dniquery});

        if(query){
            console.log('Empleado eliminado')
        }else{
            console.log('Empleado no encontrado')
        }
    
    }else if (opcion == "3") { //eliminamos documento de la tabla de resultados
            
            let numeroSerie: string = await leerTeclado('Introduce el numero de serie asociado al vehiculo: ')
    
            let query: any = await Rendimientos.findOneAndDelete({_numeroSerie: numeroSerie});
    
            if(query){
                console.log('Resultado eliminado')
            }else{
                console.log('Resultado no encontrado')
            }
    }
    else if (opcion == "4") {
        
        
        let query2: any = await Vehiculos.deleteMany({});

        let query: any = await Empleados.deleteMany({});

        let query3: any = await Rendimientos.deleteMany({});
        
        //comprobacion del proceso
        if (query.deletedCount >= 1) {
            console.log(`Los empleados han sido eliminados`)
        } else {
            console.log(`No se ha podido eliminar los empleados`)
        }

        if (query2.deletedCount >= 1) {
            console.log(`Los vehiculos han sido eliminados`)
        } else {
            console.log(`No se ha podido eliminar los vehiculos`)
        }

        if (query3.deletedCount >= 1) {
            console.log(`Los resultados han sido eliminados`)
        }else {
            console.log(`No se ha podido eliminar los resultados`)
        }
    } else {
        console.log(`Opcion incorrecta`)
    }

}

/*********************************************************************************************************************** */


const horasAviones = async () => {

    await db.conectarBD();

    let dVehiculo: xVehiculo;
    let dEmpleado: xEmpleado;
    let tmpVehiculo: Aire;
    let tmpEmpleado: TecnicoAvion;
    let horasT:number=0

    let query: any = await Vehiculos.find({_tipoVehiculo: "AIRE"});

    for (dVehiculo of query) {

    
        tmpVehiculo = new Aire (dVehiculo._numeroSerie, dVehiculo._modelo, dVehiculo._presupuesto, dVehiculo._posicionMundial,dVehiculo._motoresUsados);

        let query2: any = await Empleados.find({_numeroSerie : dVehiculo._numeroSerie});

        

            for ( dEmpleado of query2) {

                if (dEmpleado._puesto== "TECNICO AVION") {
                    tmpEmpleado = new TecnicoAvion (dEmpleado._dni, dEmpleado._nombre, dEmpleado._salario, dEmpleado._numeroSerie, dEmpleado._modelo, dEmpleado._horasDeVuelo, dEmpleado._horasDeMantenimiento);
            
                    horasT += tmpEmpleado.horasDeVuelo;

        
                }
                    
            
            }
        let media: number = horasT/tmpVehiculo.motoresUsados;
console.log(`El avion con numero de serie ${tmpVehiculo.numeroSerie} lleva ${horasT} horas de vuelo con ${tmpVehiculo.motoresUsados} motores usados, dando una media de ${media} horas de vuelo por motor` )
   
    }   

}

/**********************************************************************************************************************************e */
//Compramos los jefes de Equipo por su antiguedad
const compararJefe = async () => {

    await db.conectarBD();

    let dEmpleado: xEmpleado
    let tmpEmpleado1: JefeEquipo;
    let tmpEmpleado2: JefeEquipo;
    
    let peticion = await leerTeclado('¿Desea comparar un empleado (1)')
    let query: any = await Empleados.findOne({_dni : peticion});

       
        tmpEmpleado1 = new JefeEquipo (query._dni, query._nombre, query._salario, query._proyectos, query._numeroSerie, query._posicion1, query._cilindraje, query._fechaContratacion, query._trial);
                
            
    let peticion2 = await leerTeclado('¿Desea comparar un empleado (1)')
    let query2: any = await Empleados.findOne({_dni : peticion2});
    
            
        tmpEmpleado2 = new JefeEquipo (query2._dni, query2._nombre, query2._salario, query2._proyectos, query2._numeroSerie, query2._posicion1, query2._cilindraje, query2._fechaContratacion, query2._trial);
     
        tmpEmpleado1.fechaContratacion = new Date(tmpEmpleado1.fechaContratacion);
        tmpEmpleado2.fechaContratacion = new Date(tmpEmpleado2.fechaContratacion);
     //metodo de comparacion
JefeEquipo.empleadoMasAntiguo(tmpEmpleado1, tmpEmpleado2);
}




//menu
//menu
const main = async () => {
    let vehiculos: Array<Vehiculo> = new Array<Vehiculo>();
    let empleados: Array<Empleado> = new Array<Empleado>();
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                let y: number = parseInt(await leerTeclado("Seleccione el tipo de vehiculo que va a introducir: \n Avioneta (1); Moto(2); Rally(3)\n"));
                switch(y){
                    case 1:
                        await nuevoAire(vehiculos)
                        salvarV(vehiculos)
                        break
                    case 2:
                        await nuevoAsfalto(vehiculos)
                        salvarV(vehiculos)
                        break
                    case 3:
                        await nuevoTierra(vehiculos)
                        salvarV(vehiculos)
                        break   
                }
            break
            case 2: 
                let x: number = parseInt(await leerTeclado("Seleccione el empleado que va a introducir: \n Ingeniero (1); Piloto (2); JefeEquipo (3); TecnicoAvion (4)\n"));
                switch(x){
                    case 1:
                        await nuevoIngeniero(empleados)
                        salvarEmp(empleados)
                        break
                    case 2:
                        await nuevoPiloto(empleados)
                        salvarEmp(empleados)
                        break
                    case 3:
                        await nuevoJefeEquipo(empleados)
                        salvarEmp(empleados)
                    break
                    case 4:
                        await nuevoTecnicoAvion(empleados)
                        salvarEmp(empleados)
                        break
                }
            break
            case 3:
                await presupuestoTotal()
                break
            case 4:
                await sueldoXvehiculo()
                break
            case 5:
                await subidaDatosPrueba()
                break
            case 6:
                await modificarEmpleado()
                break
            case 7:
                await eliminar()
                break
            case 8:
                await tablaRendimiento()
                break
            case 9:
                await horasAviones()
                break
            case 10:
                await compararJefe()
                break
            }
    }while (n != 0)
}

main()
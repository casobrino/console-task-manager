import { inquiererMenu, pause, leerIntput } from './helpers/inquirer.js'
import { guardarDB, leerDb } from './helpers/guardarArchivo.js'
import Tareas from './models/tareas.js'

const tareas = new Tareas()

const main = async () => {
  let opt = null
  const tareasDB = leerDb()
  if (tareasDB) tareas.cargarTareasfromArr(tareasDB)
  do {
    console.clear()
    opt = await inquiererMenu()
    switch (opt) {
      case 1:
        const desc = await leerIntput('Description')
        tareas.crearTarea(desc)
        break
      case 2:
        tareas.listadoCompleto()
        break
      case 3:
        console.log(tareas.listadoArr)
        break
    }
    guardarDB(tareas.listadoArr)
    await pause()
  } while (opt != 0)
}


main()

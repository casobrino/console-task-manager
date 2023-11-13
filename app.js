import {
  inquiererMenu,
  pause,
  leerIntput,
  eliminarTarea,
  confirmarOption,
  mostrarListadoChecklist
} from './helpers/inquirer.js'
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
        tareas.listadoTareasStatus()
        break
      case 3:
        tareas.listarPendientesCompletadas(true)
        break
      case 4:
        tareas.listarPendientesCompletadas(false)
        break
      case 5:
        const ids = await mostrarListadoChecklist(tareas.listadoArr)
        tareas.cambiarStatusTareas(ids)
        break
      case 6:
        const id = await eliminarTarea(tareas.listadoArr)
        if (id === 0) break
        const confirm = await confirmarOption('Estas seguro que deseas borrarlo?')
        if (confirm) {
          tareas.borrarTarea(id)
          console.log('Tarea borrada correctamente')
        }
        break
    }
    guardarDB(tareas.listadoArr)
    await pause()
  } while (opt != 0)
}


main()

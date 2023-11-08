import colors from 'colors'
//import { mostrarMenu, pausa } from './helpers/mensajes.js';
import { inquiererMenu, pause, leerIntput } from './inquirer.js'
import Tareas from './models/tareas.js'

const main = async () => {
  let opt = ''
  const tareas = new Tareas();
  do {
    opt = await inquiererMenu();
    opt == 1 && leerIntput('Esta es mi desc')
    opt == 2 && console.log(tareas._listado)
    await pause();
  } while (opt != 0)
}


main()

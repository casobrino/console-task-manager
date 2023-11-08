import colors from 'colors'
import * as readline from 'node:readline'
export const mostrarMenu = async () => {
  console.clear()
  console.log("=======================".green);
  console.log('Selecciona una opcion'.green);
  console.log("=======================\n".green);

  console.log(`${'1.'.green} Crear na tarea{}`);
  console.log(`${'2.'.green} Listar tareas{}`);
  console.log(`${'3.'.green} Listar tareas completadas{}`);
  console.log(`${'4.'.green} Listar tareas pendientes{}`);
  console.log(`${'5.'.green} Completar tarea(s)`);
  console.log(`${'6.'.green} Borrar una tarea`);
  console.log(`${'0.'.green} Salir \n`);

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question('Selecciona una opcion: ', (opt) => {
      rl.close();
      resolve(opt)
    })
  })
}
export const pausa = () => {
  return new Promise(resolve => {

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question(`\nPresione ${'Enter'.blue} para continuar\n`, () => {
      rl.close();
      resolve()
    })
  })
}

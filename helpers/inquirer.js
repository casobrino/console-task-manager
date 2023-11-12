import inquirer from 'inquirer'
import colors from 'colors'

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Qué desea hacer?',
    choices: [
      { value: 1, name: `${'1.'.green} Crear una tarea{}` },
      { value: 2, name: `${'2.'.green} Listar tareas` },
      { value: 3, name: `${'3.'.green} Listar tareas completadas{}` },
      { value: 4, name: `${'4.'.green} Listar tareas pendientes{}` },
      { value: 5, name: `${'5.'.green} Completar tarea(s)` },
      { value: 6, name: `${'6.'.green} Borrar una tarea` },
      { value: 0, name: `${'0.'.green} Salir \n` },
    ]
  }
]

export const inquiererMenu = async () => {
  console.log("=======================".green)
  console.log('Selecciona una opcion'.green)
  console.log("=======================\n".green)
  const { option } = await inquirer.prompt(questions)
  return option
}
export const pause = async () => {
  await inquirer.prompt([{ type: 'input', name: 'espera', message: `\nPresiona ${'Enter'.blue} para continuar` }])
}
export const leerIntput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate (value) {
        return value.length === 0 ? 'Por favor ingrese un valor' : true
      }
    }
  ]
  const { desc } = await inquirer.prompt(question)
  return desc
}

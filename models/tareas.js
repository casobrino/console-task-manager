import colors from 'colors'
import Tarea from "./tarea.js"

export default class Tareas {
  _listado = {}
  constructor() {
    this._listado = {}
  }

  get listadoArr () {
    return Object.values(this._listado)
  }
  cargarTareasfromArr (tareas = []) {
    tareas.map(tarea => this._listado[tarea.id] = tarea)
  }
  crearTarea (desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }
  listadoCompleto () {
    this.listadoArr.map(({ desc, completadoEn }, idx) => console.log(`${idx + 1}. ${desc} :: ${completadoEn != null ? 'Completado'.green : 'Pendiente'.red}`))
  }
}
